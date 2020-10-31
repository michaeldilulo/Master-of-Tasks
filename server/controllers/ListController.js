import express from 'express'
import _listService from "../services/ListService"

export default class ListController {
    constructor() {
        this.router = express.Router()
            .get("", this.getAllLists)
            .get("/:id", this.getListById)
            .post("", this.createList)
            .put("/:id", this.editList)
            .delete("/:id", this.deleteList)
    }

    defaultRoute(req, res, next) {
        next({ status: 404, message: "No Such Route" })
    }

    // Get All Lists Postman Test: Pass
    async getAllLists(req, res, next) {
        try {
            let data = await _listService.getAllLists()
            return res.send(data);
        } catch (error) {
            next(error)
        }
    }

    // Get List By Id Postman Test: Pass
    async getListById(req, res, next) {
        try {
            let data = await _listService.getListById(req.params.id)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }

    // Create List Postman Test: Pass
    async createList(req, res, next) {
        try {
            let data = await _listService.createList(req.body)
            return res.status(201).send(data)
        } catch (error) {
            next(error)
        }
    }

    // Edit List Postman Test: Pass
    async editList(req, res, next) {
        try {
            let data = await _listService.editList(req.params.id, req.body);
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }

    // Delete List Postman Test: Pass
    async deleteList(req, res, next) {
        try {
            await _listService.deleteList(req.params.id);
            return res.send("List was successfully deleted")
        } catch (error) {
            next(error)
        }
    }
}