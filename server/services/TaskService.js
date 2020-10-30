import mongoose from 'mongoose';
import Task from "../models/Task";

const _repository = mongoose.model("Task", Task)

class TaskService {

}

const _taskService = new TaskService()

export default _taskService;