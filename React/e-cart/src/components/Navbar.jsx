import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 ">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <Link to="/">E-Shop</Link>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? '✖' : '☰'}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/cart" className="text-gray-700 hover:text-blue-600">Cart</Link>
            <Link to="/payment" className="text-gray-700 hover:text-blue-600">Payment</Link>
            <Link to="/favourite" className="text-gray-700 hover:text-blue-600">Favorite</Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-3 pb-4 text-sm font-medium">
            <Link to="/" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to="/cart" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Cart</Link>
            <Link to="/payment" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Payment</Link>
            <Link to="/favourite" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Favorite</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
