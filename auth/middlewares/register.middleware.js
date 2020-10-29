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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterMiddleware = void 0;
const register_schema_1 = require("../schemas/register.schema");
const registerSchema = new register_schema_1.RegisterSchema();
class RegisterMiddleware {
    register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error } = yield registerSchema.register().validate(req.body);
            if (error) {
                return res.status(400).json({ ok: false, error: error === null || error === void 0 ? void 0 : error.details[0].message });
            }
            return next();
        });
    }
}
exports.RegisterMiddleware = RegisterMiddleware;
