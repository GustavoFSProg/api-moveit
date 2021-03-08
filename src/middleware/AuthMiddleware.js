"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthorized = void 0;
var utils_1 = require("../utils");
var globalVariables_1 = require("../globalVariables");
function isAuthorized(req, res, next) {
    var token = req.headers.token;
    if (!token)
        return res.status(401).send({ error: 'User not authorized' });
    var _a = utils_1.verifyToken(token), error = _a.error, decode = _a.decode;
    if (error)
        return res.status(401).send({ error: 'Invalid token' });
    var currentUser = utils_1.getUserByEmail(decode.email);
    if (!currentUser)
        return res.status(400).json({ message: 'User not found' });
    globalVariables_1.setCurrentUser(currentUser, res);
    return next();
}
exports.isAuthorized = isAuthorized;
