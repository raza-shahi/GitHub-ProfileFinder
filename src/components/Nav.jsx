import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const baseLinkStyles = "hover:text-gray-300 transition-colors duration-200";
  const activeStyles = "text-blue-400 font-medium border-b-2 border-blue-400";

  return (
    <nav className="p-4 flex flex-col md:flex-row justify-between items-center bg-gray-800 text-white container mx-auto">
      {/* Logo and Mobile Menu Button */}
      <div className="w-full md:w-auto flex justify-between items-center">
        <div className="logo flex items-center space-x-4">
          <img
            src="/github-mark-white.svg"
            alt="github-logo"
            className="w-8 h-8"
          />
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `${baseLinkStyles} ${isActive ? activeStyles : ''} text-2xl font-bold`
            }
          >
            GitHub Name Finder
          </NavLink>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links - Hidden on mobile unless menu is open */}
      <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0`}>
        <li>
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => 
              `${baseLinkStyles} ${isActive ? activeStyles : ''} pb-1`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/results" 
            className={({ isActive }) => 
              `${baseLinkStyles} ${isActive ? activeStyles : ''} pb-1`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Search Results
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/profile" 
            className={({ isActive }) => 
              `${baseLinkStyles} ${isActive ? activeStyles : ''} pb-1`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;