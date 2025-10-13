import dotenv from 'dotenv';
dotenv.config();
import { GoogleGenerativeAI } from "@google/generative-ai";

// import {ChatPromptTemplate} from '@langchain/core/prompts';


const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });


export const generateBlog = async (req, res) => {
    const { question, category } = req.body;
    if (!question || !category) {
        return res.status(400).json({ message: "Missing questions" });
    }

    try {
        const prompt = `Write a detailed blog post on the following topic: ${question} and categorize it under ${category}.
Provide the response in markdown format with:
- Headings and subheadings
- Bullet points where appropriate
- If the question asks for resources, include a list of 5 useful resources with links.
- Ensure the content is engaging and suitable for a blog audience.
- If ${question} is different from ${category}, make sure to respond that the content is not related to the category.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return res.json({
            data: text,
            message: "Blog generated successfully",
            success: true
        });
    } catch (error) {
        console.log("Error in blog generation", error);
        return res.status(500).json({ message: error.message ?? "Internal server error", success: false })
    }
}