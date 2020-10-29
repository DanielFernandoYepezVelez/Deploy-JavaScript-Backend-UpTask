"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoute = void 0;
const express_1 = require("express");
const passport_1 = require("passport");
const project_controller_1 = require("../controllers/project.controller");
const project_middleware_1 = require("../middlewares/project.middleware");
const projectController = new project_controller_1.ProjectController();
const projectMiddleware = new project_middleware_1.ProjectMiddleware();
class ProjectRoute {
    constructor() {
        this.router = express_1.Router();
        this.router.get('/projects', [passport_1.authenticate('jwt', { session: false })], projectController.projects);
        this.router.get('/project/:project_url', [passport_1.authenticate('jwt', { session: false })], projectController.project);
        this.router.post('/project', [passport_1.authenticate('jwt', { session: false }), projectMiddleware.project], projectController.createProject);
        this.router.delete('/project/:project_url/:project_id', [passport_1.authenticate('jwt', { session: false })], projectController.deleteProject);
        this.router.put('/project/:project_url/:project_id', [passport_1.authenticate('jwt', { session: false }), projectMiddleware.project], projectController.updateProject);
    }
}
exports.ProjectRoute = ProjectRoute;
