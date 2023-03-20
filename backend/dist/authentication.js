"use strict";
exports.__esModule = true;
exports.authentication = void 0;
var users_1 = require("./users");
var jwt = require("jsonwebtoken");
var api_secret_1 = require("./api-secret");
var authentication = function (req, res) {
    var user = req.body;
    //res.json(user.name);
    if (checkLogin(user)) {
        var userData = users_1.users[user.username];
        //res.json({name: userData.name, email: userData.email});
        var token = jwt.sign({ sub: userData.username, iss: 'fast-api' }, api_secret_1.passApi.secret);
        res.json({ name: userData.name, username: userData.username, token: token });
    }
    else {
        res.status(403).json({ errorMessage: 'Erro ao fazer login. Dados inválidos' });
    }
};
exports.authentication = authentication;
function checkLogin(user) {
    if (!user) {
        return false;
    }
    var userData = users_1.users[user.username];
    return userData !== undefined && userData.authenticationUser(user);
}
