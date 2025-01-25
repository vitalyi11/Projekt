import React from "react";
import BlogCard from "./BlogCard";
import "./HomePage.css";
import silentHillImage from "./silent-hill.jpg";
import gamerZoneImage from "./gamer-zone.jpg";
import graphicsImage from "./graphics.jpg";

const HomePage = ({ selectedTags }) => {
  const allArticles = [
    {
      section: "",
      title: "Recenzja gry Silent Hill 2",
      description: "Na dzień dobry oddychać można pełną immersją Silent Hill 2...",
      image: silentHillImage,
      tags: ["Gry", "Horror"],
      link: "/article/silent-hill-2"
    },
    {
      section: "",
      title: "10 idealnych prezentów dla gracza!",
      description: "W świecie graczy pomysły na prezent to wyzwanie...",
      image: gamerZoneImage,
      tags: ["Porady", "Gracze"]
    },
    {
      section: "",
      title: "Przyszłość kart graficznych",
      description: "Czy to koniec ery kart graficznych z pamięcią 8 GB?",
      image: graphicsImage,
      tags: ["Artykuł", "Dyskusje"]
    }
  ];

  const filteredArticles = selectedTags.length > 0
    ? allArticles.filter(article =>
        article.tags.some(tag => selectedTags.includes(tag))
      )
    : allArticles;

  return (
    <div className="home-page">
      <div className="blog-cards">
        {filteredArticles.map((article, index) => (
          <BlogCard
            key={index}
            section={article.section}
            title={article.title}
            description={article.description}
            image={article.image}
            tags={article.tags}
            link={article.link}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;