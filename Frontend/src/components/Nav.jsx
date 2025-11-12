import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="flex space-x-6 justify-center text-white font-medium">
        <Link to="/" className="hover:text-gray-200 transition duration-200">Login</Link>
        <Link to="/home" className="hover:text-gray-200 transition duration-200">Home</Link>
        <Link to="/users" className="hover:text-gray-200 transition duration-200">Users</Link>
        <Link to="/courses" className="hover:text-gray-200 transition duration-200">Courses</Link>
      </div>
    </nav>
  );
};

export default Nav;
