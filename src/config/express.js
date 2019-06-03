const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const routes = require("../app/routers/index");

const server = require("http").Server(app);
const io = require("socket.io")(server, { pingTimeout: 30000 }); //em caso de duplicidade remover o timeout

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
app.use("/static", express.static("public"));
app.use("/api", routes);

server.listen(3000, () => {
  console.log("Server start on port 3000");
});

module.exports = server;
