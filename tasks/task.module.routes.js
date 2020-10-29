"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRoutes = void 0;
const task_routes_1 = require("./routes/task.routes");
const taskRoute = new task_routes_1.TaskRoute();
class TaskRoutes {
}
exports.TaskRoutes = TaskRoutes;
TaskRoutes.task = taskRoute.router;
