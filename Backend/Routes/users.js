const express = require("express")
const router = express.Router();
const userController = require("../Controller/users")

router
    .post("/",
        userController.createSeller)
    // .get("/getAllProducts", sellerController.getAllProducts)

exports.routes = router
