import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4 px-5 flex  justify-between item-center text-white">
      <h3 className="text-xl">Logo</h3>
      <ul className="flex item-center gap-8">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;