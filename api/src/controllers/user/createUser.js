const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { User } = require("../../database/index");
const { response } = require("../../utils");

module.exports = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const { email, productId } = req.userData;

  console.log(email, productId);

  let user = await User.findOne({ email });

  console.log("userAntes", user);

  if (!user) {
    user = new User({
      _id: uuidv4(),
      email,
      productId,
    });

    await user.save();
  } else {
    if (!user.productId.includes(productId)) {
      user.productId.push(productId);

      await user.save();
    }
  }

  console.log("despues", user);

  response(res, 200, user);
};
