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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterService = void 0;
const mysql2_1 = __importDefault(require("../../libs/mysql2"));
const bcrypt_lib_1 = require("../libs/bcrypt.lib");
const hash = new bcrypt_lib_1.UserPassword();
class RegisterService {
    registerUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = user;
            const [rows, fields] = yield mysql2_1.default.query('SELECT email FROM users WHERE email = ?', [email]);
            if ([rows, fields][0][0]) {
                throw new Error("Email Ya Existe!").message;
            }
            const passwordDB = yield hash.encryptPassword(password);
            const userDB = Object.assign(Object.assign({}, user), { password: passwordDB, state: 1 });
            yield mysql2_1.default.query("INSERT INTO users SET ?", [userDB]);
            return "User Registered Successfully";
        });
    }
}
exports.RegisterService = RegisterService;
