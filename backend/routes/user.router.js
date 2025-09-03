import express from "express";
import { login, logout, register } from "../controller/user.controller";
import upload from "../middleware/upload.middleware";


const router = express.Router();

router.route("/signUp").post(upload.single("image") , register);
router.route("/login").post(login);
router.route("/logout").post(logout);