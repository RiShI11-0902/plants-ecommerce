require('dotenv').config() // for creating environment vvariables
const express = require("express")
const server = express()
const mongoose = require("mongoose")
const connection = require("./Database config/databse")
const productRouter = require("./Routes/product")
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

server.use(cors());
// server.use(bodyParser);
server.use(express.urlencoded({extended: true}))
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

server.use("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname,  "dist" , "index.html"));
})
// server.set('view engine', 'html')
server.set('view engine', 'ejs')

console.log(__dirname);

console.log(process.env.SECRET);


server.use("/api/products", productRouter.routes)
server.use("/registration",
    userRouter.routes
)
server.use("/login", passport.authenticate("local" , {  failureRedirect: "/registration", successRedirect:"/products"}))


// server.use("/login",  passport.authenticate("local" , {failureRedirect: "/register"}), (req,res)=>{
//     // res.redirect("api/products/getAllProducts")
//     res.send("/")
// })

// server.use("/plants", isAuthenticated , ()=>{
//     res.render("logout.ejs", {name: req.user.name})
// //   req.flash('success_msg', 'You have successfully logged in')
// })

server.get("/",(req,res)=>{
    res.send("Hello Started")
    console.log(__dirname);
})

server.listen(8080, ()=>{
    console.log("server started");
})