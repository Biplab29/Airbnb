if(process.env.NODE_ENV != 'production'){
    require('dotenv').config()

}

const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodoverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./Schema.js");
const Review = require("./models/review.js");
const listing = require("./routes/listings.js");
const review = require("./routes/review.js");
const session = require("express-session");
const flash = require("connect-flash"); 
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");  
const userRouter = require("./routes/user.js"); 
const MongoStore = require('connect-mongo');
const { error } = require('console');

const app = express();
// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = process.env.ATLASTDB_URL;
console.log(`Using MongoDB URL: ${dbUrl}`);

main()
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(dbUrl);
}

app.use(express.urlencoded({ extended: true }));
app.use(methodoverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto:{
        secret : "mysecretkeybcdef" 
    },
    touchAfter: 24 * 3600.
});

store.on("error", () =>{
    console.log("Error in Mongo Session Store", err);
}); 
const sessionOptions = {
    store,
    secret: "mysecretkeybcdef",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

// app.get("/", (req,res) =>{
//     res.send("Hii, I am root ");
// });

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware to set flash messages 
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

// Routes
app.use("/listings", listing);
app.use("/listings/:id/reviews", review);
app.use("/", userRouter);

// 404 Error Handling Middleware
app.all("*", (req, res, next) => {
    console.log("Middleware Triggered");
    next(new ExpressError(404, "Page Not Found"));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something Went Wrong!" } = err;
    res.status(statusCode).render("error.ejs", { message }); 
});

// Start the server
app.listen(8080, () => {
    console.log("🚀 Server is Running On Port 8080....");
});
