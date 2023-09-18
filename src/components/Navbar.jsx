import React from 'react'
import React, { useState } from "react";


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    }
  ];
  return (
    <nav>
      <div className="navbar-links-container">
        <a href="">Home</a>
      </div>
    </nav>
  )
}

export default Navbar