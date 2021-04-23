const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/test", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology : true,
});

module.exports = {
  Product: require("./product")
};
