const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const connectToDatabase = require('../models/db');
const logger = require('../logger');

const JWT_SECRET = process.env.JWT_SECRET;

// Register a new user
router.post('/register', async (req, res) => {
    try {
        // Connect to `secondChance` in MongoDB through `connectToDatabase` in `db.js`
        const db = await connectToDatabase();
        // Access the `users` collection
        const collection = db.collection("users");
        // Check for existing email
        const existingEmail = await collection.findOne({ email: req.body.email });
        if (existingEmail) {
            logger.error('Email id already exists');
            return res.status(400).json({ error: 'Email id already exists' });
        }

        const salt = await bcryptjs.genSalt(10);
        const hash = await bcryptjs.hash(req.body.password, salt);
        const email = req.body.email;

        // Save user details in database
        const newUser = await collection.insertOne({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hash,
            createdAt: new Date(),
        });

        // Create JWT authentication with user._id as payload
        const payload = {
            user: {
                id: newUser.insertedId,
            },
        };
        const authtoken = jwt.sign(payload, JWT_SECRET);

        logger.info('User registered successfully');
        res.json({ authtoken, email });
    } catch (e) {
        logger.error(e);
        return res.status(500).send('Internal server error');
    }
});

// Login an existing user
router.post('/login', async (req, res) => {
    try {
        // Connect to `secondChance` in MongoDB through `connectToDatabase` in `db.js`
        const db = await connectToDatabase();
        // Access the `users` collection
        const collection = db.collection("users");
        // Check for user credentials in database
        const theUser = await collection.findOne({ email: req.body.email });

        if (!theUser) {
            logger.error('User not found');
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if the password matches the encrypted password
        const result = await bcryptjs.compare(req.body.password, theUser.password);
        if (!result) {
            logger.error('Passwords do not match');
            return res.status(404).json({ error: 'Wrong password' });
        }

        // Fetch user details from database
        const userName = theUser.firstName;
        const userEmail = theUser.email;

        // Create JWT authentication with user._id as payload
        const payload = {
            user: {
                id: theUser._id.toString(),
            },
        };
        const authtoken = jwt.sign(payload, JWT_SECRET);

        logger.info('User logged in successfully');
        return res.status(200).json({ authtoken, userName, userEmail });
    } catch (e) {
        logger.error(e);
        return res.status(500).send('Internal server error');
    }
});

// Update user details
router.put('/update', body('name').notEmpty(), async (req, res) => {
    // Validate the input using `validationResult` and return an appropriate message if you detect an error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        logger.error('Validation errors in update request', errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Check if `email` is present in the header and throw an appropriate error message if it is not present
        const email = req.headers.email;
        if (!email) {
            logger.error('Email not found in the request headers');
            return res.status(400).json({ error: "Email not found in the request headers" });
        }

        // Connect to MongoDB
        const db = await connectToDatabase();
        const collection = db.collection("users");

        // Find the user credentials in database
        const existingUser = await collection.findOne({ email });
        if (!existingUser) {
            logger.error('User not found');
            return res.status(404).json({ error: "User not found" });
        }

        existingUser.firstName = req.body.name;
        existingUser.updatedAt = new Date();

        // Update the user credentials in the database
        const updatedUser = await collection.findOneAndUpdate(
            { email },
            { $set: existingUser },
            { returnDocument: 'after' }
        );

        // Create JWT authentication with `user._id` as a payload using the secret key from the .env file
        const payload = {
            user: {
                id: updatedUser._id.toString(),
            },
        };
        const authtoken = jwt.sign(payload, JWT_SECRET);

        logger.info('User updated successfully');
        res.json({ authtoken });
    } catch (e) {
        logger.error(e);
        return res.status(500).send('Internal server error');
    }
});

module.exports = router;
