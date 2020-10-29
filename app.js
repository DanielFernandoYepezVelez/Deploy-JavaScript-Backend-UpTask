"use strict";
var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function(resolve) { resolve(value); }); }
    return new(P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }

        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }

        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
require("dotenv/config");
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const passport_1 = __importDefault(require("passport"));
const express_1 = __importDefault(require("express"));
const auth_module_routes_1 = require("./auth/auth.module.routes");
const task_module_routes_1 = require("./tasks/task.module.routes");
const project_module_routes_1 = require("./projects/project.module.routes");
const passport_middleware_1 = require("./middlewares/passport.middleware");
const passportJwt = new passport_middleware_1.PassportJwt();
class App {
    constructor() {
        this.app = express_1.default();
    }
    middlewares() {
        this.app.use(cors_1.default());
        this.app.use(morgan_1.default("dev"));
        this.app.use(express_1.default.json());
        passport_1.default.use(passportJwt.newStrategia());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use("/api", task_module_routes_1.TaskRoutes.task);
        this.app.use("/api", auth_module_routes_1.AuthRoutes.login);
        this.app.use("/api", auth_module_routes_1.AuthRoutes.register);
        this.app.use("/api", project_module_routes_1.ProjectRoutes.project);
        this.app.get("*", (req, res) => {
            res.sendFile(path_1.default.resolve(__dirname, './public/'));
        });
    }
    staticFiles() {
        this.app.use(express_1.default.static(path_1.default.join(__dirname, './public/')));
    }
    server() {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                yield this.app.listen(process.env.PORT);
                console.log(`Server On Port ${process.env.PORT}`);
            } catch (e) {
                console.log(`You Can't Connect The Server`);
                console.log(e);
            }
        });
    }
}
exports.App = App;