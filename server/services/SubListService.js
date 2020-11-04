import mongoose from 'mongoose';
import SubList from "../models/SubList";
import ApiError from "../utilities/ApiError"

const _repository = mongoose.model("SubList", SubList)

class SubListService {
    async getSubListsByListId(id) {
        let data = await _repository.find({ list: id })
        if (!data) {
            throw new ApiError("Invalid Id: Cannot retrieve Sub Lists from List Id")
        }
        return data;
    }

    async getAllSubLists() {
        return await _repository.find()
    }

    async getSubListById(id) {
        let data = await _repository.findOne({ _id: id })
        if (!data) {
            throw new ApiError("Invalid Id: Cannot Get the Specified Id")
        }
        return data;
    }

    async createSubList(rawSubListData) {
        let data = await _repository.create(rawSubListData)
        return data;
    }

    async editSubList(id, update) {
        let data = await _repository.findOneAndUpdate({ _id: id }, update, { new: true });
        if (!data) {
            throw new ApiError("Invalid id: Cannot Edit specified sub list")
        }
        return data;
    }

    async deleteSubList(id) {
        let data = await _repository.findOneAndRemove({ _id: id });
        if (!data) {
            throw new ApiError("Invalid Id: Cannot Delete specified sub list item")
        }
    }
}

const _subListService = new SubListService()

export default _subListService;