import { model, Schema } from "mongoose";

const createPaymentSchema = new Schema({
    planName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    content: {
        type: [String],
        required: true
    }
}, { timestamps: true });

const CreatePayment = model("CreatePayment", createPaymentSchema);

export default CreatePayment;