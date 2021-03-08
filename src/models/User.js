"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    firstname: {
        type: String,
        trim: true,
    },
    lastname: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        index: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
exports.default = mongoose_1.model('User', schema);
