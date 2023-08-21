const express = require("express")
const router = express.Router()
const productController = require("../Controller/product")

router.get("/products", productController.getAllProducts )

exports.routes = router