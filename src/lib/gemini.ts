import { GoogleGenerativeAI } from '@google/generative-ai';

// Ensure API key exists
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
if (!apiKey) {
  throw new Error('VITE_GEMINI_API_KEY is not set in environment variables');
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function analyzeCaseWithAI(caseInfo: {
  incidentType: string;
  description: string;
  date: string;
  location: string;
}) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `
      Analyze this legal case from India:
      Type of Incident: ${caseInfo.incidentType}
      Description: ${caseInfo.description}
      Date: ${caseInfo.date}
      Location: ${caseInfo.location}

      Please provide:
      1. Relevant Articles from the Indian Constitution that apply to this case
      2. A brief analysis of how these articles relate to the case
      3. Potential legal considerations based on Indian law
      4. Suggested next steps (in general terms, not specific legal advice)
      
      Format the response in clear sections.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error analyzing case:', error);
    throw error;
  }
}
