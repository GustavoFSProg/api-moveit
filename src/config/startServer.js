"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
function startServer(port, routes) {
    if (!port)
        throw Error("Port is required to start server");
    if (!routes)
        throw Error("Routes are required to start server");
    var app = express_1.default();
    app.use(express_1.default.json());
    app.use(cors_1.default());
    app.use(routes);
    // eslint-disable-next-line no-console
    app.listen(port, function () { return console.log("\u26A1 Server is running on port " + port + " \uD83C\uDF89"); });
}
exports.default = startServer;
