import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import NavCard from "./NavCard";
import logoimage from './logo.JPG';

const Navbar = () => {
  return (
    
    <nav className="navbar">
      <div>
          <NavCard
            image={logoimage}
            title="NavCard"
          />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Blog</Link> {/* Strona główna */}
        </li>
        <li>
          <Link to="/o-nas">O nas</Link> {/* Podstrona "O nas" */}
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link> {/* Opcjonalny link */}
        </li>
      </ul>
      <Link to="/login">Logowanie</Link> {}
    </nav>
  );
};

export default Navbar;