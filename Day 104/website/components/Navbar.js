import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          YourLogo
        </div>
        <ul className="hidden md:flex space-x-6">
          <li className="text-white hover:text-gray-400">
            <Link href="/">Home</Link>
          </li>
          <li className="text-white hover:text-gray-400">
            <Link href="/about">About</Link>
          </li>
          
          <li className="text-white hover:text-gray-400">
            <Link href="/contect">Contact</Link>
          </li>
        </ul>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* Add a hamburger icon for mobile view */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
