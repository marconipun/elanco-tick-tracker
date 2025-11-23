import React from "react";


//Navigation handling the navigation between different sections
const Navbar = ({ onNavClick }) => {
  return (
    <nav className="navbar">
      
          <button onClick={() => onNavClick("map")}>Map</button>
          <button onClick={() => onNavClick("education")}>Species Guide</button>
          <button onClick={() => onNavClick("prevention")}>Prevention Tips</button>
      
    </nav>
  );
};

export default Navbar;
