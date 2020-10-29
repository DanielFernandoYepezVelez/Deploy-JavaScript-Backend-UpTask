"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
class Main {
    constructor() {
        this.main = new app_1.App();
        this.init();
    }
    init() {
        this.main.middlewares();
        this.main.routes();
        this.main.staticFiles();
        this.main.server();
    }
}
exports.default = new Main();
