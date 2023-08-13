const express = require("express");
const { Product } = require("../../database/index");
const { response } = require("../../utils");
const { NotFoundError } = require("../../utils/errors");
const calculateDiscountedPrice = require('../../helpers/discountCalculator')

module.exports = async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
    const { productId } = req.params;
    const { newNormalPrice, newDiscount, newSpecialPrice } = req.body; 

    const product = await Product.findById(productId);

    if (!product) {
      throw new NotFoundError('Product not found');
    }

  
    if (newDiscount !== undefined) {
        const updatedDiscountedPrice = calculateDiscountedPrice(product.normalPrice, newDiscount);
        product.discount = updatedDiscountedPrice;
      }
    if (newNormalPrice !== undefined) {
      product.normalPrice = newNormalPrice;
    }
    
    if (newSpecialPrice !== undefined) {
      product.specialPrice = newSpecialPrice;
    }

    await product.save();

    response(res, 200, product);
  
  }