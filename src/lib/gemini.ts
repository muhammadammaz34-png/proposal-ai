console.log("API Key Loaded:", !!process.env.GEMINI_API_KEY);

import { GoogleGenAI } from "@google/genai";
export const MODEL = "gemini-2.5-flash-lite";

export const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});