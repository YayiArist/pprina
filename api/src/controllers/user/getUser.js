const express = require("express");
const {User} = require("../../database/index");
const { response } = require("../../utils");
const { NotFoundError } = require("../../utils/errors");



module.exports = async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
    const email = req.email;
    console.log(email)
    const user = await User.findOne({ email });

    if (!user) {
        throw new NotFoundError('User not found');
    }

    response(res, 200, user);
};