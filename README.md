# 🏡 MajorProject — Property Listing Web App

<div align="center">

### 🌍 Discover • Create • Manage • Explore

A full-stack **property listing web application** built with **Node.js, Express.js, MongoDB, Mongoose and EJS**.

<p>
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-Framework-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Mongoose-ODM-880000?style=for-the-badge&logo=mongoose&logoColor=white" />
  <img src="https://img.shields.io/badge/EJS-Views-B4CA65?style=for-the-badge&logo=ejs&logoColor=black" />
</p>

<p>
  <img src="https://img.shields.io/github/repo-size/ranjit-sharma/MajorProject?style=flat-square" />
  <img src="https://img.shields.io/github/last-commit/ranjit-sharma/MajorProject?style=flat-square" />
  <img src="https://img.shields.io/github/languages/count/ranjit-sharma/MajorProject?style=flat-square" />
</p>

</div>

---

## 📖 About

**MajorProject** is a full-stack web application for working with property listings.

The project focuses on the complete flow of a database-driven Express application:

```text
Browser
   ↓
Express.js Routes
   ↓
Middleware & Validation
   ↓
Mongoose Models
   ↓
MongoDB
   ↓
EJS Templates
   ↓
Browser
```

It was built as a practical project to understand how a backend application connects **routes, middleware, database models, validation, and server-rendered views** into one complete application.

---

# ✨ What Can You Do?

### 🏠 Browse Listings
View available property listings through the listings page.

### ➕ Create a Listing
Open the new-listing form and submit property information.

### 👀 View Listing Details
Open an individual listing to see its complete information.

### ✏️ Edit Listings
Update existing listing information through the edit page.

### 🗑️ Delete Listings
Remove listings using the delete operation.

### 🗄️ Store Data in MongoDB
Listing data is persisted in MongoDB through Mongoose.

### 🧩 Reusable Views
EJS layouts and partials help keep the UI organized and reusable.

### ⚠️ Validation & Error Handling
The application includes validation and reusable error-handling utilities.

---

# 🛠️ Tech Stack

## 💻 Backend

<p>
<img src="https://skillicons.dev/icons?i=nodejs,express" />
</p>

- **Node.js** — JavaScript runtime
- **Express.js** — Web framework and routing
- **Mongoose** — MongoDB object modeling

## 🎨 Frontend

<p>
<img src="https://skillicons.dev/icons?i=html,css,js" />
</p>

- **EJS** — Server-side HTML templating
- **HTML5** — Page structure
- **CSS3** — Styling and responsive presentation
- **JavaScript** — Client-side interaction where required

## 🗄️ Database

<p>
<img src="https://skillicons.dev/icons?i=mongodb" />
</p>

- **MongoDB** — Stores property listing data
- **Mongoose** — Defines schemas/models and communicates with MongoDB

## 🔧 Development Tools

<p>
<img src="https://skillicons.dev/icons?i=git,github,vscode" />
</p>

- Git
- GitHub
- Visual Studio Code
- npm

---

# 🧠 Core Concepts Used

This project demonstrates several important full-stack concepts:

| Concept | How it is used |
|---|---|
| RESTful Routing | Separate routes for listing operations |
| CRUD | Create, Read, Update and Delete listings |
| Express Middleware | Request processing and reusable logic |
| Mongoose Models | Structure and access MongoDB data |
| EJS | Render dynamic server-side pages |
| EJS Layouts | Reuse common page structure |
| EJS Partials | Reuse components such as navbar/footer |
| Validation | Validate incoming listing data |
| Async/Await | Handle asynchronous database operations |
| Method Override | Support HTTP methods such as PUT/DELETE from forms |
| Error Handling | Centralized/reusable application error handling |
| Environment Variables | Keep sensitive configuration outside source code |

---

# 📂 Project Structure

