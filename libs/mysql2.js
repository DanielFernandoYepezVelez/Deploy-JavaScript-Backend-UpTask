"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
class Mysql2 {
    constructor() {
        try {
            this.pool = promise_1.createPool({
                host: process.env.HOST_DATABASE,
                user: process.env.USER_DATABASE,
                password: process.env.PASSWORD_DATABASE,
                database: process.env.NAME_DATABASE,
                waitForConnections: true,
                connectionLimit: 10,
                queueLimit: 0,
            });
            if (this.pool) {
                console.log(">>> Database Is Connected");
            }
        }
        catch (e) {
            console.log(">>> Database Is NOT Connected", e);
        }
    }
}
exports.default = new Mysql2().pool;
