const express = require("express");
const authRouter = require("./authRouter");
const uploadRouter = require("./uploadRouter");
const routes = express.Router();

routes.use("/ping", (req, res) => {
  res.send("Ok");
});

routes.use("/auth", authRouter);
routes.use("/upload", uploadRouter);
module.exports = routes;
