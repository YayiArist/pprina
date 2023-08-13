const express = require('express');
const { v4: uuidv4 } = require('uuid');
const {Product} = require('../../database/index'); 
const { response } = require("../../utils");
const calculateDiscountedPrice = require('../../helpers/discountCalculator')

module.exports = async (req, res) =>{
  console.log("en controller", req.productData)
 
 const { name, normalPrice, discount, specialPrice, image } = req.productData;

 const discountedPrice = calculateDiscountedPrice(normalPrice, discount);

 console.log("el descuento", calculateDiscountedPrice(normalPrice, discount))

  const newProduct = new Product({
    _id: uuidv4(),
    name,
    normalPrice,
    discount: discountedPrice, 
    specialPrice,
    image 
  });

      await newProduct.save();

      console.log("el producto", newProduct)

      response(res, 201, newProduct )
};

