"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const login_routes_1 = require("./routes/login.routes");
const register_routes_1 = require("./routes/register.routes");
const loginRoute = new login_routes_1.LoginRoute();
const registerRoute = new register_routes_1.RegisterRoute();
class AuthRoutes {
}
exports.AuthRoutes = AuthRoutes;
AuthRoutes.login = loginRoute.router;
AuthRoutes.register = registerRoute.router;
