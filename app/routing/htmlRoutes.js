var express = require("express");
var path = require("path");

var app = express();
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'survey.html'));
});
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'home.html'))
});

module.exports = {

    express: express,
    path: path,
    app: app
};


