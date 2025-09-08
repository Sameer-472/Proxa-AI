import FeedbackForm from "../models/feedback-form-model.js";

export const createFeedbackForm = async (req, res) => {
    const { userId, feedback } = req.body;

    if (!userId || !feedback) {
        return res.status(400).json({ message: "All fields are required", success: false })
    }

    try {
        const createdFeedback = await FeedbackForm.create({
            userId,
            feedback
        });
        return res.status(200).json({ data: createdFeedback, message: "Feedback submitted successfully", success: true })
    } catch (error) {
        return res.status(500).json({ message: error.message ?? "Internal server error", success: false })
    }
}

export const getFeedbackForms = async (req, res) => {
    try {
        const feedbackForms = await FeedbackForm.find().populate("userId", "name email");
        return res.status(200).json({ data: feedbackForms, message: "Feedback forms fetched successfully", success: true })
    } catch (error) {
        return res.status(500).json({ message: error.message ?? "Internal server error", success: false })
    }
}
