import { model , Schema} from "mongoose";

const userSchema = new Schema({
    firstName: {
        type: String,
        required:true,
        trim :true
    },
    lastName: {
        type: String,
        required:true,
        trim :true
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
})