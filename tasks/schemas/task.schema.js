"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
class TaskSchema {
    task() {
        return joi_1.default.object({
            name: joi_1.default.string().min(4).required().trim(),
        });
    }
}
exports.TaskSchema = TaskSchema;
