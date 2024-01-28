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
    const  id  = req.body._id;
    console.log(req.body._id);
    const item = await Cart.findOne({_id: id})
    item.quantity += req.body.quantity
    await item.save()
    console.log("item is "+item);
    // const  user  = req.user.id;
    // console.log(user);
    const cartItems = await Cart.find({user: req.body.user}).populate("product")
    res.json(cartItems);
    // res.json(item)
    // console.log(req.user);
    // console.log(id);
    // const result = await Cart.findOneAndUpdate({_id: id} ,req.body, {new: true});
    console.log(cartItems);
    // const response = result.populate('product')
    // res.json(response);
}

exports.deleteCart = async (req,res)=>{
    const id = req.params.id
    console.log(id);
    const result = await Cart.findByIdAndDelete({_id: id})
    res.json(result)
}


