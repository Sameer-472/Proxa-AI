import { model, Schema } from "mongoose";

const feedbackFormSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    feedback: {
        type: String,
        required: true
    }
})

const FeedbackForm = model("FeedbackForm", feedbackFormSchema);

export default FeedbackForm;