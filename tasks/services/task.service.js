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
exports.TaskService = void 0;
const mysql2_1 = __importDefault(require("../../libs/mysql2"));
class TaskService {
    tasks(project_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let [rows, fields] = yield mysql2_1.default.query('SELECT * FROM projects WHERE id = ?', [project_id]);
            if (![rows, fields][0][0]) {
                throw new Error("Project No Exist!").message;
            }
            [rows, fields] = yield mysql2_1.default.query('SELECT * FROM tasks WHERE project_id = ? ORDER BY id ASC', [project_id]);
            return [rows, fields][0];
        });
    }
    createTask(project_id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            let [rows, fields] = yield mysql2_1.default.query('SELECT * FROM projects WHERE id = ?', [project_id]);
            if (![rows, fields][0][0]) {
                throw new Error("Project No Exist!").message;
            }
            [rows, fields] = yield mysql2_1.default.query('SELECT task FROM tasks WHERE task = ? AND project_id = ?', [name, project_id]);
            if ([rows, fields][0][0]) {
                throw new Error("Task Name Already Exist!").message;
            }
            const task = { task: name, project_id };
            [rows, fields] = yield mysql2_1.default.query('INSERT INTO tasks SET ?', [task]);
            [rows, fields] = yield mysql2_1.default.query('SELECT * FROM tasks WHERE project_id = ? ORDER BY id ASC', [project_id]);
            return [rows, fields][0];
        });
    }
    updateTask(task_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let [rows, fields] = yield mysql2_1.default.query('SELECT state FROM tasks WHERE id = ?', [task_id]);
            if (![rows, fields][0][0]) {
                throw new Error("Task No Exist!").message;
            }
            const stateDB = Object.values([rows, fields][0][0]).map(state => state);
            let state = 0;
            if (stateDB[0] === state) {
                state = 1;
            }
            [rows, fields] = yield mysql2_1.default.query('UPDATE tasks SET state = ? WHERE id = ?', [state, task_id]);
            return 'Successfully Updated Task';
        });
    }
    deleteTask(id_task) {
        return __awaiter(this, void 0, void 0, function* () {
            let [rows, fields] = yield mysql2_1.default.query('SELECT * FROM tasks WHERE id = ?', [id_task]);
            if (![rows, fields][0][0]) {
                throw new Error("Task No Exist!").message;
            }
            [rows, fields] = yield mysql2_1.default.query('DELETE FROM tasks WHERE id = ?', [id_task]);
            return 'Successfully Deleted Task';
        });
    }
}
exports.TaskService = TaskService;
