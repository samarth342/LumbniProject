import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 p-6 bg-white shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Projects</h3>
      <ul className="space-y-3">
        <li className="text-gray-600 hover:text-blue-600 cursor-pointer">All projects</li>
        <li className="text-gray-600 hover:text-blue-600 cursor-pointer">New project</li>
        <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Search for a project</li>
      </ul>
      <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-4">Settings</h3>
      <ul className="space-y-3">
        <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Account</li>
        <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Preferences</li>
        <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Access Tokens</li>
        <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Security</li>
        <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Audit Logs</li>
      </ul>
    </aside>
  );
};

export default Sidebar;