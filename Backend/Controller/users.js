const express = require("express")
const model = require("../Modal/users")
const User = model.User;

exports.createSeller = async (req,res)=>{
    const user =  new User(req.body);
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