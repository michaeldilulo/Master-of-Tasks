import express from 'express'
import _subListService from "../services/SubListService"

export default class SubListController {
    constructor() {
        this.router = express.Router()
            .get("", this.getAllSubLists)
            .get("/:id", this.getSubListById)
            .post("", this.createSubList)
            .put("/:id", this.editSubList)
            .delete("/:id", this.deleteSubList)
    }

    defaultRoute(req, res, next) {
        next({ status: 404, message: "No Such Route" })
    }

    // Get All Sub Lists Postman Test: Pass
    async getAllSubLists(req, res, next) {
        try {
            let data = await _subListService.getAllSubLists()
            return res.send(data);
        } catch (error) {
            next(error)
        }
    }

    // Get Sub List by id Postman Test: Pass
    async getSubListById(req, res, next) {
        try {
            let data = await _subListService.getSubListById(req.params.id)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }

    // Create Sub Lists Postman Test: Pass
    async createSubList(req, res, next) {
        try {
            let data = await _subListService.createSubList(req.body)
            return res.status(201).send(data)
        } catch (error) {
            next(error)
        }
    }
    // Edit Sub Lists Postman Test: Pass
    async editSubList(req, res, next) {
        try {
            let data = await _subListService.editSubList(req.params.id, req.body);
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }

    // Delete Sub Lists Postman Test: Pass
    async deleteSubList(req, res, next) {
        try {
            await _subListService.deleteSubList(req.params.id);
            return res.send("Sub list was successfully deleted")
        } catch (error) {
            next(error)
        }
    }
}