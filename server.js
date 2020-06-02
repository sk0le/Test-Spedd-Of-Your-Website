require("dotenv").config({ path: ".env" });
const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");

const app = express();

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
PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
