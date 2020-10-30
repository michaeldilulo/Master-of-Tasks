import mongoose from 'mongoose';
import Task from "../models/Task";

const _repository = mongoose.model("Task", Task)

class TaskService {
    deleteTask(id) {
        throw new Error('Method not implemented.');
    }
    editTask(id, body) {
        throw new Error('Method not implemented.');
    }
    createTask(body) {
        throw new Error('Method not implemented.');
    }
    getTaskById(id) {
        throw new Error('Method not implemented.');
    }
    getAllTasks() {
        throw new Error('Method not implemented.');
    }
}

const _taskService = new TaskService()

export default _taskService;