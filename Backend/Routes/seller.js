const express = require("express")
const router = express.Router();
const sellerController = require("../Controller/seller")

router
    .post("/createSeller",
        sellerController.createSeller)
    // .get("/getAllProducts", sellerController.getAllProducts)

exports.routes = router
