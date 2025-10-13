import User from "../models/userModel.js";
import { generateToken } from "../utils/generateToken.js";
import { UploadImage } from "../utils/uploadImage.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    console.log("req body" , req);
    try {
        const { firstName, lastName, email, password, role } = req.body;

        const isUserExist = await User.findOne({ email });

        if (isUserExist) {
            return res.status(401).json({ message: "User already exist", success: false });
        }

        const imageUrl = req.file;

        const profileImage = await UploadImage(imageUrl);

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role,
            imageUrl: profileImage.secure_url,
            imageUrlId: profileImage.public_id
        })

        if (newUser) {
            generateToken(newUser._id, res);
            return res.status(200).json(newUser, {
                message: "User registered successfully",
                success: true,
            });
        }
        else {
            return res
                .status(401)
                .json({ message: "User registration failed", success: false });
        }
    } catch (error) {
        console.log("Error in register controller", error.message);
        return res.status(401).json({ message: error.message, success: false });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("its running")
        const userExist = await User.findOne({ email });
        if (!userExist) {
            res.status(401).json({ message: "User does not exist", success: false });
        }

        const isPasswordCorrect = await bcrypt.compare(password , userExist.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Invalid credentials", success: false });
        }

        generateToken(userExist._id, res);
        res.status(200).json({ message: "Login successful", success: true, user: userExist });
    } catch (error) {
        console.log("error while login" , error)
        res.status(401).json({ message: error.message, success: false });
    }
}

export const logout = async (req, res) => {
    try {
        console.log("logout API hit")
        res.clearCookie("token", {
            httpOnly: true,
            sameSite: 'none',
            secure: false
        })
        res.status(200).json({message: "Logout Successfully" , success: true})
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(401).json({ message: error.message, success: false });
    }
}

export const checkAuth = async (req, res) => {
    try {
        res.status(200).json({ message: "User is authenticated", success: true });
    } catch (error) {
        console.log("here is the error" , error)
        res.status(401).json({ message: error.message, success: false });
    }
}

export const allUsers = async (req, res) => {
    try {
        const users = await User.find();

        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found", success: false });
        }

        res.status(200).json({ message: "Users fetched successfully", success: true })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message, success: false });
    }
}