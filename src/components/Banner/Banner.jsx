import React from "react";
import "./Banner.css"; 


const Banner = ({ title, image, className }) => {
    return (
      <div className={`banner ${className}`}>
          <img src={image} alt={title} className="banner-image" />
          {title && <h2 className="banner-title">{title}</h2>}
            
      </div>
    );
  };
  
  export default Banner;