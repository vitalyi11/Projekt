import React from "react";
import "./BlogCard.css";

const BlogCard = ({ section, title, description, image, tags }) => {
  return (
    <div className="blog-card">
      <h2>{section}</h2>
      <img src={image} alt={title} className="blog-image" />
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