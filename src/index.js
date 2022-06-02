
const express = require("express");
const app = express();
const Route = require("./Routes/routes");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(express.json());

app.use("/shedule", Route);

module.exports = app;