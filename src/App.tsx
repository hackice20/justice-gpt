import React, { useState } from 'react';
import { Scale } from 'lucide-react';
import { CaseForm } from './components/CaseForm';
import { Disclaimer } from './components/Disclaimer';
import { RelatedArticles } from './components/RelatedArticles';
import { AIAnalysis } from './components/AIAnalysis';
import { analyzeCaseWithAI } from './lib/gemini';
import type { CaseInfo } from './types';

function App() {
  const [caseInfo, setCaseInfo] = useState<CaseInfo | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSubmit = async (info: CaseInfo) => {
    setCaseInfo(info);
    setIsAnalyzing(true);
    try {
      const aiAnalysis = await analyzeCaseWithAI(info);
      setAnalysis(aiAnalysis);
    } catch (error) {
      console.error('Error:', error);
      setAnalysis('Failed to analyze case. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-indigo-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <Scale className="h-8 w-8 mr-2" />
            <h1 className="text-2xl font-bold">Legal Education Portal</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Disclaimer />
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Case Information</h2>
            <CaseForm onSubmit={handleSubmit} />
          </div>

          {caseInfo && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Case Summary</h2>
                <div className="space-y-4">
                  <p><strong>Type:</strong> {caseInfo.incidentType}</p>
                  <p><strong>Description:</strong> {caseInfo.description}</p>
                  <p><strong>Date:</strong> {caseInfo.date}</p>
                  <p><strong>Location:</strong> {caseInfo.location}</p>
                </div>
              </div>
              <AIAnalysis analysis={analysis} isLoading={isAnalyzing} />
              <RelatedArticles />
            </div>
          )}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Legal Education Portal. For educational purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;