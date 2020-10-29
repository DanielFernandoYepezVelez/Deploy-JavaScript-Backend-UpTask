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
exports.LoginService = void 0;
const jwt_lib_1 = require("../libs/jwt.lib");
const mysql2_1 = __importDefault(require("../../libs/mysql2"));
const bcrypt_lib_1 = require("../libs/bcrypt.lib");
const jwt = new jwt_lib_1.Jwt();
const matchHash = new bcrypt_lib_1.UserPassword();
class LoginService {
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = user;
            const [rows, fields] = yield mysql2_1.default.query("SELECT id, email, password FROM users WHERE email = ?", [email]);
            if (![rows, fields][0][0]) {
                throw new Error("Usuario No Existe!").message;
            }
            const userDB = Object.values([rows, fields][0][0]).filter(userDB => userDB);
            const match = yield matchHash.validatePassword(password, userDB[2]);
            if (!match) {
                throw new Error("Email O Contraseña Incorrecta!").message;
            }
            const token = jwt.createToken(userDB[0]);
            return token;
        });
    }
    loginGoogle(userGoogle) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, name, picture } = userGoogle;
            const userGoogleFinally = { name, email, password: '@%@', img: picture, state: 1, google: 1 };
            let [rows, fields] = yield mysql2_1.default.query("SELECT * FROM users WHERE email = ?", [email]);
            if (![rows, fields][0][0]) {
                yield mysql2_1.default.query("INSERT INTO users SET ?", [userGoogleFinally]);
            }
            else {
                yield mysql2_1.default.query("UPDATE users SET ? WHERE email = ? ", [userGoogleFinally, email]);
            }
            if (![rows, fields][0][0]) {
                [rows, fields] = yield mysql2_1.default.query("SELECT * FROM users WHERE email = ?", [email]);
            }
            const userId = Object.values([rows, fields][0][0]).find(user => user);
            const tokenPropio = jwt.createToken(userId);
            return tokenPropio;
        });
    }
    loginRenew(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenValidado = jwt.createToken(idUser);
            return tokenValidado;
        });
    }
}
exports.LoginService = LoginService;
