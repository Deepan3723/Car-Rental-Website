require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 8000;

mongoose.connect("mongodb+srv://rental:car@cluster0.dwfoyj0.mongodb.net/rental?retryWrites=true&w=majority")
.then(() => console.log("Connected to DB..."))
.catch((err) => console.log(err));

app.listen(PORT, () => console.log(`server listening on port ${PORT}...`));