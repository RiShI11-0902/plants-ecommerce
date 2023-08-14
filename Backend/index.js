require('dotenv').config() // for creating environment vvariables
const express = require("express")
const server = express()
const mongoose = require("mongoose")
const connection = require("./Database config/databse")

connection()


server.get("/",(req,res)=>{
    res.send("Hello Started")
})

server.listen(8080, ()=>{
    console.log("server started");
})