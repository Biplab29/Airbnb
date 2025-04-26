const Review = require("../models/review");
const Listing = require("../models/listing");

module.exports.createReview = (async(req, res) =>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    // newReview.author = req.user._id;
    console.log(newReview);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    // console.log("New review saved");
    // res.send("New review saved");
    req.flash("success", "New review created!" );
    res.redirect(`/listings/${listing._id}`);

});

module.exports.destroyReview = (async(req, res)=>{
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });  
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "review Deleted!");
     res.redirect(`/listings/${id}`);

});