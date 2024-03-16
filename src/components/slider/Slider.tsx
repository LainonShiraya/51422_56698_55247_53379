import React, { useEffect, useState, useRef } from 'react';
import './Slider.css';
import OfferCard from '../../pages/HomePage/WeeklyPicked/OfferCard/OfferCard';
import { Container } from '@mui/material';
import image from '../../assets/WeeklyPicked/Senna.jpeg';
const Slider: React.FC = () => {
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const [slides, setSlides] = useState<string[]>([image, image, image]);

  const moveToNextSlide = () => {
    if (slideContainerRef.current) {
      const firstChild = slideContainerRef.current.children[0];
      slideContainerRef.current.appendChild(firstChild);
    }
  };

  const moveToPrevSlide = () => {
    if (slideContainerRef.current) {
      const lastChild =
        slideContainerRef.current.children[
          slideContainerRef.current.children.length - 1
        ];
      slideContainerRef.current.insertBefore(
        lastChild,
        slideContainerRef.current.firstChild
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(moveToNextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container
      className='slider'
      maxWidth='xl'
      sx={{ overflow: 'hidden' }}
    >
      <Container
        ref={slideContainerRef}
        className='slide-container'
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
        maxWidth='xl'
      >
        {slides.map((src, index) => (
          <OfferCard
            key={index}
            title={'test'}
            description={'test'}
            image={src}
          />
        ))}
      </Container>
      <div
        className='slider-control'
        onClick={moveToPrevSlide}
      >
        &#10094;
      </div>
      <div
        className='slider-control'
        onClick={moveToNextSlide}
      >
        &#10095;
      </div>
    </Container>
  );
};

export default Slider;
