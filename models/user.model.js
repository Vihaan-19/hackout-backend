import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 4,
        default: null
    },
    token: {
        type: String,
        default: null
    },
    moviesWatched: [{
        type: String,
        default: 0
    }]
});

const User = mongoose.model('User', userSchema);
export default User;