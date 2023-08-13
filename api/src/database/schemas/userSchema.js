const { Schema } = require("mongoose");
/* const bcrypt = require('bcrypt'); */
const { v4: uuidv4 } = require('uuid');

const userSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  productId: {
    type: [String],
    
  },
}, {
  timestamps: false,
});


module.exports = userSchema;