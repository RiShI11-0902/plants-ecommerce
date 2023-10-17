const express = require("express")
const model = require("../Modal/cart");
const Cart = model.Cart;

exports.addToCart = async (req,res)=>{
    // const id = 
    console.log("id issssssssss " + req.user);
    const cart =  new Cart({...req.body});
    try {
       const doc =  await cart.save();
       console.log(doc);
       const result = await doc.populate('product')
        res.json(result);
    } catch (error) {
        res.json(error)
    }
}

exports.fetchCartByUser = async (req,res)=>{
    const  user  = req.params.id;
    // const id = req.body;
    // console.log(user);
    // const id = req.user
    // console.log("mwekmewkfnewfn"+id);
    const cartItems = await Cart.find({user: user}).populate("product")
    res.json(cartItems);
    // console.log(cartItems);
    // res.json(user)
}

exports.updateCart = async (req,res)=>{
    const { id } = req.params;
    const result = await Cart.findOneAndUpdate(id,req.body, {new: true});
    const response = result.populate('product')
    res.json(response);
}


