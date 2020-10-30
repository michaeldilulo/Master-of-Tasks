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

    defaultRoute(req, res, next) {
        next({ status: 404, message: "No Such Route" })
    }

    //  Get All Tasks Postman Test: Pass
    async getAllTasks(req, res, next) {
        try {
            let data = await _taskService.getAllTasks()
            return res.send(data);
        } catch (error) {
            next(error)
        }
    }

    // Get Task By Id Postman Test: Pass
    async getTaskById(req, res, next) {
        try {
            let data = await _taskService.getTaskById(req.params.id)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }

    // Create Tasks Postman Test: Pass
    async createTask(req, res, next) {
        try {
            let data = await _taskService.createTask(req.body)
            return res.status(201).send(data)
        } catch (error) {
            next(error)
        }
    }

    // Edit Task Postman Test: Pass
    async editTask(req, res, next) {
        try {
            let data = await _taskService.editTask(req.params.id, req.body);
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async deleteTask(req, res, next) {
        try {
            await _taskService.deleteTask(req.params.id);
            return res.send("Task was successfully deleted")
        } catch (error) {
            next(error)
        }
    }
}