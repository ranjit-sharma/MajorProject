# 🏡 WonderLust — Full-Stack Travel & Property Listing Web App

<div align="center">

### 🌍 Discover • Create • Review • Explore

A modern full-stack travel and staycation accommodation web application inspired by Airbnb, engineered with **Node.js, Express.js 5, MongoDB, Mongoose, Passport.js, and EJS-Mate**.

[![Node.js](https://img.shields.io/badge/Node.js-v20+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v5.2-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-NoSQL-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-v9.9-880000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)
[![Passport](https://img.shields.io/badge/Passport.js-Auth-34E27A?style=for-the-badge&logo=passport&logoColor=black)](https://www.passportjs.org/)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-v5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![EJS](https://img.shields.io/badge/EJS--Mate-Templates-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)](https://ejs.co/)

<p>
  <img src="https://img.shields.io/github/repo-size/ranjit-sharma/MajorProject?style=flat-square" alt="Repo size" />
  <img src="https://img.shields.io/github/last-commit/ranjit-sharma/MajorProject?style=flat-square" alt="Last commit" />
  <img src="https://img.shields.io/github/languages/count/ranjit-sharma/MajorProject?style=flat-square" alt="Languages count" />
</p>

[Key Features](#-key-features) •
[Tech Stack](#-tech-stack-details) •
[Architecture](#-architecture--request-flow) •
[Database Schemas](#-database-schemas--relationships) •
[RESTful API Routes](#-restful-api-routes) •
[Project Structure](#-project-structure) •
[Getting Started](#-getting-started--installation) •
[Author](#-author)

</div>

---

## 📖 About The Project

**WonderLust** is a comprehensive, production-oriented full-stack web application designed for discovering, listing, and reviewing vacation rentals and unique stays worldwide. 

Built using the **Model-View-Controller (MVC)** architectural pattern, WonderLust demonstrates the end-to-end flow of modern server-rendered JavaScript web applications—integrating secure user authentication, robust data validation, stateful sessions, flash notifications, and relational NoSQL data modeling with cascading deletions.

---

## ✨ Key Features

### 🏠 1. Listings Management (Full CRUD)
- **Explore All Listings**: Responsive multi-column grid showing property cards with image, title, and formatted pricing (INR `₹ /night`).
- **Detailed View**: Dedicated show page displaying property title, high-resolution imagery, full description, location, country, and reviews.
- **Add New Listings**: Intuitive form with fallback default placeholder images for unprovided photo URLs.
- **Edit & Update**: Pre-filled update forms with strict schema re-validation on save.
- **Delete Listings**: One-click listing deletion with automatic cascading cleanup of all related reviews.

### ⭐ 2. Interactive Review & Rating System
- **1–5 Star Rating & Feedback**: Visitors can submit star ratings along with detailed review comments.
- **One-to-Many Linking**: Reviews are saved as distinct documents and referenced inside their parent listing document via MongoDB `ObjectId`.
- **Review Deletion & Cleanup**: Individual review removal using Mongoose `$pull` operator and automated post-middleware cascade deletion when listings are removed.

### 🔐 3. User Authentication & Session Management
- **User Registration & Login**: User signup and login system built with **Passport.js** and **Passport-Local-Mongoose**.
- **Secure Password Handling**: Passwords are automatically hashed and salted using industry-standard cryptography (PBKDF2/crypto).
- **Persistent Sessions**: Powered by `express-session` with 7-day cookie persistence (`httpOnly: true` for XSS protection).
- **Session-Based Flash Alerts**: Dynamic Bootstrap alerts for success and error actions (e.g., "Welcome back to WanderLust!", "New listing created!", "Listing Deleted!", "New Review Created!").

### 🛡️ 4. Robust Two-Tier Validation & Error Handling
- **Client-Side Validation**: Instant form validation via HTML5 and Bootstrap 5 `.needs-validation` styling before submission.
- **Server-Side Validation with Joi**: Strict schema checking (`listingSchema` & `reviewSchema`) preventing invalid or malicious payloads from hitting the database.
- **Centralized Error Handling**: Custom `ExpressError` class combined with a `wrapAsync` wrapper eliminating messy `try/catch` boilerplate.
- **Dedicated Error UI**: Custom 404 and 500 error view (`views/error.ejs`).

### 🌱 5. Database Seeding
- Pre-configured seeding script with **30+ realistic travel destinations** worldwide (villas, beachfront cottages, rustic cabins, luxury penthouses) ready for local exploration.

---

## 🛠️ Tech Stack Details

WonderLust is powered by a curated, modern full-stack JavaScript environment:

### 🖥️ Backend & Server Environment
<p>
  <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb" />
</p>

| Technology | Version | Purpose |
|:---|:---:|:---|
| **Node.js** | `v20+` | Cross-platform JavaScript runtime environment |
| **Express.js** | `v5.2.1` | Next-generation web framework handling HTTP routing and middleware pipeline |
| **MongoDB** | `v6.0+` | Scalable NoSQL document-oriented database |
| **Mongoose** | `v9.9.3` | Object Data Modeling (ODM) library for schema validation, hooks, and queries |

### 🔐 Authentication & Session State
| Package | Version | Purpose |
|:---|:---:|:---|
| **Passport.js** | `v0.7.0` | Flexible authentication middleware for Node.js |
| **Passport-Local** | `v1.0.0` | Username & password authentication strategy |
| **Passport-Local-Mongoose** | `v9.1.0` | Mongoose plugin providing automated hashing, salting, and auth helpers |
| **Express-Session** | `v1.19.0` | Server-side session management with configurable signed cookies |
| **Connect-Flash** | `v0.1.1` | Flash message notifications stored across request lifecycles |
| **Cookie-Parser** | `v1.4.7` | Middleware for parsing and managing HTTP request cookies |

### 🎨 Frontend & Templating
<p>
  <img src="https://skillicons.dev/icons?i=html,css,js,bootstrap" />
</p>

| Technology | Source / Version | Purpose |
|:---|:---:|:---|
| **EJS (Embedded JavaScript)** | `v6.0.1` | Server-side templating engine for generating dynamic HTML |
| **EJS-Mate** | `v4.0.0` | Layout boilerplate engine enabling reusable partials and nested layouts |
| **Bootstrap 5** | `v5.3.8` (CDN) | Responsive grid system, navigation, form styling, and alert components |
| **Font Awesome** | `v7.3.1` (CDN) | Vector icons for UI elements, navigation compass, social links, and stars |
| **Google Fonts** | *Plus Jakarta Sans* | Clean, modern typography designed for readability |
| **Custom CSS3** | `public/css/style.css` | Airbnb-style card overlays, brand styling (`#fe424d`), flexbox layouts |
| **Vanilla JavaScript** | `public/js/script.js` | Client-side form validity checking and DOM interactions |

### 🛡️ Validation & HTTP Utilities
| Package | Version | Purpose |
|:---|:---:|:---|
| **Joi** | `v18.2.5` | Powerful schema description language and data validator for request payloads |
| **Method-Override** | `v3.0.0` | Allows HTML forms to simulate `PUT` and `DELETE` requests using query params |
| **WrapAsync** | Custom Utility | Asynchronous function wrapper to route errors seamlessly to Express error handlers |
| **ExpressError** | Custom Class | Custom HTTP error class with configurable status codes and error messages |

### 🔨 Developer Tools
| Tool | Purpose |
|:---|:---|
| **Nodemon** (`v3.1.14`) | Development utility that automatically restarts the Node server upon code changes |
| **Git & GitHub** | Source code management and version control |
| **Visual Studio Code** | Primary Integrated Development Environment |

---

## 🔄 Architecture & Request Flow

```text
Browser Client
   │
   ├─► [1] HTTP Request (GET, POST, PUT, DELETE)
   │
Express Server (app.js)
   │
   ├─► [2] Static Assets (public/css, public/js)
   ├─► [3] Middleware Pipeline
   │        ├─ express.urlencoded() & methodOverride()
   │        ├─ express-session & cookie configuration
   │        ├─ passport.initialize() & passport.session()
   │        └─ flash() & res.locals injection (success/error alerts)
   │
Express Routers (routes/)
   │
   ├─► [4] Joi Schema Validation (validateListing, validateReview)
   │
Mongoose & MongoDB (models/)
   │
   ├─► [5] Models: Listing, Review, User
   │        └─ Cascading Middleware: listingSchema.post("findOneAndDelete")
   │
Response Pipeline (views/)
   │
   └─► [6] EJS-Mate renders boilerplate.ejs + view + flash messages ──► HTML to Browser
```

---

## 🗃️ Database Schemas & Relationships

### 1. Listing Schema (`models/listing.js`)
```javascript
{
  title:       { type: String, required: true },
  description: String,
  image:       { type: String, default: "...", set: (v) => (v === "" ? defaultURL : v) },
  price:       Number,
  location:    String,
  country:     String,
  reviews:     [{ type: Schema.Types.ObjectId, ref: "Review" }]
}
```
> **Cascade Deletion Hook**: When a listing is removed via `findByIdAndDelete`, a Mongoose `post("findOneAndDelete")` middleware automatically deletes all reviews linked in `listing.reviews`.

### 2. Review Schema (`models/review.js`)
```javascript
{
  comment:   String,
  rating:    { type: Number, min: 1, max: 5 },
  createdAt: { type: Date, default: Date.now }
}
```

### 3. User Schema (`models/user.js`)
```javascript
{
  email: { type: String, required: true }
  // username, hash, salt, and iterations are automatically injected by passportLocalMongoose
}
```

---

## 🛣️ RESTful API Routes

### 🏡 Listings (`routes/listing.js`)
| Method | Endpoint | Description | Middleware & Validation |
|:---:|:---|:---|:---|
| `GET` | `/listings` | Display all available property listings | `wrapAsync` |
| `GET` | `/listings/new` | Render form to create a new property listing | Standard handler |
| `POST` | `/listings` | Add new listing to database | `validateListing`, `wrapAsync` |
| `GET` | `/listings/:id` | Show single listing with populated reviews | `wrapAsync` |
| `GET` | `/listings/:id/edit`| Render edit form for existing listing | `wrapAsync` |
| `PUT` | `/listings/:id` | Update an existing listing's information | `validateListing`, `wrapAsync` |
| `DELETE`| `/listings/:id` | Delete listing and cascade delete its reviews | `wrapAsync` |

### ⭐ Reviews (`routes/review.js`)
| Method | Endpoint | Description | Middleware & Validation |
|:---:|:---|:---|:---|
| `POST` | `/listings/:id/reviews` | Create review and attach to listing | `validateReview`, `wrapAsync` |
| `DELETE`| `/listings/:id/reviews/:reviewId` | Remove review from listing & database | `wrapAsync` |

### 👤 Users & Authentication (`routes/user.js`)
| Method | Endpoint | Description | Middleware & Validation |
|:---:|:---|:---|:---|
| `GET` | `/signup` | Render user registration form | Standard handler |
| `POST` | `/signup` | Register new user, hash password, and log in | `wrapAsync` |
| `GET` | `/login` | Render user login form | Standard handler |
| `POST` | `/login` | Authenticate user credentials with Passport | `passport.authenticate("local")` |

---

## 📂 Project Structure

```text
MajorProject/
├── init/                         # Database initialization & seeding scripts
│   ├── data.js                   # 30+ sample listing objects with global destinations
│   └── index.js                  # Database seeder execution script
│
├── models/                       # Mongoose database models
│   ├── listing.js                # Listing schema, defaults, & cascade delete hook
│   ├── review.js                 # Review schema (rating, comment, timestamp)
│   └── user.js                   # User schema with passport-local-mongoose plugin
│
├── public/                       # Static client-side assets
│   ├── css/
│   │   └── style.css             # Custom styles, card effects, navbar & footer layout
│   └── js/
│       └── script.js             # Bootstrap client-side form validation script
│
├── routes/                       # Express modular route handlers
│   ├── listing.js                # Full CRUD routes for property listings
│   ├── review.js                 # Nested routes for creating & deleting reviews
│   └── user.js                   # Authentication routes (signup, login)
│
├── utils/                        # Reusable helper utilities
│   ├── ExpressError.js           # Custom error class with status codes
│   └── wrapAsync.js              # Higher-order async error handling wrapper
│
├── views/                        # EJS dynamic server-rendered templates
│   ├── includes/                 # Reusable UI partials
│   │   ├── flash.ejs             # Dismissible success & error alert banners
│   │   ├── footer.ejs            # Global sticky footer with branding & social links
│   │   └── navbar.ejs            # Top navigation bar with responsive toggler
│   ├── layouts/
│   │   └── boilerplate.ejs       # Main HTML skeleton, CDNs, fonts, and scripts
│   ├── listings/                 # Listing view templates
│   │   ├── edit.ejs              # Edit property form view
│   │   ├── index.ejs             # All listings grid view
│   │   ├── new.ejs               # New property creation form view
│   │   └── show.ejs              # Detailed listing view with reviews section
│   ├── users/                    # User authentication view templates
│   │   ├── login.ejs             # User login form view
│   │   └── signup.ejs            # User registration form view
│   └── error.ejs                 # Error page rendering custom error messages
│
├── app.js                        # Main application entry point & Express configuration
├── schema.js                     # Joi validation schemas (listingSchema, reviewSchema)
├── package.json                  # Project dependencies & metadata
├── package-lock.json             # Exact dependency lockfile
├── .gitignore                    # Ignored files (node_modules, .env, etc.)
└── README.md                     # Comprehensive project documentation
```

---

## ⚙️ Getting Started & Installation

Follow these step-by-step instructions to get a local copy of WonderLust running on your machine:

### 📋 Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (Version 18.x or 20.x recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) installed and running locally on port `27017` (or a remote MongoDB Atlas connection string)
- [Git](https://git-scm.com/)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ranjit-sharma/MajorProject.git
cd MajorProject
```

---

### 2️⃣ Install Dependencies

Install all required production and development dependencies:

```bash
npm install
```

---

### 3️⃣ Verify Database Connection

By default, the project connects to a local MongoDB instance at:
```text
mongodb://127.0.0.1:27017/wonderlust
```

Ensure your MongoDB service is running:
- **Windows**: Start MongoDB via Services or run `mongod` in your terminal.
- **macOS / Linux**: `sudo systemctl start mongod` or `brew services start mongodb-community`.

---

### 4️⃣ Seed Initial Data *(Optional but Recommended)*

Populate your database with 30+ ready-to-browse sample listings:

```bash
node init/index.js
```

You should see:
```text
connected to DB
data was initialized
```

---

### 5️⃣ Run the Application

Start the server using Node:

```bash
node app.js
```

Or run with **Nodemon** for auto-reloading during development:

```bash
npx nodemon app.js
```

The terminal will log:
```text
server is listening to port 8080
connected to DB
```

---

### 6️⃣ Open in Browser

Visit the application in your browser:

```text
http://localhost:8080/listings
```

- Browse available stays on the homepage.
- Create an account at `/signup`.
- Log in at `/login`.
- Add a new listing via `/listings/new`.
- Add ratings and review comments on any listing's show page.

---

## 🧠 Key Concepts & Patterns Implemented

- **RESTful Routing Architecture**: Consistent HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) mapping to standard resource endpoints.
- **Model-View-Controller (MVC)**: Clean separation of concerns between database logic (`models`), routing controllers (`routes`), and presentation (`views`).
- **Middleware Chain**: Sequential processing for body parsing, method overriding, session initialization, flash alerts, and authentication.
- **Parent-Child Reference Modeling**: Normalizing reviews and listings while using Mongoose `populate("reviews")` for efficient document retrieval.
- **Cascading Deletions**: Automated cleanup of orphaned review documents via Mongoose post-query middleware.
- **Client & Server Defense-in-Depth Validation**: Preventing bad data with client-side feedback (Bootstrap) paired with uncompromising server-side validation (Joi).

---

## 🚀 Future Roadmap

- [ ] **Cloudinary Integration**: Direct image file uploads via `multer` and `multer-storage-cloudinary`.
- [ ] **Mapbox Geocoding & Maps**: Display interactive maps with geocoded pins for listing locations.
- [ ] **Listing Authorization**: Restrict editing and deleting permissions strictly to listing owners.
- [ ] **Review Authorship**: Associate reviews with logged-in user profiles.
- [ ] **Search & Categorization**: Filter listings by category (e.g., Beachfront, Mountain, Castles, Camping) and search by country or city.
- [ ] **Tax Switch & Pricing Toggle**: Dynamic client-side tax calculations.
- [ ] **Cloud Deployment**: Production deployment on platforms like Render / Railway with MongoDB Atlas.

---

## 👨‍💻 Author

### **Ranjit Sharma**
*Full-Stack Web Developer • Problem Solver*

- **GitHub**: [@ranjit-sharma](https://github.com/ranjit-sharma)
- **Repository**: [MajorProject](https://github.com/ranjit-sharma/MajorProject)

---

<div align="center">

### ⭐ Star this repository if you found it useful!

**Built with passion & curiosity • Happy Coding! 🚀**

</div>
