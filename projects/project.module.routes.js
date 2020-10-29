"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoutes = void 0;
const project_routes_1 = require("./routes/project.routes");
const projectRoute = new project_routes_1.ProjectRoute();
class ProjectRoutes {
}
exports.ProjectRoutes = ProjectRoutes;
ProjectRoutes.project = projectRoute.router;
