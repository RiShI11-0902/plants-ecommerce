const express = require("express");
const model = require("../Modal/product");
const Product = model.Product;
const fs = require("fs");
const multer = require("multer");
const storage = require("../index");
// const path = require("path");

exports.createProduct = async (req, res) => {
  if (!req.files) {
    return res.send("please upload file");
  }
  // const currentDir = process.cwd();
  // const newDir = path.join(currentDir, "..");
  // process.chdir(newDir);
  const { title, description, price, rating, discount, category, size } =
    req.body;
  const filename = req.files.file.name;
  const file = req.files.file;
  // var rootFolder = __dirname.split("/").pop();
  // let rootFolder = path.dirname("Controller").split("/").pop();
  let rootFolder = require('path').resolve(__dirname, '..')
  console.log(rootFolder);
  let uploadPath = rootFolder + "/public/images/" + filename;
  file.mv(uploadPath, (err) => {
    if (err) return res.send(err);
  });
  const newProduct = await Product.create({
    title: title,
    description: description,
    rating: rating,
    category: category,
    price: price,
    discountPercentage: discount,
    size: size,
    image: filename,
  });
  console.log(newProduct);
};

exports.getAllProducts = async (req, res) => {
  const product = await Product.find();
  res.json(product);
};

exports.getProductById = async (req, res) => {
  console.log(req.params.id);
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {}
};
