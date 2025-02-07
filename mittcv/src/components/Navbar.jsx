//Navbar-komponent som visas på alla sidor

import React, { useState } from "react";
import "../componentsstyling/Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  // Lokal state för menyöppning i mobilläge
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      {/* Titel länkar till root-path (/) */}
      <Link to="/" className="title">
        Hassecodes
      </Link>
      {/* Hamburgermenyn visas på små skärmar */}
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* Om menuOpen är true får ul-klassen \"open\" och visas */}
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
