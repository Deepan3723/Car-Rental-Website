
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./../db/connection.js");

const app = express();
dotenv.config();
app.get("/",(req,res) => {
  res.status(200).json("main");

});

app.listen(process.env.PORT, () => {
  connectDB();
  console.log("App is running at port "+process.env.PORT);
});

 