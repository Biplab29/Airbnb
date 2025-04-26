const Listing = require("./models/listing");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./Schema.js");
const Review = require("./models/review.js");


const isLoggedIn = (req, res, next) => {
    // console.log(req.path, "..", req.originalUrl );
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl ;
        req.flash('error', 'You must be logged in first!');
        return res.redirect('/login');
    }
    next();
};

const saveredirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

const isOwner = async (req,res, next) =>{
    const {id} = req.params;
    let listing = await Listing.findById(id);
       if(!listing.owner.equals(res.locals.currUser._id)){
           req.flash("error", "You are are not the owner of this listing");
          return res.redirect(`/listings/${id}`);
       }
       next();
};

const validateListing = (req,res, next) =>{
    const {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }  
};


 const validateReview = (req,res, next) =>{
        const {error} = reviewSchema.validate(req.body);
        if(error){
            let errMsg = error.details.map((el) => el.message).join(",");
            throw new ExpressError(400, errMsg);
        } else {
            next()
        }
    };

    const isReviewAuthor = async (req,res, next) =>{
        const { id, reviewId } = req.params;
        let review = await Review.findById( reviewId );
           if(!review.author.equals(res.locals.currUser._id)){
               req.flash("error", "You are are not the owner of this Review");
              return res.redirect(`/listings/${id}`);
           }
           next();
    };

module.exports = { isLoggedIn, saveredirectUrl, isOwner, validateListing , validateReview, isReviewAuthor };