import React from 'react';
import { Brain } from 'lucide-react';

interface Props {
  analysis: string | null;
  isLoading: boolean;
}

export const AIAnalysis: React.FC<Props> = ({ analysis, isLoading }) => {
  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      </div>
    );
  }

  if (!analysis) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Brain className="h-6 w-6 mr-2 text-indigo-600" />
        AI Legal Analysis
      </h2>
      <div className="prose prose-sm max-w-none">
        {analysis.split('\n').map((line, index) => (
          line.trim() && (
            <p key={index} className="mb-2">
              {line}
            </p>
          )
        ))}
      </div>
    </div>
  );
};