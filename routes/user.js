const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveredirectUrl, isLoggedIn } = require("../middlewere.js");
const userController = require("../controllers/user.js");

console.log("User  Router is working");

router.get("/signup", userController.renderSignUpForm);

router.post("/signup", wrapAsync(userController.signup));

router.get("/login", userController.renderLoginForm);

router.post(
    "/login",
    saveredirectUrl,
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true,
    }),
    userController.login
);

router.get("/logout", userController.logout);

module.exports = router;