import mongoose from 'mongoose';
let Schema = mongoose.Schema;

const Task = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String }
    }
)

export default Task;