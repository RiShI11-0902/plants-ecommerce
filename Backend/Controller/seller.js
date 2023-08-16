const express = require("express")
const model = require("../Modal/seller")
const Seller = model.Seller;

exports.createSeller = async (req,res)=>{
    const seller =  new Seller(req.body);
    res.send(seller)
    try {
        await seller.save()
        res.send(seller);
    } catch (error) {
        res.send(error)
    }
}

exports.getAllProducts = async (req,res)=>{
    const product = await Product.find()
    res.json(product);
}