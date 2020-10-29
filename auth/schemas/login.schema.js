"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
class LoginSchema {
    login() {
        return joi_1.default.object({
            password: joi_1.default.string().min(4).required(),
            email: joi_1.default.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).required(),
        });
    }
    loginGoogle() {
        return joi_1.default.object({
            token: joi_1.default.string().required(),
        });
    }
}
exports.LoginSchema = LoginSchema;
