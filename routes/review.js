const express = require('express');
const router = express.Router({mergeParams: true});
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middlewere.js");
const reviewController = require("../controllers/review.js");



//Review 
//post review Route 
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));
//Delete review Route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;
console.log("Review Router is Working");

