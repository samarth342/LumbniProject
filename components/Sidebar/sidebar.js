'use client' 

import { useState } from "react";
import { Home, User, Settings } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`h-screen w-64 bg-gray-900 text-white fixed top-16 transition-all duration-300 ${
          isOpen ? "left-0" : "-left-64"
        }`}
      >
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                <Home size={20} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/profile" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                <User size={20} />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link href="/settings" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                <Settings size={20} />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 left-4 bg-gray-800 text-white p-2 rounded-full z-50"
      >
        {isOpen ? "←" : "→"}
      </button>
    </div>
  );
}
