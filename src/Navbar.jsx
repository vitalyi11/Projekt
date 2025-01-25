import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoimage from "./logo.JPG";

const Navbar = ({ onFilterTags }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const tags = ["Gry", "Horror", "Porady", "Gracze", "Artykuł", "Dyskusje"];

  const handleTagChange = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const handleApplyFilters = () => {
    if (typeof onFilterTags === "function") {
      onFilterTags(selectedTags);
    }
    setIsSearchOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoimage} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/o-nas">O nas</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
        <li className="search" onClick={() => setIsSearchOpen(!isSearchOpen)}>
          Wyszukaj
        </li>
      </ul>
      <Link to="/login">Logowanie</Link>

      {isSearchOpen && (
        <div className="search-dropdown">
          <h3>Filtruj według tagów</h3>
          <div className="tags-list">
            {tags.map((tag, index) => (
              <label key={index} className="tag-checkbox">
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleTagChange(tag)}
                />
                {tag}
              </label>
            ))}
          </div>
          <button className="apply-button" onClick={handleApplyFilters}>
            Zastosuj
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;