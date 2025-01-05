# justice-gpt

# Gemini AI Crime Case Generator

## Basic Description
The Gemini AI Crime Case Generator is a web-based application that collects user-submitted crime incident details and generates an educational case analysis based on the Indian Constitution. The project is designed as a Retrieval-Augmented Generation (RAG) system to assist in understanding legal concepts in an accessible and interactive manner.

---

## Technologies Used

### Frontend:
- **React**: For building the user interface.
- **TypeScript**: Ensures type safety and reduces runtime errors.
- **Tailwind CSS**: Provides responsive and modern styling.

### Backend:
- **Vite**: Development server and build tool for optimized performance.
- **Gemini API**: Integrates AI-powered case analysis and legal insights.

### Other:
- **Environment Variables**: Secured sensitive API keys via `.env` files.

---

## Features

1. **Educational Legal Analysis**:
   - Maps user-submitted incident details to relevant Indian Constitutional articles.
   - Provides case analysis using AI-generated insights from Gemini API.

2. **Dynamic Content**:
   - Fetches real-time responses from Gemini AI to analyze and present educational data.

3. **Responsive Design**:
   - Works seamlessly on desktops, tablets, and mobile devices.

4. **Secure Environment**:
   - Utilizes environment variables to protect API keys and configurations.

5. **Loading States and Error Handling**:
   - Displays loading indicators and manages errors effectively for smooth user experience.

---

## How It Works

1. **User Interaction**:
   - The user fills out a form detailing an incident.
   - Submits the form for analysis.

2. **AI Integration**:
   - The application sends the form data to the Gemini API using a secured API key.
   - Gemini API analyzes the input and returns relevant articles and legal considerations.

3. **Display of Results**:
   - The application processes the AI’s response.
   - Presents the educational analysis with citations from the Indian Constitution.

4. **Error Handling**:
   - If the API key is missing or invalid, users are notified with an error message.
   - Displays fallback messages in case of unexpected errors.

---

## Screenshots
![](https://github.com/hackice20/justice-gpt/blob/main/Screenshot%202025-01-05%20124906.png)

![](https://github.com/hackice20/justice-gpt/blob/main/Screenshot%202025-01-05%20124934.png)

![](https://github.com/hackice20/justice-gpt/blob/main/Screenshot%202025-01-05%20124951.png)

## License
This project is licensed under the **MIT License**, allowing for open use, modification, and distribution with proper attribution.

