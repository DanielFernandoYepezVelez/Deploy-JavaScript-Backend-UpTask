"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
class ProjectSchema {
    project() {
        return joi_1.default.object({
            name: joi_1.default.string().min(4).max(50).required().trim(),
        });
    }
}
exports.ProjectSchema = ProjectSchema;
