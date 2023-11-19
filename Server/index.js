const express = require("express");
require("dotenv").config();
const connectDb = require("./config/db");

const app = express();

connectDb();

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});
