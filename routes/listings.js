const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../Schema.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middlewere.js");
const user = require('../models/user.js');
const listingController = require('../controllers/listing.js');
const {storage} = require("../cloudConfig.js");
const multer  = require('multer')
const upload = multer({ storage });


router.route("/")
.get( wrapAsync(listingController.index))
.post( 
  isLoggedIn, 
  upload.single('listing[image]'), 
  validateListing,
  wrapAsync(listingController.createListing));



// New Route
router.get("/new", isLoggedIn,(listingController.renderNewForm) );


router.route("/:id")
.get( wrapAsync(listingController.showListing))
.put( isLoggedIn, isOwner,  upload.single('listing[image]'), validateListing,  wrapAsync(listingController.updateListing))
.delete( isLoggedIn, isOwner, wrapAsync(listingController.destroyListing))

// Index Route
// router.get("/", wrapAsync(listingController.index));



// Show Route
// router.get("/:id", wrapAsync(listingController.showListing));

// Create Route
// router.post("/",  isLoggedIn, validateListing, wrapAsync(listingController.createListing));

// Edit Route
router.get("/:id/edit", isLoggedIn,  isOwner, wrapAsync(listingController.renderEditForm));

// Update Route
// router.put("/:id",  isLoggedIn, isOwner,validateListing,  wrapAsync(listingController.updateListing));

// Delete Route
// router.delete("/:id",  isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));


module.exports = router;
console.log("Listing router is working");