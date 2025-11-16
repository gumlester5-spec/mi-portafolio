import { GoogleGenAI } from "@google/genai";
import { Idea } from '../types';

export const generateProjectIdeas = async (topic: string): Promise<Idea[]> => {
  if (!process.env.API_KEY) {
    throw new Error("API key not found. Please set the API_KEY environment variable.");
  }
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `Genera 3 ideas de proyectos innovadores sobre "${topic}".
  Responde EXCLUSIVAMENTE con un array JSON válido que siga esta estructura:
  [
    {"title": "Título de la Idea 1", "description": "Descripción de la idea 1."},
    {"title": "Título de la Idea 2", "description": "Descripción de la idea 2."},
    {"title": "Título de la Idea 3", "description": "Descripción de la idea 3."}
  ]
  No incluyas texto introductorio, explicaciones adicionales, ni markdown (como \`\`\`json).`;
  
  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });

    let jsonText = response.text.trim();
    
    // Limpiar posibles bloques de código markdown, por si acaso.
    if (jsonText.startsWith("```json")) {
        jsonText = jsonText.substring(7, jsonText.length - 3).trim();
    } else if (jsonText.startsWith("```")) {
        jsonText = jsonText.substring(3, jsonText.length - 3).trim();
    }

    const ideas = JSON.parse(jsonText);
    return ideas as Idea[];
  } catch (error) {
    console.error("Error generating project ideas:", error);
    if (error instanceof SyntaxError) {
        throw new Error("La respuesta de la IA no era un JSON válido. Por favor, inténtelo de nuevo.");
    }
    throw new Error("No se pudieron generar ideas. Por favor, inténtelo de nuevo.");
  }
};