import mongoose from 'mongoose';
import Task from "../models/Task";
import ApiError from "../utilities/ApiError"

const _repository = mongoose.model("Task", Task)

class TaskService {

    async getAllTasks() {
        return await _repository.find()
    }

    async getTaskById(id) {
        let data = await _repository.findOne({ _id: id })
        if (!data) {
            throw new ApiError("Invalid Id: Cannot Get the Specified Id")
        }
        return data;
    }

    async createTask(rawTaskData) {
        let data = await _repository.create(rawTaskData)
        return data;
    }

    async editTask(id, update) {
        let data = await _repository.findOneAndUpdate({ _id: id }, update, { new: true });
        if (!data) {
            throw new ApiError("Invalid id: Cannot Edit specified task")
        }
        return data;
    }

    async deleteTask(id) {
        let data = await _repository.findOneAndRemove({ _id: id });
        if (!data) {
            throw new ApiError("Invalid Id: Cannot Delete specified task")
        }
    }
}

const _taskService = new TaskService()

export default _taskService;