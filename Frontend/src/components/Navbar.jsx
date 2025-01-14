import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-blue-400">
            MyApp
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
            <Link to="/catalog" className="hover:text-blue-400 transition">
              Catalog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
