import express from "express";
import { allUsers, checkAuth, login, logout, register } from "../controller/user.controller.js";
import upload from "../middleware/upload.middleware.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";


const router = express.Router();

router.route("/signUp").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("checkAuth").get(authMiddleware , checkAuth);
router.route("/get-all-users").get(authMiddleware , authorizeRoles("admin")  , allUsers)

export default router;