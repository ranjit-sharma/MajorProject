const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controller/listings.js");
const multer = require('multer');
const {storage}= require("../cloudConfig.js");
const upload = multer({ storage });


// Groups multiple HTTP methods for the same route.
router
    .route("/")
    .get(wrapAsync(listingController.index))//index Route
    .post(
        isLoggedIn,
        upload.single('listing[image]'),
        validateListing, 
        wrapAsync(listingController.createListing));//Create Route


//New Route 
router
    .get("/new", isLoggedIn, listingController.renderNewForm);

// Groups GET, PUT, and DELETE methods for a specific listing.
router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))//show Route 
    .put(
        isLoggedIn,
        isOwner,
        upload.single('listing[image]'),
        validateListing,
        wrapAsync(listingController.updateListing))//update Route
    .delete(
        isLoggedIn,
        isOwner,
        wrapAsync(listingController.destroyListing));//Delete Route


//Edit Route
router
    .get(
        "/:id/edit",
        isLoggedIn,
        isOwner,
        wrapAsync(listingController.renderEditForm)
    );

module.exports = router; 