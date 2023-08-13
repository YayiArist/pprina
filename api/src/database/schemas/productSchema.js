const { Schema } = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const productSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  image:{
    type: String,
  },
  name: {
    type: String,
    required: true
  },
  normalPrice: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  specialPrice: {
    type: Number,
  },
}, {
  timestamps: false,
});

module.exports = productSchema;