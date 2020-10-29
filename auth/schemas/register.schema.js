"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
class RegisterSchema {
    register() {
        return joi_1.default.object({
            image: joi_1.default.string(),
            name: joi_1.default.string().min(3).required(),
            repeat_password: joi_1.default.ref('password'),
            password: joi_1.default.string().min(4).required(),
            email: joi_1.default.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).required(),
        });
    }
}
exports.RegisterSchema = RegisterSchema;
