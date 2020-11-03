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

    // Get All Lists Postman Test: Pass
    async getAllSubLists(req, res, next) {
        try {
            let data = await _subListServiceService.getAllSubLists()
            return res.send(data);
        } catch (error) {
            next(error)
        }
    }

    // Get List By Id Postman Test: Pass
    async getSubListById(req, res, next) {
        try {
            let data = await _subListService.getSubListById(req.params.id)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }

    // Create List Postman Test: Pass
    async createSubList(req, res, next) {
        try {
            let data = await _subListService.createSubList(req.body)
            return res.status(201).send(data)
        } catch (error) {
            next(error)
        }
    }

    // Edit List Postman Test: Pass
    async editSubList(req, res, next) {
        try {
            let data = await _subListService.editSubList(req.params.id, req.body);
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }

    // Delete List Postman Test: Pass
    async deleteSubList(req, res, next) {
        try {
            await _subListService.deleteSubList(req.params.id);
            return res.send("List was successfully deleted")
        } catch (error) {
            next(error)
        }
    }
}