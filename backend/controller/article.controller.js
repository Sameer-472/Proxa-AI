import dotenv from "dotenv";
dotenv.config();

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";

const model = new ChatGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_API_KEY_ARTICLE,
    model: "gemini-1.5-flash",
    temperature: 0.2,
});

const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a helpful AI that writes high-quality technical articles."],
    [
        "user",
        `Write a detailed article on the following topic: {question}. 
Provide the response in markdown format with:
- Headings and subheadings
- Bullet points where appropriate
- If the question asks for resources, include a list of 5 useful resources with links.`,
    ],
]);

const chain = RunnableSequence.from([
    prompt,
    model
]);

export const generateArticle = async (req, res) => {
    const { question } = req.body;

    if (!question) {
        return res.status(400).json({ message: "Missing 'question' in request body" });
    }

    try {
        const result = await chain.invoke({ question });

        // result.content is usually correct for Gemini
        const article = result.content ?? result?.text ?? "";

        res.json({ data: article, message: "Article generated successfully" });
    } catch (error) {
        console.error("Article generation failed:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};
