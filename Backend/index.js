require('dotenv').config() // for creating environment vvariables
const express = require("express")
const server = express()
const mongoose = require("mongoose")
const connection = require("./Database config/databse")
const productRouter = require("./Routes/product")
const cors = require("cors")
const sellerRouter = require("./Routes/seller")


connection()

// middlewares

server.use(cors());
// server.use(bodyParser);
server.use(express.urlencoded({extended: true}))
server.use(express.json());


server.use("/products", productRouter.routes)
server.use("/seller",
    sellerRouter.routes
)


server.get("/",(req,res)=>{
    res.send("Hello Started")
})

server.listen(8080, ()=>{
    console.log("server started");
})