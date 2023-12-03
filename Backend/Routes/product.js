const express = require("express")
const router = express.Router();
const productController = require("../Controller/product")
// const upload = require("../index.js");
// const multer = require("multer")

router
    .post("/createProducts",   productController.createProduct )
    .get("/getAllProducts", productController.getAllProducts)
    .get("/getProductById/:id", productController.getProductById)

exports.routes = router
