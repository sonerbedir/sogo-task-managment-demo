import mongoose from "mongoose"

const UsersSchema = new mongoose.Schema({
    name: {type: String, required: true, min: 3, max: 255},
    email: {type: String, unique: true, required: true, min: 6, max: 255},
    password: {type: String, required: true, min: 6, max: 1024},
    date: {
        type: Date,
        default: Date.now
    },
});

export default mongoose.model("User", UsersSchema);