"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoute = void 0;
const express_1 = require("express");
const register_controller_1 = require("../controllers/register.controller");
const register_middleware_1 = require("../middlewares/register.middleware");
const registerController = new register_controller_1.RegisterController();
const registerMiddleware = new register_middleware_1.RegisterMiddleware();
class RegisterRoute {
    constructor() {
        this.router = express_1.Router();
        this.router.post("/register", [registerMiddleware.register], registerController.register);
    }
}
exports.RegisterRoute = RegisterRoute;
