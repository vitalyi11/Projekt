import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import "./HomePage.css";

const HomePage = ({ selectedTags }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/articles.json");
        if (response.ok) {
          const data = await response.json();
          setArticles(data);
        } else {
          console.error("Błąd podczas ładowania danych.");
        }
      } catch (error) {
        console.error("Błąd sieci: ", error);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles =
    selectedTags.length > 0
      ? articles.filter(article =>
          article.tags.some(tag => selectedTags.includes(tag))
        )
      : articles;

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
