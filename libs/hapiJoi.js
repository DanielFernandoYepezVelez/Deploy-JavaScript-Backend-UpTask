"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hapiJoi = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
class HapiJoi {
    validateUser() {
        const schemaUser = joi_1.default.object({
            name: joi_1.default.string().required().trim(),
            email: joi_1.default.string()
                .trim()
                .required()
                .email({
                minDomainSegments: 2,
                tlds: { allow: ['com', 'net', 'co'] },
            }),
            password: joi_1.default.string().trim().required(),
            repeat_password: joi_1.default.ref('password'),
        });
        return schemaUser;
    }
    validateUserLogin() {
        const schemaUser = joi_1.default.object({
            email: joi_1.default.string()
                .trim()
                .required()
                .email({
                minDomainSegments: 2,
                tlds: { allow: ['com', 'net', 'co'] },
            }),
            password: joi_1.default.string().trim().alphanum().required(),
            repeat_password: joi_1.default.ref('password'),
        });
        return schemaUser;
    }
    validateProject() {
        const schemaProject = joi_1.default.object({
            name: joi_1.default.string().required().trim(),
            url: joi_1.default.string().required().trim(),
            user_id: joi_1.default.number().required(),
        });
        return schemaProject;
    }
    validateTask() {
        const schemaTask = joi_1.default.object({
            task: joi_1.default.string().required().trim(),
            project_id: joi_1.default.string().required().trim(),
        });
        return schemaTask;
    }
}
exports.hapiJoi = new HapiJoi();
