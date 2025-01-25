import React from "react";
import BlogCard from "./BlogCard";
import "./HomePage.css";
import silentHillImage from './silent-hill.jpg';
import gamerZoneImage from './gamer-zone.jpg';
import graphicsImage from './graphics.jpg';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="blog-title">
    
      </h1>
      <div className="blog-cards">
        <BlogCard
          section=""
          title="Recenzja gry Silent Hill 2"
          description="Na dzień dobry oddychać można pełną immersją Silent Hill 2..."
          image={silentHillImage}
          tags={["Gry", "Horror"]}
        />
        <BlogCard
          section=""
          title="10 idealnych prezentów dla gracza!"
          description="W świecie graczy pomysły na prezent to wyzwanie..."
          image={gamerZoneImage}
          tags={["Porady", "Gracze"]}
        />
        <BlogCard
          section=""
          title="Przyszłość kart graficznych"
          description="Czy to koniec ery kart graficznych z pamięcią 8 GB?"
          image={graphicsImage}
          tags={["Artykuł", "Dyskusje"]}
        />
      </div>
    </div>
  );
};

export default HomePage;