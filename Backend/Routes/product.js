const express = require("express")
const router = express.Router();
const productController = require("../Controller/product")

router
    .post("/createProducts", productController.createProduct )
    .get("/getAllProducts", productController.getAllProducts)

exports.routes = router
