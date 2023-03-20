"use strict";
exports.__esModule = true;
exports.users = exports.User = void 0;
var User = /** @class */ (function () {
    function User(username, name, password) {
        this.username = username;
        this.name = name;
        this.password = password;
    }
    User.prototype.authenticationUser = function (user) {
        return user.username === this.username && user.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "alice_freitas@email.com": new User("alice_freitas@email.com", "Alice Freitas", "123456"),
    "camila.barbosa@email.com": new User("camila.barbosa@email.com", "Camila Barbosa", "123456")
};
