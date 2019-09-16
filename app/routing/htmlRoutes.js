 var express = require("express");
 var path = require("path");

 var app = express();
  var surveyRoute =  app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "survey.html"));
    }); 
   var defaultRoute = app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "home.html"))
     });


module.exports = {
    surveyRoute: surveyRoute,
    defaultRoute: defaultRoute
}


