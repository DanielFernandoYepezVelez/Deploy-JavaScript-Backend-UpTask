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
exports.TaskController = void 0;
const task_service_1 = require("../services/task.service");
const taskService = new task_service_1.TaskService();
class TaskController {
    tasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { project_id } = req.params;
            try {
                const tasks = yield taskService.tasks(project_id);
                return res.json({ ok: true, tasks });
            }
            catch (e) {
                return res.status(400).json({ ok: false, error: e });
            }
        });
    }
    createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.body;
            const { project_id } = req.params;
            try {
                const tasks = yield taskService.createTask(project_id, name);
                return res.json({ ok: true, message: 'Successfully Created Task', tasks });
            }
            catch (e) {
                return res.status(400).json({ ok: false, error: e });
            }
        });
    }
    updateTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { task_id } = req.params;
            try {
                const message = yield taskService.updateTask(task_id);
                return res.json({ ok: true, message });
            }
            catch (e) {
                return res.status(400).json({ ok: false, error: e });
            }
        });
    }
    deleteTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_task } = req.params;
            try {
                const message = yield taskService.deleteTask(id_task);
                return res.json({ ok: true, message });
            }
            catch (e) {
                return res.status(400).json({ ok: false, error: e });
            }
        });
    }
}
exports.TaskController = TaskController;
