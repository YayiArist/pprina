const express = require("express");
const { User } = require("../../database/index");
const { response } = require("../../utils");
const { NotFoundError } = require("../../utils/errors");

module.exports = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const email = req.email;
  const id = req.id;

  const user = await User.findOne({ email });

  if (!user) {
    user = new User({
      _id: uuidv4(),
      email,
      productId,
    });
  } else {
    user.productId.push(id);

    user.save();
  }

  response(res, 200, user);
};
