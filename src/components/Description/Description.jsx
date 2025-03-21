import React from 'react';
import './Description.css';


function Description({ title, location, tags, host, picture, rating }) {
  return (
    <div className="description">
      <h1 className='title-description'>{title}</h1>
      <p className='text-description'>{location}</p>
      <div className="tags-description">
        {tags && tags.length > 0
          ? tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)
          : <span>Aucun tag</span>}
      </div>
      <div className="host">
        <img src={picture} alt="Host" />
        {host}
      </div>
      <div className="rating">{rating}</div>
    </div>
  );
}

export default Description;