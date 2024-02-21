
const mongoose = require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

const url=process.env.DB_URL;
const db = process.env.DATABASE;
mongoose.connect(url)
.then(res=>console.log("Database is successfully connected "))
.catch(err=>console.log(err))
