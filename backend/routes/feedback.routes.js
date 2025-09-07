import express from 'express';
// import { createFeedbackForm, getFeedbackForms } from '../controller/feedback-form.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { authorizeRoles } from '../middleware/role.middleware.js';
import { createFeedbackForm, getFeedbackForms } from '../controller/feedback-form.contoller.js';

const router = express.Router();

router.route("/create-feedback-form").post(authMiddleware, createFeedbackForm);

router.route("/get-feedback-forms").get(authMiddleware, authorizeRoles("admin"), getFeedbackForms)

export default router;