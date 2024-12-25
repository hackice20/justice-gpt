import React, { useState } from 'react';
import type { CaseInfo } from '../types';

interface Props {
  onSubmit: (caseInfo: CaseInfo) => void;
}

export const CaseForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<CaseInfo>({
    incidentType: '',
    description: '',
    date: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Type of Incident
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.incidentType}
            onChange={(e) => setFormData(prev => ({ ...prev, incidentType: e.target.value }))}
            required
          />
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            required
          />
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Date of Incident
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.date}
            onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
            required
          />
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Location
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.location}
            onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
            required
          />
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Analyze Case
      </button>
    </form>
  );
};