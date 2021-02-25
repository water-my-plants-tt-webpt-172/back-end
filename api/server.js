const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");
const plantsRouter = require("./plants/router");
const usersRouter = require("./users/router");
const authRouter = require("./auth/router");

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use("/api/plants", plantsRouter);
server.use("/api/users", usersRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "server up" });
});

module.exports = server;
