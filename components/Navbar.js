import React from 'react';
import { FaSearch, FaPlus, FaSignInAlt, FaComments, FaTrophy, FaBook, FaDoorOpen, FaArrowRight } from 'react-icons/fa'; // Icons from react-icons

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className=" bg-gray-900 top-0 left-0 right-0 z-50 w-screen">
      <div className="px-4 sm:px-6 lg:px-8 w-full flex justify-between flex-col ">
        {/* Top Row */}
        <div className="flex justify-between items-center h-16 mb-5">
          {/* Left Section */}
          <div className="flex items-center space-x-6">
            <button onClick={toggleSidebar} className="text-white hover:text-gray-800 transition-all duration-300">
              <FaArrowRight className="text-xl" />
            </button>
            <span className="text-2xl font-bold text-white flex items-center">
              <span className="bg-black text-white rounded-full px-3 py-1 mr-2 shadow-lg">OR</span>
              OpenRouter
            </span>
            <div className="hidden md:flex items-center space-x-2 bg-gray-700 rounded-full px-4 py-2 hover:bg-gray-200 transition-all duration-300 w-60 justify-between">
              <div className='inline-flex space-x-1.5'>
              <FaSearch className="text-black text-lg mt-2" />
              <span className="text-lg text-black ">Search mode</span>
              </div>

              <span className="text-lg text-black  rounded-full px-2 py-1">/</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            <button className="text-lg text-white hover:text-gray-800 flex items-center space-x-2 hover:scale-105 transition-all duration-300">
              <FaComments className="text-xl" />
              <span className="hidden sm:inline">Chat</span>
            </button>
            <button className="text-lg text-white hover:text-gray-800 flex items-center space-x-2 hover:scale-105 transition-all duration-300">
              <FaTrophy className="text-xl" />
              <span className="hidden sm:inline">Rankings</span>
            </button>
            <button className="text-lg text-white hover:text-gray-800 flex items-center space-x-2 hover:scale-105 transition-all duration-300">
              <FaBook className="text-xl" />
              <span className="hidden sm:inline">Docs</span>
            </button>
            <button className="text-lg text-white hover:text-gray-800 flex items-center space-x-2 hover:scale-105 transition-all duration-300">
              <FaSignInAlt className="text-xl" />
              <span className="hidden sm:inline">Sign In</span>
            </button>
          </div>
        </div>

        {/* Bottom Row (New Room, To:, Add model) */}
        <div className="flex justify-between items-center h-16 border-gray-200 w-8/12 mx-auto">
          {/* New Room and To: Section */}
          

            {/* To: Section */}
            <div className="flex items-center space-x-2">
              <span className="text-xl text-white">To:</span>
              <button className="text-xl text-white hover:text-gray-800 flex items-center space-x-2 hover:scale-105 transition-all duration-300">
                <FaArrowRight className="text-xl" />
              </button>
            </div>

          {/* Add Model Button */}
          <button className="text-lg w-86 bg-black text-white px-4 py-2 rounded-full hover:bg-blue-600 flex items-center space-x-2 transition-all duration-300 hover:scale-105 shadow-lg ">
            <FaPlus />
            <span>Add model </span>
          </button>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;