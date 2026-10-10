 # 🏡 WonderLust — Full-Stack Travel & Property Listing Web App.

---

<p align="center">

### 🌍 Discover • Create • Review • Explore

A modern full-stack travel and staycation accommodation web application inspired by Airbnb, engineered with **Node.js, Express.js, MongoDB, Mongoose, Passport.js, EJS, and EJS-Mate**.

</p>

<p align="center">

<!-- Core Stack -->
<img src="https://img.shields.io/badge/Node.js-20%2B-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
<img src="https://img.shields.io/badge/Express.js-5.x-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
<img src="https://img.shields.io/badge/MongoDB-NoSQL-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
<img src="https://img.shields.io/badge/Mongoose-ODM-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose">

<br>

<!-- Frontend -->
<img src="https://img.shields.io/badge/EJS-Templates-B4CA65?style=for-the-badge&logo=ejs&logoColor=black" alt="EJS">
<img src="https://img.shields.io/badge/EJS--Mate-Layouts-B4CA65?style=for-the-badge" alt="EJS-Mate">
<img src="https://img.shields.io/badge/HTML5-Markup-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
<img src="https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
<img src="https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/Bootstrap-5.x-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">

<br>

<!-- Authentication / Backend Utilities -->
<img src="https://img.shields.io/badge/Passport.js-Authentication-34E27A?style=for-the-badge&logo=passport&logoColor=black" alt="Passport.js">
<img src="https://img.shields.io/badge/Express%20Session-Sessions-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express Session">
<img src="https://img.shields.io/badge/Connect--Mongo-Session%20Store-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="Connect Mongo">
<img src="https://img.shields.io/badge/Connect%20Flash-Flash%20Messages-000000?style=for-the-badge" alt="Connect Flash">
<img src="https://img.shields.io/badge/Method--Override-HTTP%20Methods-444444?style=for-the-badge" alt="Method Override">
<img src="https://img.shields.io/badge/Dotenv-Environment-ecd53f?style=for-the-badge" alt="Dotenv">

<br>

<!-- Validation / Uploads -->
<img src="https://img.shields.io/badge/Joi-Validation-00A98F?style=for-the-badge" alt="Joi">
<img src="https://img.shields.io/badge/Multer-File%20Uploads-4A4A4A?style=for-the-badge" alt="Multer">
<img src="https://img.shields.io/badge/Cloudinary-Image%20Storage-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" alt="Cloudinary">
<img src="https://img.shields.io/badge/Multer--Storage--Cloudinary-Uploads-3448C5?style=for-the-badge" alt="Multer Storage Cloudinary">

<br>

<!-- Maps / Deployment / Tools -->
<img src="https://img.shields.io/badge/Mapbox-Maps-000000?style=for-the-badge&logo=mapbox&logoColor=white" alt="Mapbox">
<img src="https://img.shields.io/badge/GeoJSON-Location-2E7D32?style=for-the-badge" alt="GeoJSON">
<img src="https://img.shields.io/badge/Render-Deployment-46E3B7?style=for-the-badge&logo=render&logoColor=black" alt="Render">
<img src="https://img.shields.io/badge/Git-Version%20Control-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
<img src="https://img.shields.io/badge/GitHub-Code%20Hosting-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
<img src="https://img.shields.io/badge/Font%20Awesome-Icons-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white" alt="Font Awesome">

</p>

<p align="center">
  <img src="https://img.shields.io/badge/Repo%20Size-179%20KB-blue?style=flat-square" alt="Repository size">
  <img src="https://img.shields.io/badge/Status-Active-success?style=flat-square" alt="Status">
  <img src="https://img.shields.io/badge/Architecture-MVC-orange?style=flat-square" alt="Architecture">
  <img src="https://img.shields.io/badge/Rendering-Server--Side%20EJS-B4CA65?style=flat-square" alt="Server-side EJS">
</p>

---

## 🌐 Live Application

**Live Demo:**  
https://wonderlust-1tk1.onrender.com/

**GitHub Repository:**  
https://github.com/ranjit-sharma/MajorProject



