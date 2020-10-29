"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRoute = void 0;
const express_1 = require("express");
const passport_1 = require("passport");
const task_controller_1 = require("../controllers/task.controller");
const task_middleware_1 = require("../middlewares/task.middleware");
const taskController = new task_controller_1.TaskController();
const taskMiddleware = new task_middleware_1.TaskMiddleware();
class TaskRoute {
    constructor() {
        this.router = express_1.Router();
        this.router.get('/tasks/:project_id', [passport_1.authenticate('jwt', { session: false })], taskController.tasks);
        this.router.patch('/task/:task_id', [passport_1.authenticate('jwt', { session: false })], taskController.updateTask);
        this.router.delete('/task/:id_task', [passport_1.authenticate('jwt', { session: false })], taskController.deleteTask);
        this.router.post('/task/:project_id', [passport_1.authenticate('jwt', { session: false }), taskMiddleware.task], taskController.createTask);
    }
}
exports.TaskRoute = TaskRoute;
