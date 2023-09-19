import React from 'react';
import { Link } from 'react-router-dom';


  const Navbar = () => {
    return (
      <div className="navbar">
        <Link to="/">
          <h1>የኛ ገበያ-Our Market</h1>
        </Link>
        <nav>
          <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
          </div>
        </nav>
      </div>
    )
  }

export default Navbar;