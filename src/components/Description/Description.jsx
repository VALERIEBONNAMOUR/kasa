import React from 'react';
import './Description.css';


function Description({ title, location, tags, host, picture, rating }) {
  return (
    <div className="description">
      <div>
        <h1 className='title-description'>{title}</h1>
        <p className='text-description'>{location}</p>
        <div className="tags-description">
          {tags && tags.length > 0
            ? tags.map((tag, index) => <button key={index} className="tag">{tag}</button>)
            : <button>Aucun tag</button>}
        </div>
      </div>

      <div className="host">
        <div className='host-about'>
        <div>
          {host}
        </div>
        <img className='hostImg' src={picture} alt="Host" />
        </div>
       
        <div className="rating">{rating}</div>
      </div>

    </div>
  );
}

export default Description;





