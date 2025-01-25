import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage"; 
import AboutPage from "./AboutPage"; 
import Kontakt from "./Kontakt";
import Login from "./Login";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Strona główna */}
        <Route path="/o-nas" element={<AboutPage />} /> {/* Podstrona "O nas" */}
        <Route path="/kontakt" element={<Kontakt />} /> {/* Podstrona "O nas" */}
        <Route path="/login" element={<Login />} /> {}
      </Routes>
    </Router>
  );
};

export default App;