import mongoose from 'mongoose';
import List from "../models/List";
import ApiError from "../utilities/ApiError"

const _repository = mongoose.model("List", List)

class ListService {

    async getAllLists() {
        return await _repository.find()
    }

    async getListById(id) {
        let data = await _repository.findOne({ _id: id })
        if (!data) {
            throw new ApiError("Invalid Id: Cannot Get the Specified Id")
        }
        return data;
    }

    async createList(rawListData) {
        let data = await _repository.create(rawListData)
        return data;
    }

    async editList(id, update) {
        let data = await _repository.findOneAndUpdate({ _id: id }, update, { new: true });
        if (!data) {
            throw new ApiError("Invalid id: Cannot Edit specified list")
        }
        return data;
    }

    async deleteList(id) {
        let data = await _repository.findOneAndRemove({ _id: id });
        if (!data) {
            throw new ApiError("Invalid Id: Cannot Delete specified list")
        }
    }
}

const _listService = new ListService()

export default _listService;