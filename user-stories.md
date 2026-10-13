# SecondChance – User Stories

Each story below is meant to be created as a GitHub issue using the **User Story** template
(`.github/ISSUE_TEMPLATE/user-story.md`) and tagged with the indicated label.

---

## 1. Set up the MongoDB database
**Label:** `technical debt`

**As a** developer
**I need** a MongoDB database pre-loaded with the sample second-hand items
**So that** the back-end services have data to serve

### Details and Assumptions
* The import script lives in `secondChance-backend/util/import-mongo`
* 16 documents must be inserted into the `secondChanceItems` collection

### Acceptance Criteria
```gherkin
Given the MongoDB instance is running
When I run the import script
Then 16 documents are inserted into the secondChanceItems collection
```

---

## 2. List all available items
**Label:** `backlog`

**As a** visitor
**I need** to see every item that has been posted for donation
**So that** I can browse what is available for free

### Details and Assumptions
* Endpoint: `GET /api/secondchance/items`

### Acceptance Criteria
```gherkin
Given there are items in the database
When I open the main page
Then I see the list of all available items
```

---

## 3. View item details
**Label:** `backlog`

**As a** user
**I need** to view the full details of an item
**So that** I can decide whether it fits my needs

### Details and Assumptions
* Endpoint: `GET /api/secondchance/items/:id`
* Details include name, category, condition, age, description, image and comments

### Acceptance Criteria
```gherkin
Given an item exists with a known id
When I click on that item
Then I see all of its details
```

---

## 4. Post a new item with a photo
**Label:** `backlog`

**As a** donor
**I need** to post an item I no longer need along with a picture
**So that** someone else can reuse it

### Details and Assumptions
* Endpoint: `POST /api/secondchance/items` with a file upload (multer)

### Acceptance Criteria
```gherkin
Given I am on the add item form
When I submit the item details and an image
Then the item is saved and the image is stored in public/images
```

---

## 5. Remove an item that has been given away
**Label:** `backlog`

**As a** donor
**I need** to delete an item I have already given away
**So that** other users do not request items that are no longer available

### Details and Assumptions
* Endpoint: `DELETE /api/secondchance/items/:id`

### Acceptance Criteria
```gherkin
Given an item I posted exists
When I delete it
Then it no longer appears in the item list
```

---

## 6. Search items with filters
**Label:** `new`

**As a** user
**I need** to search items by name, category, condition and age
**So that** I can quickly find items matching my taste

### Details and Assumptions
* Endpoint: `GET /api/secondchance/search?name=&category=&condition=&age_years=`

### Acceptance Criteria
```gherkin
Given items of several categories exist
When I search with category "Living"
Then only items in the Living category are returned
```

---

## 7. Register, log in and update my profile
**Label:** `new`

**As a** user
**I need** to create an account, log in securely and update my name
**So that** I can interact with items and manage my profile

### Details and Assumptions
* Endpoints: `POST /api/auth/register`, `POST /api/auth/login`, `PUT /api/auth/update`
* Passwords are hashed with bcrypt and sessions use JSON Web Tokens

### Acceptance Criteria
```gherkin
Given I am a new user
When I register and then log in with my credentials
Then I receive an auth token and my name appears in the navigation bar
```

---

## 8. Analyze the sentiment of item comments
**Label:** `icebox`

**As a** user
**I need** comments on items to be analyzed as positive, neutral or negative
**So that** I get a quick sense of how others feel about an item

### Details and Assumptions
* Separate `sentiment` micro-service using the `natural` npm package
* Endpoint: `POST /sentiment?sentence=...`

### Acceptance Criteria
```gherkin
Given a comment "This lamp is great"
When the sentiment service analyzes it
Then the response contains a positive sentiment and its score
```

---

## 9. Containerize and deploy the application with CI/CD
**Label:** `icebox`

**As a** developer
**I need** the front-end and back-end containerized and deployed automatically
**So that** the application is reachable on the cloud and every push is validated

### Details and Assumptions
* Docker images for back-end, front-end and sentiment services
* Deployment to Kubernetes and IBM Code Engine
* GitHub Actions workflow running lint and build steps

### Acceptance Criteria
```gherkin
Given a commit is pushed to the main branch
When the GitHub Actions workflow runs
Then all steps succeed and the application is deployed
```
