// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import img1 from "./abcde.jpg";
import img2 from "./a.jpg";
import img3 from "./abcd.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3]; // Add your images here

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(goToNext, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex]); // Depend on currentIndex to clear and reset the interval

  return (
    <div className="carousel-container">
      <div className="carousel">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="carousel-image"
        />
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
