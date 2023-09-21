import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css"


  const Navbar = () => {
    return (
      <div className='navbar'>
        <img class="logo" src="../Assets/BackgroundImages/Logo.PNG" alt="logo"></img>
        <Link to="/">
          <h1>Kitchen Secrets</h1>
        </Link>
        <div>
          <nav>
            <ul className='nav-links'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="../Recipes">Recipes</Link></li>
              <li><Link to="/About">About</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }

export default Navbar;