import React from "react";
import './NavCard.css';

const NavCard = ({ image, title }) => {
  return (
    <div>
      <img src={image} alt={title}/>
    </div>
  );
};

export default NavCard;