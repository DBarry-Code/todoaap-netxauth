import mongoose, { now } from "mongoose";

const todoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    user: { type: mongoose.Types.ObjectId, ref: "users" },
});

todoSchema.set("timestamps", true);

let Dataset = mongoose.models.todo || mongoose.model("todo", todoSchema);

export default Dataset;
