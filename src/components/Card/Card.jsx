import React from 'react';
import './Card.css';


function Card({ cover, title }) {
    return (
      <div className="card card-wrapper">
        <img
          src={cover}
          alt={title}
          className="card-cover"
        ></img>
        <div className="card-shadow"></div>
        <span>{title}</span>
      </div>
    )
  }
  
  export default Card