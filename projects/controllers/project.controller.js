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
exports.ProjectController = void 0;
const project_service_1 = require("../services/project.service");
const projectService = new project_service_1.ProjectService();
class ProjectController {
    projects(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idUser = req.user;
            try {
                const projects = yield projectService.projects(idUser);
                return res.json({ ok: true, projects });
            }
            catch (e) {
                return res.status(400).json({ ok: false, error: e });
            }
        });
    }
    project(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idUser = req.user;
            const { project_url } = req.params;
            try {
                const project = yield projectService.project(project_url, idUser);
                return res.json({ ok: true, project });
            }
            catch (e) {
                return res.status(400).json({ ok: false, error: e });
            }
        });
    }
    createProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idUser = req.user;
            const { name } = req.body;
            try {
                const projects = yield projectService.createProject(name, idUser);
                return res.json({ ok: true, message: 'Successfully Project Create', projects });
            }
            catch (e) {
                return res.status(400).json({ ok: false, error: e });
            }
        });
    }
    updateProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idUser = req.user;
            const { name } = req.body;
            const { project_url, project_id } = req.params;
            try {
                const message = yield projectService.updateProject(name, project_url, project_id, idUser);
                return res.json({ ok: true, message });
            }
            catch (e) {
                return res.status(400).json({ ok: false, error: e });
            }
        });
    }
    deleteProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idUser = req.user;
            const { project_url, project_id } = req.params;
            try {
                const message = yield projectService.deleteProject(project_id, project_url, idUser);
                return res.json({ ok: true, message });
            }
            catch (e) {
                return res.status(400).json({ ok: false, error: e });
            }
        });
    }
}
exports.ProjectController = ProjectController;
