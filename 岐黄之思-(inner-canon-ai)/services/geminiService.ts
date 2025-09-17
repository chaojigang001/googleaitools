
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getTcmResponseStream = async (prompt: string) => {
  try {
    const response = await ai.models.generateContentStream({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        temperature: 0.2, // Lower temperature for more deterministic and factual responses
        topP: 0.9,
        topK: 40,
      }
    });
    return response;
  } catch (error) {
    console.error("Gemini API call failed:", error);
    throw new Error("Failed to get response from AI model.");
  }
};
