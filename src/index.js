
const express = require("express");
const app = express();
// const Route = require("./Route/emoji.routes");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(express.json());

// app.use("/text", Route);

module.exports = app;