```text
MajorProject/
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   └── listing.js
│
├── public/
│   └── css/
│       └── style.css
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── views/
│   ├── includes/
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   │
│   ├── layouts/
│   │   └── boilerplate.ejs
│   │
│   ├── listings/
│   │   ├── edit.ejs
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   └── show.ejs
│   │
│   └── error.ejs
│
├── app.js
├── schema.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

> **Note:** The exact files/folders may grow as the project is developed further.

---

# 🔄 How the Application Works

## 1️⃣ User Sends a Request

For example:

```text
GET /listings
```

The browser sends the request to the Express server.

---

## 2️⃣ Express Handles the Route

Express receives the request and executes the corresponding route handler.

Conceptually:

```javascript
app.get("/listings", async (req, res) => {
    // get listings
    // render page
});
```

---

## 3️⃣ Mongoose Communicates With MongoDB

The application uses the Listing model to retrieve or modify database records.

Example:

```javascript
const allListings = await Listing.find({});
```

---

## 4️⃣ EJS Renders the Result

The retrieved data is passed to an EJS page:

```javascript
res.render("listings/index.ejs", {
    allListings
});
```

The EJS template then generates the HTML shown in the browser.

---

# 🧩 CRUD Operations

The main functionality of the project follows the CRUD pattern.

```text
              CRUD
               │
      ┌────────┼────────┐
      ↓        ↓        ↓
   CREATE     READ     UPDATE
      │        │        │
      └────────┼────────┘
               ↓
             DELETE
```

### 🟢 Create

A user submits the new listing form.

```text
Form
 ↓
POST /listings
 ↓
Validate Data
 ↓
Create Mongoose Document
 ↓
Save to MongoDB
```

### 🔵 Read

The application retrieves listings from MongoDB:

```javascript
const allListings = await Listing.find({});
```

### 🟡 Update

An existing listing can be edited and updated.

```text
Edit Form
 ↓
PUT /listings/:id
 ↓
Update MongoDB
 ↓
Redirect
```

### 🔴 Delete

A listing can be removed:

```text
DELETE /listings/:id
 ↓
Remove document
 ↓
Redirect
```

---

# 🛣️ Main Routes

| HTTP Method | Route | Purpose |
|---|---|---|
| `GET` | `/listings` | Display all listings |
| `GET` | `/listings/new` | Display new-listing form |
| `POST` | `/listings` | Create a listing |
| `GET` | `/listings/:id` | Display one listing |
| `GET` | `/listings/:id/edit` | Display edit form |
| `PUT` | `/listings/:id` | Update a listing |
| `DELETE` | `/listings/:id` | Delete a listing |

> Route names may change as the application evolves.

---

# 🗃️ Data Model

The project uses a Mongoose **Listing** model.

A simplified example of the idea is:

```javascript
const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    // additional listing fields...
});
```

The model is responsible for defining how listing information is represented in MongoDB.

---

# 🧱 Folder Responsibilities

## `init/`

Contains initialization/seed-related code used to prepare listing data.

## `models/`

Contains Mongoose models and database schemas.

```text
models/
└── listing.js
```

## `public/`

Contains static frontend assets.

```text
public/
└── css/
    └── style.css
