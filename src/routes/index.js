const indexRouter = require("express").Router();

indexRouter.use("/products", require("./product"));

module.exports = indexRouter;