const express = require("express");
const connectDB = require("./db");

const app = express();

connectDB();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
