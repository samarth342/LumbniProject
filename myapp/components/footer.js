'use client';

import { useState } from 'react';
import { Search, Lightbulb, Mic } from 'lucide-react';

export default function ChatSection() {
  const [message, setMessage] = useState('');

  return (
    <div className="flex flex-col items-center justify-center h-100 text-white">
      <h2 className="text-2xl font-semibold mb-6">What can I help with?</h2>
      <div className="w-full max-w-xl p-4 bg-gray-800 rounded-lg flex items-center gap-2">
        <button className="p-2 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">
          <Search className="w-5 h-5" />
        </button>
        <button className="p-2 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">
          <Lightbulb className="w-5 h-5" />
        </button>
        <input
          type="text"
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
          placeholder="Ask anything"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="p-2 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">
          <Mic className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
