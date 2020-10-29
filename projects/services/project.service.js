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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const slug_1 = __importDefault(require("slug"));
const shortid_1 = require("shortid");
const mysql2_1 = __importDefault(require("../../libs/mysql2"));
class ProjectService {
    projects(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows, fields] = yield mysql2_1.default.query('SELECT * FROM projects WHERE user_id = ?', [idUser]);
            return [rows, fields][0];
        });
    }
    project(url_id, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows, fields] = yield mysql2_1.default.query('SELECT * FROM projects WHERE url = ? AND user_id = ?', [url_id, idUser]);
            if (![rows, fields][0][0]) {
                throw new Error("Project Not Exist!").message;
            }
            return [rows, fields][0];
        });
    }
    createProject(name, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const url_id = `${shortid_1.generate()}-${slug_1.default(name).toLocaleLowerCase()}`;
            const project = { name, url: url_id, user_id: idUser };
            let [rows, fields] = yield mysql2_1.default.query('SELECT name FROM projects WHERE name = ? AND user_id = ?', [name, idUser]);
            if ([rows, fields][0][0]) {
                throw new Error("Name Project Already Exist!").message;
            }
            yield mysql2_1.default.query('INSERT INTO projects SET ?', [project]);
            [rows, fields] = yield mysql2_1.default.query('SELECT * FROM projects WHERE name = ? AND user_id = ? ORDER BY id ASC', [name, idUser]);
            return [rows, fields][0];
        });
    }
    updateProject(name, project_url, project_id, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows, fields] = yield mysql2_1.default.query('SELECT * FROM projects WHERE id = ? AND url = ? AND user_id = ?', [project_id, project_url, idUser]);
            if (![rows, fields][0][0]) {
                throw new Error("Project No Exist!").message;
            }
            const project = { id: project_id, name, url: project_url, user_id: idUser };
            yield mysql2_1.default.query('UPDATE projects SET ? WHERE id = ? AND url = ?', [project, project_id, project_url]);
            return 'Successfully Updated Project';
        });
    }
    deleteProject(project_id, project_url, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows, fields] = yield mysql2_1.default.query('SELECT * FROM projects WHERE id = ? AND url = ? AND user_id = ?', [project_id, project_url, idUser]);
            if (![rows, fields][0][0]) {
                throw new Error("Project No Exist!").message;
            }
            yield mysql2_1.default.query('DELETE FROM projects WHERE id = ? AND url = ?', [project_id, project_url]);
            yield mysql2_1.default.query('DELETE FROM tasks WHERE project_id = ?', [project_id]);
            return 'Successfully Deleted Project And Tasks';
        });
    }
}
exports.ProjectService = ProjectService;
