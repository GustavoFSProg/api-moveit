"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
function connectDataBase(dataBase) {
    if (!dataBase) throw Error("Connection string is required to start database");
    mongoose_1.default.connect(dataBase, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    });
}
exports.default = connectDataBase;