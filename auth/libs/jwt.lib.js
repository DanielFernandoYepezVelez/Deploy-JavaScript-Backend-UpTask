"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Jwt {
    createToken(idUser) {
        const token = jsonwebtoken_1.default.sign({ id: idUser }, process.env.SECRET_KEY || 'token_para_desarrollo');
        return token;
    }
}
exports.Jwt = Jwt;
