var express = require("express");
var app = express();
var db = require("./db");

// app.js
var AuthController = require("./auth/AuthController");
app.use("/api/auth", AuthController);

var UserController = require("./user/UserController");
app.use("/api/users", UserController);

module.exports = app;
