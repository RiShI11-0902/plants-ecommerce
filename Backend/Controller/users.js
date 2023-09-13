const express = require("express")
const model = require("../Modal/users")
const User = model.User;
const bcrypt = require("bcrypt")

exports.createUser = async (req,res)=>{
    // res.send(user)
    const user =  new User();
    user.username = req.body.username
    user.name = req.body.name
    user.password = bcrypt.hashSync(req.body.password.toString(), 10)
    try {
        await user.save()
        req.login(user, (err)=>{
            if (err){
                res.status(400).json(err)
            }
            else{
                res.status(201).json({id: user.id, name: user.name});
            }
        })
        // res.send({id: user.id, name: user.name});
        // console.log(user);
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.loginUser = (req,res)=>{
    // res.json({status: "Success"})
    const user = req.user;
    res.status(200).json({id: user.id, name: user.name})
}
exports.checkUser = (req,res)=>{
    if (req.user) {
        res.json(req.user)
    }
    else{
        res.sendStatus(401);
    }
}

exports.logoutUser = (req,res,next)=>{
    req.logout(req.user, err =>{
        if(err) return next(err)
        res.send(200)
    })
}
// exports.getAllProducts = async (req,res)=>{
//     const product = await User.find()
//     res.json(product);
// }