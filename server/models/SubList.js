import mongoose from 'mongoose';
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId

const SubList = (
    {
        title: { type: String, required: true },
        task: { type: ObjectId, ref: "Task", required: true },
        list: { type: ObjectId, ref: "List", required: true }
    }
)

export default SubList