"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRoute = void 0;
const express_1 = require("express");
const passport_1 = require("passport");
const login_controller_1 = require("../controllers/login.controller");
const login_middleware_1 = require("../middlewares/login.middleware");
const loginController = new login_controller_1.LoginController();
const loginMiddleware = new login_middleware_1.LoginMiddleware();
class LoginRoute {
    constructor() {
        this.router = express_1.Router();
        this.router.post("/login", [loginMiddleware.login], loginController.login);
        this.router.post("/login/google", [loginMiddleware.loginGoogle], loginController.loginGoogle);
        this.router.get("/login/renew", [passport_1.authenticate('jwt', { session: false })], loginController.loginRenew);
    }
}
exports.LoginRoute = LoginRoute;
