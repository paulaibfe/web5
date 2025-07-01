// app/projects/[id]/ProjectCarousel.client.tsx
"use client";

import React from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "yet-another-react-lightbox/styles.css";

interface Props {
  media: string[];      // rutas de imágenes (.png,.jpg) o vídeo (.mp4,.mov)
  title: string;
}

export default function ProjectCarousel({ media, title }: Props) {
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      <Slider
        infinite
        dots
        slidesToShow={1}
        slidesToScroll={1}
        className="rounded-md overflow-hidden"
      >
        {media.map((src, i) => {
          const isVideo = /\.(mp4|mov)$/i.test(src);
          return (
            <div
              key={i}
              className="relative h-80 cursor-pointer bg-black flex items-center justify-center"
              onClick={() => setIndex(i)}
            >
              {isVideo ? (
                <video
                  src={src}
                  controls={false}
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={src}
                  alt={`${title} media ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          );
        })}
      </Slider>

      <Lightbox
        open={index >= 0}
        index={index >= 0 ? index : 0}
        close={() => setIndex(-1)}
        slides={media.map((src) => ({ src }))}
        carousel={{ finite: false }}
        on={{ view: ({ index: newIndex }) => setIndex(newIndex) }}
      />
    </>
  );
}
