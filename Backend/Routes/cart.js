const express = require("express")
const router = express.Router();
const cartController = require("../Controller/cart")

router
    .post("/addtocart", cartController.addToCart)
    .get("/getcart/:id", cartController.fetchCartByUser )
    .patch("/updatecart/:id", cartController.updateCart)
    

exports.routes = router
