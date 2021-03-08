"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUserByEmail = exports.getUserByEmailAndPassword = exports.verifyToken = exports.decodeToken = exports.generateToken = exports.isValidPassword = exports.isValidEmail = exports.encryptPassword = void 0;
var md5_1 = __importDefault(require("md5"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var User_1 = __importDefault(require("../models/User"));
function encryptPassword(password) {
    return md5_1.default(password, process.env.SECRET);
}
exports.encryptPassword = encryptPassword;
function isValidEmail(email) {
    // eslint-disable-next-line no-useless-escape
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
exports.isValidEmail = isValidEmail;
function isValidPassword(password) {
    var valid = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/;
    if (valid.test(password))
        return true;
    return false;
}
exports.isValidPassword = isValidPassword;
function generateToken(data) {
    return __awaiter(this, void 0, void 0, function () {
        var email, password, SECRET;
        return __generator(this, function (_a) {
            if (!data)
                throw Error("Generate token error");
            email = data.email, password = data.password;
            SECRET = process.env.SECRET;
            return [2 /*return*/, jsonwebtoken_1.default.sign({ email: email, password: password }, SECRET || '', { expiresIn: '1d' })];
        });
    });
}
exports.generateToken = generateToken;
function decodeToken(token) {
    return __awaiter(this, void 0, void 0, function () {
        var secret;
        return __generator(this, function (_a) {
            secret = (process.env.SECRET || '');
            return [2 /*return*/, jsonwebtoken_1.default.decode(token, secret)];
        });
    });
}
exports.decodeToken = decodeToken;
function verifyToken(token) {
    return jsonwebtoken_1.default.verify(token, process.env.SECRET || '', function (error, decode) {
        if (error)
            return { error: error };
        return { decode: decode };
    });
}
exports.verifyToken = verifyToken;
var USER_FIELDS = 'firstname lastname email';
function getUserByEmailAndPassword(email, password) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, User_1.default.findOne({ email: email, password: encryptPassword(password) }, USER_FIELDS)];
                case 1:
                    user = _a.sent();
                    return [2 /*return*/, user];
            }
        });
    });
}
exports.getUserByEmailAndPassword = getUserByEmailAndPassword;
function getUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, User_1.default.findOne({ email: email }, USER_FIELDS)];
                case 1:
                    user = _a.sent();
                    return [2 /*return*/, user];
            }
        });
    });
}
exports.getUserByEmail = getUserByEmail;
function createUser(data) {
    return __awaiter(this, void 0, void 0, function () {
        var firstname, lastname, email, password, currentUser, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    firstname = data.firstname, lastname = data.lastname, email = data.email, password = data.password;
                    return [4 /*yield*/, User_1.default.create({
                            firstname: firstname,
                            lastname: lastname,
                            email: email,
                            password: encryptPassword(password),
                        })];
                case 1:
                    currentUser = _a.sent();
                    user = currentUser;
                    return [2 /*return*/, user];
            }
        });
    });
}
exports.createUser = createUser;
