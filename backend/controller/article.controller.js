import dotenv from "dotenv";
dotenv.config();
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

export const generateArticle = async (req, res) => {
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ message: "Missing 'question' in request body" });
  }

  try {
    const prompt = `
You are a helpful AI that writes high-quality technical articles.

Write a detailed article on the following topic: ${question}.

Provide the response in markdown format with:
- Headings and subheadings
- Bullet points where appropriate
- If the question asks for resources, include a list of 5 useful resources with links.
`;

    const result = await model.generateContent(prompt);
    const article = result.response.text();

    res.json({ data: article, message: "Article generated successfully" });
  } catch (error) {
    console.error("Article generation failed:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
