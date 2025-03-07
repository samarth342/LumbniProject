import React from 'react';

const ModelsSection = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Models</h2>
      <ul className="space-y-2">
        <li className="hover:bg-gray-700 p-2 rounded">Flagship models</li>
        <li className="hover:bg-gray-700 p-2 rounded">Best roleplay models</li>
        <li className="hover:bg-gray-700 p-2 rounded">Best coding models</li>
        <li className="hover:bg-gray-700 p-2 rounded">Reasoning models</li>
      </ul>
    </div>
  );
};

export default ModelsSection;