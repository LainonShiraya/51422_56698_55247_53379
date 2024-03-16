import React, { useEffect, useState, useRef } from 'react';
import './App.css';

const SLIDE_WIDTH = 200; // szerokość slajdu plus margines
const SLIDE_MARGIN = 10; // margines po prawej stronie slajdu

const Slider: React.FC = () => {
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const [slides, setSlides] = useState<string[]>([
    '../src/assets/images/slider/image1.jpg',
    '../src/assets/images/slider/image2.jpg',
    '../src/assets/images/slider/image3.jpg',
    '../src/assets/images/slider/image2.jpg',
    '../src/assets/images/slider/image2.jpg',
    '../src/assets/images/slider/image1.jpg',
    '../src/assets/images/slider/image2.jpg',
    '../src/assets/images/slider/image3.jpg',
    '../src/assets/images/slider/image2.jpg',
    '../src/assets/images/slider/image2.jpg',
    '../src/assets/images/slider/image1.jpg',
  ]);

  const moveToNextSlide = () => {
    if (slideContainerRef.current) {
      const firstChild = slideContainerRef.current.children[0];
      slideContainerRef.current.appendChild(firstChild);
    }
  };

  const moveToPrevSlide = () => {
    if (slideContainerRef.current) {
      const lastChild = slideContainerRef.current.children[slideContainerRef.current.children.length - 1];
      slideContainerRef.current.insertBefore(lastChild, slideContainerRef.current.firstChild);
    }
  };

  useEffect(() => {
    const interval = setInterval(moveToNextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div ref={slideContainerRef} className="slide-container">
        {slides.map((src, index) => (
          <div className="slide" key={index} style={{ width: SLIDE_WIDTH, marginRight: SLIDE_MARGIN }}>
            <img src={src} alt={`Slide ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
      <div className="slider-control" onClick={moveToPrevSlide}>&#10094;</div>
      <div className="slider-control" onClick={moveToNextSlide}>&#10095;</div>
    </div>
  );
};

export default Slider;
