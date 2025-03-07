"use client";

import React, { useState } from 'react';

const Body = () => {
  // State for form data
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission

  return (
    <main className="flex-1 p-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">No projects</h2>
      <p className="text-gray-600 mb-6">Get started by creating a new project.</p>

      {/* New Project Form */}
      <form  className="space-y-4">
        <div>
          <label className="block text-gray-700">Project Name</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Create Project
        </button>
      </form>
    </main>
  );
};

export default Body;