const db = require("../models");

exports.getProducts = async (req, res) => {
  var products = await db.Product.find();
  res.status(200).send(products);
}