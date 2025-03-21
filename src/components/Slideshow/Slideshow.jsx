import React, { useState } from "react";
import "./Slideshow.css";
import arrowopen from "../../assets/arrowopen.png";
import arrownext from "../../assets/arrownext.png";

function Slideshow({ pictures, title }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () =>
    setSlideIndex(slideIndex === 0 ? pictures.length - 1 : slideIndex - 1);

  const nextSlide = () =>
    setSlideIndex(slideIndex === pictures.length - 1 ? 0 : slideIndex + 1);

  if (!pictures || pictures.length === 0) return null;

  return (
    <div className="slider">
      {pictures.map((picture, index) => (
        <div key={index} className={`slider-item ${index === slideIndex ? "slider-item-show" : ""}`}>
          <img src={picture} alt={title} title={title} />
        </div>
      ))}

      {pictures.length > 1 && (
        <div className="arrow-position">
          <img
            className="arrow-open"
            src={arrowopen}
            alt="Previous slide"
            onClick={prevSlide}
          />
          <p className="counter">{slideIndex + 1} / {pictures.length}</p>
          <img
            className="arrow-next"
            src={arrownext}
            alt="Next slide"
            onClick={nextSlide}
          />
        </div>
      )}
    </div>
  );
}

export default Slideshow;

