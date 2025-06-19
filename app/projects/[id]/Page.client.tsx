"use client";
import React from 'react';
import Slider from 'react-slick';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function PageClient({ images, title, description }: { images: string[]; title: string; description: string }) {
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <Slider infinite dots slidesToShow={1} slidesToScroll={1}>
        {images.map((src, i) => (
          <div key={i} onClick={() => setIndex(i)}>
            <img src={src} alt="" />
          </div>
        ))}
      </Slider>
      <Lightbox
        open={index >= 0}
        slides={images.map((src) => ({ src }))}
        index={index}
        close={() => setIndex(-1)}
        on={{ view: ({ index }) => setIndex(index) }}
      />
    </>
  );
}
