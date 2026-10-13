const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const connectToDatabase = require('../models/db');
const logger = require('../logger');

// Define the upload directory path
const directoryPath = 'public/images';

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, directoryPath); // Specify the upload directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  },
});

const upload = multer({ storage: storage });


// Get all secondChanceItems
router.get('/', async (req, res, next) => {
    logger.info('/ called');
    try {
        //Step 2: task 1 - retrieve the database connection
        const db = await connectToDatabase();
        //Step 2: task 2 - use the collection() method to retrieve the secondChanceItems collection
        const collection = db.collection("secondChanceItems");
        //Step 2: task 3 - fetch all secondChanceItems using collection.find()
        const secondChanceItems = await collection.find({}).toArray();
        //Step 2: task 4 - return the secondChanceItems
        res.json(secondChanceItems);
    } catch (e) {
        logger.error('oops something went wrong', e);
        next(e);
    }
});

// Add a new item
router.post('/', upload.single('file'), async(req, res,next) => {
    try {
        //Step 3: task 1 - retrieve the database connection
        const db = await connectToDatabase();
        //Step 3: task 2 - use the collection() method to retrieve the secondChanceItems collection
        const collection = db.collection("secondChanceItems");
        //Step 3: task 3 - create a new secondChanceItem from the request body
        let secondChanceItem = req.body;
        //Step 3: task 4 - get the last id, increment it by 1, and set it to the new secondChanceItem
        const lastItemQuery = await collection.find().sort({'id': -1}).limit(1).toArray();
        const lastId = lastItemQuery.length > 0 ? parseInt(lastItemQuery[0].id) : 0;
        secondChanceItem.id = (lastId + 1).toString();
        //Step 3: task 5 - set the current date in the new item
        const date_added = Math.floor(new Date().getTime() / 1000);
        secondChanceItem.date_added = date_added;
        if (req.file) {
            secondChanceItem.image = `/images/${req.file.originalname}`;
        }
        await collection.insertOne(secondChanceItem);
        res.status(201).json(secondChanceItem);
    } catch (e) {
        next(e);
    }
});

// Get a single secondChanceItem by ID
router.get('/:id', async (req, res, next) => {
    try {
        //Step 4: task 1 - retrieve the database connection
        const db = await connectToDatabase();
        //Step 4: task 2 - use the collection() method to retrieve the secondChanceItems collection
        const collection = db.collection("secondChanceItems");
        //Step 4: task 3 - find a specific secondChanceItem by its ID
        const id = req.params.id;
        const secondChanceItem = await collection.findOne({ id: id });
        //Step 4: task 4 - return the secondChanceItem or an error message if not found
        if (!secondChanceItem) {
            return res.status(404).send("secondChanceItem not found");
        }
        res.json(secondChanceItem);
    } catch (e) {
        next(e);
    }
});

// Update and existing item
router.put('/:id', async(req, res,next) => {
    try {
        //Step 5: task 1 - retrieve the database connection
        const db = await connectToDatabase();
        //Step 5: task 2 - use the collection() method to retrieve the secondChanceItems collection
        const collection = db.collection("secondChanceItems");
        //Step 5: task 3 - check if the secondChanceItem exists
        const id = req.params.id;
        const secondChanceItem = await collection.findOne({ id: id });
        if (!secondChanceItem) {
            logger.error('secondChanceItem not found');
            return res.status(404).json({ error: "secondChanceItem not found" });
        }
        //Step 5: task 4 - update the item's attributes
        const update = {
            category: req.body.category,
            condition: req.body.condition,
            age_days: req.body.age_days,
            description: req.body.description,
            age_years: Number((req.body.age_days / 365).toFixed(1)),
            updatedAt: new Date(),
        };
        const updatepreloveItem = await collection.findOneAndUpdate(
            { id: id },
            { $set: update },
            { returnDocument: 'after' }
        );
        //Step 5: task 5 - send confirmation
        if (updatepreloveItem) {
            res.json({"uploaded":"success"});
        } else {
            res.json({"uploaded":"failed"});
        }
    } catch (e) {
        next(e);
    }
});

// Delete an existing item
router.delete('/:id', async(req, res,next) => {
    try {
        //Step 6: task 1 - retrieve the database connection
        const db = await connectToDatabase();
        //Step 6: task 2 - use the collection() method to retrieve the secondChanceItems collection
        const collection = db.collection("secondChanceItems");
        //Step 6: task 3 - find a specific secondChanceItem by ID
        const id = req.params.id;
        const secondChanceItem = await collection.findOne({ id: id });
        if (!secondChanceItem) {
            logger.error('secondChanceItem not found');
            return res.status(404).json({ error: "secondChanceItem not found" });
        }
        //Step 6: task 4 - delete the object and send an appropriate message
        await collection.deleteOne({ id: id });
        res.json({"deleted":"success"});
    } catch (e) {
        next(e);
    }
});

module.exports = router;
