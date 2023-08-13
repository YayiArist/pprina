const express = require('express')
const {Product} = require('../../database')
const {response} = require('../../utils')

module.exports = async(req, res) =>{
  
   res.header('Access-Control-Allow-Origin', '*')
    const products = await Product.find();
    console.log(products)
    return response(res, 201, products);
    
     

}