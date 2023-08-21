const express = require("express")
const model = require("../Modal/users")
const User = model.User;
const bcrypt = require("bcrypt")

exports.createUser = async (req,res)=>{
    const user =  new User();
    user.username = req.body.username
    user.name = req.body.name
    user.password = bcrypt.hashSync(req.body.password.toString(), 10)

    // res.send(user)
    try {
        await user.save()
        req.login(user, (err)=>{
            if (err){
                res.status(400).json(err)
            }
            else{
                res.status(201).json(user)
            }
        })
        res.send(user);
        // console.log(user);
    } catch (error) {
        res.send(error)
    }
}

exports.loginUser = (req,res)=>{
    res.json({status: "Success"})
}
exports.checkUser = (req,res)=>{
    res.json(req.user)
}
// exports.getAllProducts = async (req,res)=>{
//     const product = await User.find()
//     res.json(product);
// }