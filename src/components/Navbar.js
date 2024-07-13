import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="cursor-pointer text-xl font-bold">Plantation</Link>

        <nav>
          <ul className="flex space-x-4">
            <li className="cursor-pointer">
            <Link to="/products" className="cursor-pointer">Products</Link>
            </li>
            <li className="cursor-pointer">
            <Link to="/cart" className="cursor-pointer">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
