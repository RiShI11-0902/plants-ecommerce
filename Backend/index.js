require('dotenv').config() // for creating environment vvariables
const express = require("express")
const server = express()
const mongoose = require("mongoose")
const connection = require("./Database config/databse")
const productRouter = require("./Routes/product")
const cartRouter = require("./Routes/cart")

const cors = require("cors")
const path = require("path")
const userRouter = require("./Routes/users")

const passport = require("passport")
const {initializePassport, isAuthenticated} = require("./passport-config")
const session = require("express-session")
// const ejs = require("ejs")


initializePassport(passport);

connection()

// middlewares
// const parser = require("body-parser")
server.use(cors());
// server.use(parser.json());
server.use(express.urlencoded())
server.use(express.json());
// server.use(express.static(path.resolve(__dirname, "dist" , "index.html")))
server.use(express.static( path.resolve(__dirname, process.env.PUBLIC_DIR)));

server.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized:false
}))
server.use(passport.initialize())
server.use(passport.session())

// server.get("*", (req,res)=>{
//     res.sendFile(path.resolve(__dirname,  "dist" , "index.html"));
// })
// // server.set('view engine', 'html')
// server.set('view engine', 'ejs')

// console.log(path.resolve(__dirname));

console.log(process.env.SECRET);
//isAuthenticated
server.use("/api/products", productRouter.routes)
server.use("/auth",userRouter.routes)
server.use("/cart",cartRouter.routes)
// server.use("/login", passport.authenticate("local" , {  failureRedirect: "/registration", successRedirect:"/"}))
// 
// server.use("/products", profileRouter.routes )

// server.use("/login",  passport.authenticate("local" , {failureRedirect: "/" }), (req,res)=>{
//     res.redirect("/products")
    
//     // res.send("/")
// //    res.sendFile("/") 
//     // res.send("HEllo welcome")
// })

// server.use("/plants", isAuthenticated , ()=>{
//     res.render("logout.ejs", {name: req.user.name})
// //   req.flash('success_msg', 'You have successfully logged in')
// })

server.get("/",(req,res)=>{
    // res.send("Hello Started")
    console.log(__dirname);
})

server.listen(8080, ()=>{
    console.log("server started");
})