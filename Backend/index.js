require('dotenv').config() // for creating environment vvariables
const express = require("express")
const server = express()
const mongoose = require("mongoose")
const connection = require("./Database config/databse")
const productRouter = require("./Routes/product")
const cors = require("cors")
const userRouter = require("./Routes/users")
const passport = require("passport")
const {initializePassport, isAuthenticated} = require("./passport-config")
const session = require("express-session")



initializePassport(passport);

connection()

// middlewares

server.use(cors());
// server.use(bodyParser);
server.use(express.urlencoded({extended: true}))
server.use(express.json());
server.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized:false
}))
server.use(passport.initialize())
server.use(passport.session())

console.log(process.env.SECRET);


server.use("/api/products", productRouter.routes)
server.use("/registration",
    userRouter.routes
)
// server.use("/login", passport.authenticate("local" , {  failureRedirect: "/registration", successRedirect:"/api/products/getAllProducts"}))


server.use("/login",  passport.authenticate("local" , {failureRedirect: "/register"}), (req,res)=>{
    res.redirect("api/products/getAllProducts")
})

server.use("/plants", isAuthenticated , ()=>{
    res.render("logout.ejs", {name: req.user.name})
//   req.flash('success_msg', 'You have successfully logged in')
})

server.get("/",(req,res)=>{
    res.send("Hello Started")
})

server.listen(8080, ()=>{
    console.log("server started");
})