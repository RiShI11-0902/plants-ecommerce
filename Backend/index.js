require('dotenv').config() // for creating environment vvariables
const express = require("express")
const server = express()
const mongoose = require("mongoose")
// const multer = require('multer')
const connection = require("./Database config/databse")
const productRouter = require("./Routes/product")
const cartRouter = require("./Routes/cart")
const fileupload = require("express-fileupload")
const parser = require("body-parser")


// const upload = require("./multer")

// const multer = require('multer')

// const upload = multer({ dest: 'images/' })

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
server.use(fileupload())
server.use(cors());
server.use(parser.urlencoded({extended: true}))
server.use(parser.json());
// server.use(express.json());
server.use(express.static('public'))
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
// exports.storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       console.log("file is"+file);
//       cb(null, "./uploads/");
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now();
//       cb(null, uniqueSuffix + file.name);
//     },
//   });
  

// const storage = multer({
//     destination:  (req,res,cb) => {
//         cb(null,"uploads")
//     },
//     filename: (req,file,cb)=>{
//         cb(null, file.originalname)
//     }
// })
// exports.upload = multer({storage: storage})



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



server.post("/",(req,res)=>{
    // res.send("Hello Started")
    console.log(__dirname);
})

server.listen(8080, ()=>{
    console.log("server started");
})