const express = require("express");

const jobController = require("./controller/job.controller.js");
var cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const connect = require("./config/db");

app.use("/job", jobController);

app.listen(1234, async function () {
  await connect();
  console.log("listening to port 1234");
});