"use strict";
exports.__esModule = true;
exports.authorization = void 0;
var jwt = require("jsonwebtoken");
var api_secret_1 = require("./api-secret");
var authorization = function (request, response, next) {
    var token = getToken(request);
    if (token) {
        jwt.verify(token, api_secret_1.passApi.secret, function (error, decoded) {
            // o token existe, porém não é válido
            if (!decoded) {
                response.status(403).json({ errorMessage: 'Acesso não autorizado' });
            }
            next();
        });
    }
    else {
        // informa o tipo de token necessário p/ o acesso
        response.setHeader('www-authenticate', 'Bearer token_type="JWT"');
        response.status(403).json({ errorMessage: 'O acesso não é permitido sem autenticação' });
    }
};
exports.authorization = authorization;
function getToken(request) {
    var token;
    if (request.headers && request.headers.authorization) {
        var strHeaders = request.headers.authorization.split(' ');
        token = strHeaders[1];
    }
    return token;
}
