import mongoose from 'mongoose';
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId

const List = new Schema(
    {
        title: { type: String, required: true },
        task: { type: ObjectId, ref: "Task", required: true }
    }
)

export default List;