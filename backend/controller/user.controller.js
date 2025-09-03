import User from "../models/userModel";
import { generateToken } from "../utils/generateToken";
import { UploadImage } from "../utils/uploadImage";

export const register = async (req, res) => {
    try {
        const {firstName , lastName , email, password , role} = req.body;

        const isUserExist = await User.findOne({email});

        if(isUserExist){
            return res.status(401).json({message: "User already exist" , success: false});
        }

        const imageUrl = req.file;

        const profileImage = await UploadImage(imageUrl);
        const newUser = User.create({
            firstName,
            lastName,
            email,
            password,
            role,
            imageUrl: profileImage.secure_url,
            imageUrlId: profileImage.public_id
        })

        if(newUser){
            generateToken(newUser._id , res)
        }
    } catch (error) {
        res.status(401).json({ message: error.message, success: false });
    }
}

export const login = async (req, res) => {
    try {
        const {email , password} = req.body;

        const userExist = await User.findOne({email});
        if(!userExist){
            res.status(401).json({message: "User does not exist" , success: false});
        }

        const isPasswordCorrect = await userExist.comparePassword(password);

        if(!isPasswordCorrect){
            return res.status(401).json({message: "Invalid credentials" , success: false});
        }

        generateToken(userExist._id , res);

        res.status(200).json({message: "Login successful" , success: true , user: userExist});
    } catch (error) {
        res.status(401).json({message: error.message , success: false});
    }
}

export const logout = async (res , res)=> {
    try {
        res.clearCookie("token" , {
            httpOnly: true,
            sameSite: 'none',
            secure: false
        })
    } catch (error) {
        console.log("Error in logout controller" , error.message);
        res.status(401).json({message: error.message , success: false});
    }
}

export const checkAuth = async(res , res)=> {
    try {
        res.status(200).json({message: "User is authenticated" , success: true});
    } catch (error) {
        res.status(401).json({message: error.message , success: false});
    }
}