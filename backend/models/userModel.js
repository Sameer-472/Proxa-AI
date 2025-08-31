import { model, Schema } from "mongoose";

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },

    password: {
        type: String,
        required: true
    },

    imageUrl: {
        type: String,
        unique: true,
        required: true,
        // default: 
    },

    imageUrlId: {
        type: String,
        unique: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, { timestamps: true });

const User = model('User', userSchema);

export default User;