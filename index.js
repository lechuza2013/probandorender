"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Server is running on port: ", PORT);
});
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.getName = function () {
        console.log(this.name);
    };
    return User;
}());
app.get("/hola", function (req, res) {
    res.json({
        message: "Hola mundo, soy el servidor y soy de Boca Juniors"
    });
});
