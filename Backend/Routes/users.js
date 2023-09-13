const express = require("express")
const router = express.Router();
const userController = require("../Controller/users");
const passport = require("passport");

router
    .post("/register",userController.createUser)
    .post("/login", passport.authenticate("local"), userController.loginUser)
    .get("/checkUser", userController.checkUser)
    .get("/logout", userController.logoutUser)


    // .get("/getAllProducts", sellerController.getAllProducts)

exports.routes = router