```

## `utils/`

Contains reusable application utilities such as custom errors and async wrappers.

## `views/`

Contains all EJS pages.

### `includes/`

Reusable UI components such as:

- Navbar
- Footer

### `layouts/`

Common page layout used by multiple views.

### `listings/`

Listing-related pages:

- Index
- New
- Show
- Edit

---

# ⚙️ Installation & Setup

## Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB or access to MongoDB Atlas
- Git

---

## 1. Clone the Repository

```bash
git clone https://github.com/ranjit-sharma/MajorProject.git
```

Move into the project:

```bash
cd MajorProject
```

---

## 2. Install Dependencies

```bash
npm install
```

This installs the packages listed in `package.json`.

---

## 3. Create Environment Variables

Create a `.env` file in the root of the project.

Example:

```env
MONGO_URL=your_mongodb_connection_string
```

Use your own MongoDB connection string.

### 🔐 Keep `.env` Private

Never commit your `.env` file.

The project's `.gitignore` is configured to ignore:

```text
.env
node_modules/
```

---

## 4. Start the Application

Run:

```bash
node app.js
```

If your `package.json` contains a start/development script, you can use the appropriate npm command instead.

---

## 5. Open in Browser

Open the local address configured by the application.

For example:

```text
http://localhost:8080
```

---

# 🌱 Seed / Initial Data

The project contains an `init` folder for initialization-related code:

```text
init/
├── data.js
└── index.js
```

If you use the initialization script to populate the database, run the command defined by your project setup.

For example, if the initialization file is designed to be executed directly:

```bash
node init/index.js
```

> Run this only if your current initialization script is intended to seed the database.

---

# 🛡️ Validation & Error Handling

The project separates validation and reusable error-handling logic instead of placing everything inside one route.

Important utility files include:

```text
utils/
├── ExpressError.js
└── wrapAsync.js
```

This structure makes the application easier to maintain and reduces repeated error-handling code.

---

# 🎨 Frontend

The application uses EJS for dynamic server-rendered pages and CSS for presentation.

The main stylesheet is:

```text
public/css/style.css
```

Common reusable components are organized under:

```text
views/includes/
```

and the shared layout is stored under:

```text
views/layouts/
```

This keeps the frontend more organized than putting every page into one large file.

---

# 📸 Screenshots

Add screenshots of your actual application here.

Recommended folder:

```text
screenshots/
├── home.png
├── listings.png
├── listing-details.png
├── create-listing.png
└── edit-listing.png
```

Then add them to this README:

```markdown
## 📸 Screenshots

### 🏠 Listings

![Listings](screenshots/listings.png)

### 🏡 Listing Details

![Listing Details](screenshots/listing-details.png)

### ➕ Create Listing

![Create Listing](screenshots/create-listing.png)
```

---

# 🚀 Future Improvements

The project can be extended with features such as:

- [ ] User authentication
- [ ] Authorization
- [ ] User profiles
- [ ] Image upload/storage
- [ ] Search functionality
- [ ] Category filters
- [ ] Location-based search
- [ ] Pagination
- [ ] Reviews and ratings
- [ ] Flash messages
- [ ] Improved validation
- [ ] Deployment
- [ ] Responsive UI improvements

---

# 📚 Learning Outcomes

Building this project helped me understand how different parts of a full-stack application work together.

### Backend

- Creating an Express server
- Defining routes
- Using middleware
- Handling HTTP methods
- Working with asynchronous operations

### Database

- Connecting Node.js to MongoDB
- Creating Mongoose schemas
- Creating models
- Performing CRUD operations
- Querying MongoDB

### Frontend

- Creating EJS templates
- Passing backend data into views
- Using layouts and partials
- Organizing CSS

### Software Development

- Structuring a project
- Handling errors
- Validating data
- Using Git
- Managing a GitHub repository
- Using environment variables safely

---

# 🧪 Development Workflow

A typical workflow for this project is:

```text
1. Create / modify feature
        ↓
2. Test locally
        ↓
3. Check Git status
        ↓
4. git add .
        ↓
5. git commit
        ↓
6. git push
        ↓
7. GitHub
```

Useful commands:

```bash
git status
```

```bash
git add .
```

```bash
git commit -m "Describe your changes"
```

```bash
git push
```

---

# 💻 GitHub Repository

<p align="center">

<a href="https://github.com/ranjit-sharma/MajorProject">
  <img src="https://img.shields.io/badge/View%20Repository-GitHub-181717?style=for-the-badge&logo=github" />
</a>

</p>

---

# 👨‍💻 Author

## Ranjit Sharma

**Web Developer • DSA • Java • C • C++ • JavaScript**

<p>
  <a href="https://github.com/ranjit-sharma">
    <img src="https://img.shields.io/badge/GitHub-ranjit--sharma-181717?style=for-the-badge&logo=github" />
  </a>
</p>

---

<div align="center">

### ⭐ If this project helped or interested you, consider giving it a star!

### 🚀 Keep Learning • Keep Building • Keep Coding

</div>
