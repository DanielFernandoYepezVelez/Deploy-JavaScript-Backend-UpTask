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
exports.RegisterController = void 0;
const register_service_1 = require("../services/register.service");
const registerService = new register_service_1.RegisterService();
class RegisterController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password, repeat_password } = req.body;
            const user = { name, email, password };
            try {
                const message = yield registerService.registerUser(user);
                return res.json({ ok: true, message });
            }
            catch (e) {
                return res.status(400).json({ ok: false, error: e });
            }
        });
    }
}
exports.RegisterController = RegisterController;
