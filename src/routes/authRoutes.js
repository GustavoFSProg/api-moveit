"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AuthController_1 = require("../controller/AuthController");
var route = express_1.Router();
var routes = [
    route.post('/register', AuthController_1.register),
    route.get('/', AuthController_1.getAll),
    route.post('/login', AuthController_1.login),
];
exports.default = routes;
