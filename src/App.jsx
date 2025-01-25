import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Kontakt from "./Kontakt";
import Login from "./Login";
import ArticlePage from "./ArticlePage";
import "./App.css";

const App = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleFilterTags = (tags) => {
    setSelectedTags(tags);
  };

  return (
    <Router>
      <div className="app">
        <Navbar onFilterTags={handleFilterTags} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage selectedTags={selectedTags} />} />
            <Route path="/o-nas" element={<AboutPage />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/login" element={<Login />} />
            <Route path="/article/silent-hill-2" element={<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;