require("dotenv").config({ path: ".env" });
const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");

const app = express();

// Database connection
mongoose
  .connect(
    "mongodb+srv://sk0le:rubikovakocka@cluster0-grwna.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(console.log("MongoDB connected..."));

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

// Bodyparser
app.use(express.urlencoded({ extended: true }));
// Static files
app.use(express.static("public"));

// Routes
app.use("", require("./routes/index"));

// Port and server starting
PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
