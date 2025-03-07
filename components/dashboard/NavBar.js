import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">Dashboard</h1>
      <ul className="flex gap-6 text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer">Projects</li>
        <li className="hover:text-blue-600 cursor-pointer">Account</li>
        <li className="hover:text-blue-600 cursor-pointer">Preferences</li>
        <li className="hover:text-blue-600 cursor-pointer">Documentation</li>
      </ul>
    </nav>
  );
};

export default Navbar;