---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [What Users Can Do](#-what-users-can-do)
- [Key Features](#-key-features)
- [Application Workflow](#-application-workflow)
- [Technology Stack](#-technology-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Authentication & Authorization](#-authentication--authorization)
- [Listing Management](#-listing-management)
- [Review & Rating System](#-review--rating-system)
- [Image Upload System](#-image-upload-system)
- [Mapbox & Geocoding](#-mapbox--geocoding)
- [Validation & Error Handling](#-validation--error-handling)
- [Database Design](#-database-design)
- [Routes](#-routes)
- [Environment Variables](#-environment-variables)
- [Installation](#-installation)
- [Running Locally](#-running-locally)
- [Deployment](#-deployment)
- [Security](#-security)
- [Responsive UI](#-responsive-ui)
- [Future Improvements](#-future-improvements)
- [Learning Outcomes](#-learning-outcomes)
- [Contributing](#-contributing)
- [Author](#-author)

---

# 🌍 About the Project

**WonderLust** is a full-stack travel and property listing web application inspired by modern accommodation platforms such as Airbnb.

The application provides a complete flow for discovering properties, viewing detailed accommodation information, creating listings, uploading property images, adding reviews, managing ownership permissions, and visualizing listing locations on an interactive map.

The project is built using a **Node.js + Express.js backend**, **MongoDB/Mongoose database layer**, and **EJS server-side rendering**, with external integrations for **Cloudinary image storage** and **Mapbox maps/geocoding**.

The project follows an **MVC architecture** and uses reusable middleware for authentication, authorization, validation, and error handling.

---

# 👥 What Users Can Do

### 👀 Guests

Visitors can:

- Browse available listings.
- Explore listing cards.
- View individual property pages.
- See property details.
- View the property owner.
- View existing reviews and ratings.
- View the property location on a map.
- Search/explore the interface without creating an account.

### 👤 Registered Users

Authenticated users can:

- Create property listings.
- Upload listing images.
- Edit their own listings.
- Delete their own listings.
- Submit reviews.
- Give ratings.
- Delete reviews they personally created.
- Use protected application features.

### 🏠 Listing Owners

Listing owners have additional permissions:

- Edit their own property.
- Delete their own property.
- Manage their listing information.

A user cannot edit or delete another user's listing.

---

# ✨ Key Features

## 🔐 Authentication

- User registration.
- Login/logout.
- Passport Local Strategy.
- Express Session.
- MongoDB-backed sessions using Connect Mongo.
- Protected routes.
- Login redirect handling.
- Flash messages.

## 🏠 Property Listings

Complete CRUD functionality:

```text
Create → Read → Update → Delete
```

Listing information includes:

- Title
- Description
- Price
- Location
- Country
- Property image
- Owner
- Reviews
- GeoJSON coordinates

## ⭐ Reviews & Ratings

Users can:

- Add reviews.
- Rate listings from 1–5 stars.
- View review authors.
- View review comments.
- Delete only reviews they created.

## 🖼️ Cloud Image Uploads

Uses:

```text
Multer
   ↓
Cloudinary Storage
   ↓
Cloudinary
   ↓
Image URL + filename
   ↓
MongoDB
```

## 🗺️ Interactive Maps

Mapbox provides:

- Location geocoding.
- Interactive maps.
- Listing markers.
- Listing location visualization.

## 🛡️ Authorization

The application verifies:

- Is the user logged in?
- Is the user the listing owner?
- Is the user the review author?

## ✅ Validation

Joi validates:

- Listing input.
- Review input.

## ⚠️ Error Handling

Includes:

- Custom `ExpressError`.
- `wrapAsync`.
- Centralized Express error handling.
- Flash messages.
- Missing-resource handling.

## 📱 Responsive Design

The UI supports:

- Desktop.
- Laptop.
- Tablet.
- Mobile.

The interface uses Bootstrap, custom CSS, responsive cards, mobile filters, and responsive navigation.

---

# 🔄 Application Workflow

```text
                         ┌───────────────────┐
                         │      Browser      │
                         └─────────┬─────────┘
                                   │
                                   ▼
                         ┌───────────────────┐
                         │   Express Server  │
                         └─────────┬─────────┘
                                   │
                    ┌──────────────┼──────────────┐
                    ▼              ▼              ▼
              Middleware         Routes       Static Files
                    │              │
                    ▼              ▼
          Authentication     Controllers
          Authorization           │
          Validation              ▼
          Sessions             Mongoose
                                  │
                                  ▼
                              MongoDB
```

External services:

```text
                    ┌── Cloudinary → Image Storage
Application ────────┤
                    └── Mapbox → Maps + Geocoding
```

---


---

## 🛠️ Technology Stack

### Frontend

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Custom styling |
| Bootstrap | Responsive UI and layout |
| JavaScript | Client-side interactions |
| EJS | Server-side rendering |
| EJS-Mate | Layouts and reusable templates |
| Font Awesome | Icons |

### Backend

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Web framework |
| Express Router | Route organization |
| Method Override | PUT/DELETE from HTML forms |
| Passport.js | Authentication |
| Express Session | Session management |
| Connect Flash | Notifications |

### Database

| Technology | Purpose |
|---|---|
| MongoDB | Database |
| MongoDB Atlas | Cloud database |
| Mongoose | ODM |

### Validation / Utilities

| Technology | Purpose |
|---|---|
| Joi | Request validation |
| ExpressError | Custom errors |
| wrapAsync | Async error forwarding |
| Multer | Multipart/file uploads |

### Cloud / APIs

| Service | Purpose |
|---|---|
| Cloudinary | Image storage |
| Mapbox | Maps |
| Mapbox Geocoding API | Location to coordinates |
| Render | Deployment |

---
# 🏗️ Architecture

WonderLust follows an **MVC (Model–View–Controller)** architecture.

```text
                  WonderLust
                      │
          ┌───────────┼───────────┐
          ▼           ▼           ▼
        Model       View      Controller
          │           │           │
      MongoDB        EJS      Business Logic
          │           │           │
          └───────────┼───────────┘
                      ▼
                  Express Routes
```

### Model

```text
models/
├── listing.js
├── review.js
└── user.js
```

Responsible for schemas, database relationships, and Mongoose operations.

### View

```text
views/
├── layouts/
├── includes/
├── listings/
├── users/
└── error.ejs
```

Responsible for the server-rendered frontend.

### Controller

```text
controller/
├── listings.js
├── reviews.js
└── users.js
```

Contains application/business logic.

---

# 📁 Project Structure

```text
MajorProject/
│
│
├── controller/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── public/
│   ├── css/
│   │   ├── rating.css
│   │   └── style.css
│   │
│   └── js/
│       ├── map.js
│       └── script.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── views/
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   │   ├── edit.ejs
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   └── show.ejs
│   │
│   ├── users/
│   └── error.ejs
│
├── .env
├── .gitignore
├── app.js
├── cloudConfig.js
├── middleware.js
├── package.json
├── package-lock.json
├── schema.js
└── README.md
```

---

# 🔒 Authentication & Authorization

WonderLust separates authentication and authorization.

### Authentication

`isLoggedIn` verifies that the user is authenticated before accessing protected routes.

```text
Request
   ↓
isLoggedIn
   ↓
Authenticated?
   ├── NO  → /login
   └── YES → Continue
```

### Listing Authorization

`isOwner` checks whether the current user owns the listing.

Only the owner can:

- Edit the listing.
- Update the listing.
- Delete the listing.

### Review Authorization

`isReviewAuthor` checks whether the current user created the review.

Only the review author can delete it.

```text
Delete Review
      ↓
 isLoggedIn
      ↓
isReviewAuthor
      ↓
Review Author == Current User?
      ├── NO  → Reject
      └── YES → Delete
```

The frontend also hides the Delete button from users who do not own the review, while the backend middleware provides the real authorization protection.

---

# 🏠 Listing Management

## Create

Authenticated users can create listings with:

- Title
- Description
- Price
- Location
- Country
- Image

## Read

Users can:

- View all listings.
- Open a specific listing.
- View owner information.
- View reviews.
- View location on Mapbox.

## Update

Only the listing owner can update a listing.

## Delete

Only the listing owner can delete a listing.

### CRUD Flow

```text
POST   /listings       → Create
GET    /listings       → Read all
GET    /listings/:id   → Read one
PUT    /listings/:id   → Update
DELETE /listings/:id   → Delete
```

---

# ⭐ Review & Rating System

Reviews are connected to listings and users using MongoDB ObjectId references.

A review contains:

```text
Review
├── rating
├── comment
└── author
```

The application uses Mongoose `populate()` to retrieve review author information when displaying reviews.

### Review authorization

```text
Logged in?
   ↓
Review exists?
   ↓
Review author matches current user?
   ↓
Delete allowed
```

This prevents users from deleting reviews created by other users.

---

# 🖼️ Image Upload System

WonderLust uses **Multer + Cloudinary**.

```text
User selects image
       ↓
HTML multipart/form-data
       ↓
Multer
       ↓
CloudinaryStorage
       ↓
Cloudinary
       ↓
Cloudinary URL
       ↓
Listing.image
       ↓
MongoDB
```

The listing stores:

```js
image: {
    url: "...",
    filename: "..."
}
```

This keeps the actual image storage outside MongoDB while retaining the information required to display and manage the image.

---

# 🗺️ Mapbox & Geocoding

When a listing is created, its location is sent to the Mapbox Geocoding API.

```text
"Bhubaneswar, Odisha"
          ↓
Mapbox Geocoding
          ↓
GeoJSON Point
          ↓
MongoDB
```

Stored structure:

```js
geometry: {
    type: "Point",
    coordinates: [longitude, latitude]
}
```

The frontend receives these coordinates and uses them with Mapbox GL JS.

### Important GeoJSON rule

```text
[longitude, latitude]
```

The project uses this format consistently for listing coordinates.

---

# ✅ Validation & Error Handling

## Joi Validation

Listing and review input is validated before controller execution.

```text
HTTP Request
     ↓
Joi Validation
     ├── Invalid → ExpressError
     └── Valid   → Controller
```

## ExpressError

Provides structured application errors.

## wrapAsync

Wraps asynchronous route/controller functions so rejected promises are forwarded to Express error handling.

Example:

```js
wrapAsync(listingController.createListing)
```

## Centralized Error Handler

Application errors are handled through centralized Express middleware and displayed through:

```text
views/error.ejs
```

---

# 🗄️ Database Design

## User

Used for authentication and identity.

Users can be:

- Listing owners.
- Review authors.

## Listing

```text
Listing
├── title
├── description
├── image
│   ├── url
│   └── filename
├── price
├── location
├── country
├── owner
├── reviews[]
└── geometry
    ├── type
    └── coordinates[]
```

## Review

```text
Review
├── comment
├── rating
└── author
```

Relationships use:

```text
ObjectId
   +
Mongoose ref
   +
populate()
```

The Listing model also handles review cleanup when a listing is removed through its Mongoose middleware.

---

# 🔀 Routes

## Listing Routes

```text
GET     /listings
GET     /listings/new
POST    /listings
GET     /listings/:id
GET     /listings/:id/edit
PUT     /listings/:id
DELETE  /listings/:id
```

## Review Routes

```text
POST    /listings/:id/reviews
DELETE  /listings/:id/reviews/:reviewId
```

## User Routes

Authentication-related routes are handled through:

```text
routes/user.js
```

---

# ⚙️ Environment Variables

Create a `.env` file in the project root.

```env
ATLASDB_URL=your_mongodb_connection_string

SESSION_SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_public_token

NODE_ENV=development
```

| Variable | Purpose |
|---|---|
| `ATLASDB_URL` | MongoDB Atlas connection |
| `SESSION_SECRET` | Session secret |
| `CLOUD_NAME` | Cloudinary cloud name |
| `CLOUD_API_KEY` | Cloudinary API key |
| `CLOUD_API_SECRET` | Cloudinary API secret |
| `MAP_TOKEN` | Mapbox public token |
| `NODE_ENV` | Application environment |

> **Never commit `.env` or private credentials to GitHub.**

---

# 💻 Installation

## Prerequisites

Install:

- Node.js
- npm
- Git
- MongoDB / MongoDB Atlas

Create accounts/configuration for:

- MongoDB Atlas
- Cloudinary
- Mapbox

## 1. Clone the repository

```bash
git clone https://github.com/ranjit-sharma/MajorProject.git
cd MajorProject
```

## 2. Install dependencies

```bash
npm install
```

## 3. Configure environment variables

Create:

```text
.env
```

and add the required variables.

## 4. Start the application

```bash
node app.js
```

For development:

```bash
nodemon app.js
```

---

# ▶️ Running Locally

The application runs on:

```text
http://localhost:8080
```

Open:

```text
http://localhost:8080/
```

The root route redirects to:

```text
http://localhost:8080/listings
```

---

# 🚀 Deployment

The application is deployed using **Render**.

```text
GitHub Repository
        ↓
      Render
        ↓
Node.js + Express App
        ↓
    MongoDB Atlas

External Services
├── Cloudinary
└── Mapbox
```

### Render Environment Variables

Add:

```text
ATLASDB_URL
SESSION_SECRET
CLOUD_NAME
CLOUD_API_KEY
CLOUD_API_SECRET
MAP_TOKEN
NODE_ENV
```

---

# 🛡️ Security

The project implements:

- Passport authentication.
- Session-based authentication.
- MongoDB-backed sessions.
- Protected routes.
- Listing ownership authorization.
- Review ownership authorization.
- Joi server-side validation.
- Environment variables.
- Centralized error handling.

Authorization rules:

```text
Only logged-in users
        ↓
Create listing / review

Only listing owner
        ↓
Edit / delete listing

Only review author
        ↓
Delete review
```

---

# 📱 Responsive UI

The frontend is designed for:

- 🖥️ Desktop
- 💻 Laptop
- 📱 Mobile
- 📟 Tablet

Responsive implementation uses:

- Bootstrap grid.
- CSS media queries.
- Responsive listing cards.
- Mobile category filters.
- Responsive navigation.
- Responsive search interface.

---

# 🔮 Future Improvements

Planned/possible extensions include:

- 🔎 Advanced search and filtering.
- 📅 Booking/reservation system.
- 💳 Online payment integration.
- ❤️ Wishlist/favorites.
- 👤 User profile/dashboard.
- 📊 Host analytics.
- ⭐ Average listing ratings.
- 📧 Email notifications.
- 🔔 Real-time notifications.
- 🤖 AI-powered travel recommendations.
- 🔌 Dedicated REST API layer.
- ⚛️ React frontend migration.
- 🧪 Automated testing.
- 🚦 Rate limiting.
- 📈 Production monitoring and logging.

---

# 📚 Learning Outcomes

This project provided practical experience with:

### Backend

- Node.js
- Express.js
- Routing
- Middleware
- Controllers
- MVC architecture
- Async operations
- Error handling

### Database

- MongoDB
- MongoDB Atlas
- Mongoose
- CRUD
- ObjectId relationships
- `populate()`
- Mongoose middleware

### Authentication

- Passport.js
- Passport Local Strategy
- Express Session
- Connect Mongo
- Connect Flash
- Authorization middleware

### Cloud Integration

- Cloudinary
- Multer
- Mapbox
- Mapbox Geocoding
- GeoJSON
- Render

### Frontend

- HTML5
- CSS3
- JavaScript
- EJS
- EJS-Mate
- Bootstrap
- Font Awesome
- Responsive design

### Development

- Git
- GitHub
- Nodemon
- Environment variables
- Deployment

---

# 🤝 Contributing

Contributions and suggestions are welcome.

```bash
git checkout -b feature/your-feature
git add .
git commit -m "Add your feature"
git push origin feature/your-feature
```

Then create a Pull Request on GitHub.

---

# 👨‍💻 Author.

## Ranjit Sharma

**B.Tech Computer Science Student | Full-Stack Developer | JavaScript & MERN Stack Enthusiast**

### GitHub

https://github.com/ranjit-sharma

### Project Repository

https://github.com/ranjit-sharma/MajorProject

---

# ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

<p align="center">
  Built with ❤️ using Node.js, Express.js, MongoDB, Mongoose, EJS and modern web technologies.
</p>
