var express = require("express");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

htmlRoutes.defaultRoute;


app.listen(PORT, function(){
    console.log("Server listening on port " + PORT);
});