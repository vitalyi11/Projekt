import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({ section, title, description, image, tags, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div className="blog-card" onClick={handleClick}>
      <h2>{section}</h2>
      {image && <img src={image} alt={title} className="blog-image" />}
      <div className="blog-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
