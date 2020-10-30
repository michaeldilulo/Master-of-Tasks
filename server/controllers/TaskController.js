import express from 'express'
import _taskService from "../services/TaskService"

export default class TaskController {
    constructor() {
        this.router = express.Router()
            .get("", this.getAllTasks)
            .get("/:id", this.getTaskById)
            .post("", this.createTask)
            .put("/:id", this.editTask)
            .delete("/:id", this.deleteTask)
    }

    getAllTasks(req, res, next) {
        throw new Error('Method not implemented.')
    }
    getTaskById(req, res, next) {
        throw new Error('Method not implemented.')
    }
    createTask(req, res, next) {
        throw new Error('Method not implemented.')
    }
    editTask(req, res, next) {
        throw new Error('Method not implemented.')
    }
    deleteTask(req, res, next) {
        throw new Error('Method not implemented.')
    }
}