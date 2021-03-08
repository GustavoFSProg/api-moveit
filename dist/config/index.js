"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDataBase = exports.startServer = void 0;
var startServer_1 = require("./startServer");
Object.defineProperty(exports, "startServer", { enumerable: true, get: function () {
        return __importDefault(startServer_1).default;
    } });
var connectDataBase_1 = require("./connectDataBase");
Object.defineProperty(exports, "connectDataBase", { enumerable: true, get: function () {
        return __importDefault(connectDataBase_1).default;
    } });