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
        res.send(user);
    } catch (error) {
        res.send(error)
    }
}

// exports.getAllProducts = async (req,res)=>{
//     const product = await User.find()
//     res.json(product);
// }