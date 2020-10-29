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
exports.TaskMiddleware = void 0;
const task_schema_1 = require("../schemas/task.schema");
const taskSchema = new task_schema_1.TaskSchema();
class TaskMiddleware {
    task(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error } = yield taskSchema.task().validate(req.body);
            if (error) {
                return res.status(400).json({ ok: false, error: error.details[0].message });
            }
            return next();
        });
    }
}
exports.TaskMiddleware = TaskMiddleware;
