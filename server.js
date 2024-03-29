//var express = require("express");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
//var app = express();

var PORT = process.env.PORT || 8080;

htmlRoutes.app.use(htmlRoutes.express.urlencoded({ extended: true }));
htmlRoutes.app.use(htmlRoutes.express.json());

htmlRoutes.app.listen(PORT, function () {
    console.log("Server listening on port " + PORT);
});