const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI);

conn.on("connected", () => {
  console.log("MongoDB connected!");
});

conn.on("error", (err) => {
  console.error("DB Error:", err);
});

module.exports = {
  User: conn.model("User", require("./schemas/userSchema")),
  Product: conn.model("Product", require("./schemas/productSchema"))
};