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
exports.LoginController = void 0;
const google_auth_lib_1 = require("../libs/google-auth.lib");
const login_service_1 = require("../services/login.service");
const project_service_1 = require("../../projects/services/project.service");
const loginService = new login_service_1.LoginService();
const projectService = new project_service_1.ProjectService();
const googleTokenVerify = new google_auth_lib_1.GoogleTokenVerify();
class LoginController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = Object.assign({}, req.body);
            try {
                const token = yield loginService.login(user);
                return res.json({ ok: true, message: "User Logged In Successfully", token });
            }
            catch (e) {
                return res.status(400).json({ ok: false, error: e });
            }
        });
    }
    loginGoogle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { token } = req.body;
            try {
                const userGoogle = yield googleTokenVerify.verify(token);
                const tokenPropio = yield loginService.loginGoogle(userGoogle);
                return res.json({ ok: true, message: "User Logged In Successfully", tokenPropio });
            }
            catch (e) {
                return res.status(400).json({ ok: false, message: 'Si error === {}; El Token No Es Válido', error: e });
            }
        });
    }
    loginRenew(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idUser = req.user;
            try {
                const tokenValidado = yield loginService.loginRenew(idUser);
                const projects = yield projectService.projects(idUser);
                return res.json({ ok: true, tokenValidado, projects });
            }
            catch (e) {
                return res.status(400).json({ ok: false, error: e });
            }
        });
    }
}
exports.LoginController = LoginController;
