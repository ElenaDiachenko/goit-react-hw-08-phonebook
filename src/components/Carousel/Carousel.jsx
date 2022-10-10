import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import {
  StyledCarousel,
  CarouselWrap,
  Card,
  Image,
  Overlay,
  Title,
  ArrowLeft,
  ArrowRight,
} from './Carousel.styled';

export const Carousel = ({ images, title }) => {
  const [current, setCurrent] = useState(0);
  const slideInterval = useRef();

  const prev = () => {
    startSlideTimer();
    const index = current > 0 ? current - 1 : images.length - 1;
    setCurrent(index);
  };

  const next = () => {
    startSlideTimer();
    const index = current < images.length - 1 ? current + 1 : 0;
    setCurrent(index);
  };

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrent(current => (current < images.length - 1 ? current + 1 : 0));
    }, 3000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer();
  });

  return (
    <StyledCarousel>
      <CarouselWrap style={{ transform: `translateX(${-current * 100}%)` }}>
        {images.map((image, idx) => {
          return (
            <Card
              key={idx}
              onMouseEnter={stopSlideTimer}
              onMouseOut={startSlideTimer}
            >
              <Image src={image.webformatURL} alt={image.tags} />
            </Card>
          );
        })}
      </CarouselWrap>
      <div>
        <ArrowLeft onClick={prev}>Prev</ArrowLeft>
        <ArrowRight onClick={next}>Next</ArrowRight>
      </div>
      <Overlay>
        <Title>{title}</Title>
      </Overlay>
    </StyledCarousel>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};
