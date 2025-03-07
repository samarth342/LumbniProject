"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar/sidebar';
import ChatSection from '@/components/footer';
import FlagshipCard from '@/components/Model';

export default function Chat() {
  return (
    <div className="flex h-screen bg-gray-900 flex-col">
      {/* Navbar */}
      <div className="flex sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex w-screen flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[16%] bg-gray-800">
          <Sidebar />
        </div>

        {/* Models Section */}
        <div className="w-[84%] p-6 overflow-y-auto h-96">
          {/* Header */}
          <div className="m">
            <h1 className="text-2xl font-bold text-white">Models</h1>
            <p className="text-gray-400">Explore and interact with various AI models.</p>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search models..."
              className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Flagship Models Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <FlagshipCard />
            <FlagshipCard />
            <FlagshipCard />
            <FlagshipCard />
            <FlagshipCard />
            <FlagshipCard />
          </div>

          {/* Add Model Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Add Model</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="text-lg font-medium text-white">Best Coding Models</h3>
                <p className="text-gray-400">Optimized for programming tasks.</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="text-lg font-medium text-white">Best Roleplay Models</h3>
                <p className="text-gray-400">Great for storytelling and roleplaying.</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="text-lg font-medium text-white">Reasoning Models</h3>
                <p className="text-gray-400">Designed for logical reasoning tasks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="sticky bottom-0 z-50">
        <ChatSection />
      </div>
    </div>
  );
}
