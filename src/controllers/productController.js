exports.getProducts = async (req, res) => {
  res.status(200).send({name: "Milk", qty: 1});
}