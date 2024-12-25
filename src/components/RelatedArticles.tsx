import React from 'react';
import { Book } from 'lucide-react';
import { constitutionalArticles } from '../data/constitutionalArticles';
import type { Article } from '../types';

export const RelatedArticles = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Book className="mr-2" />
        Related Constitutional Articles
      </h2>
      <div className="space-y-4">
        {constitutionalArticles.map((article: Article) => (
          <div key={article.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium">Article {article.number}: {article.title}</h3>
            <p className="text-gray-600 mt-2">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};