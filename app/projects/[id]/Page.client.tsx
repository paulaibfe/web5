// app/projects/[id]/Page.client.tsx
"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "yet-another-react-lightbox/styles.css";

interface PageClientProps {
  images: string[];
  title: string;
  description: string;
}

export default function PageClient({
  images,
  title,
  description,
}: PageClientProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">{title}</h1>
      <Slider infinite dots slidesToShow={1} slidesToScroll={1}>
        {images.map((src, i) => (
          <div key={i} onClick={() => setOpenIndex(i)}>
            <img src={src} alt={`${title} imagen ${i + 1}`} className="w-full h-80 object-cover" />
          </div>
        ))}
      </Slider>

      <Lightbox
        open={openIndex !== null}
        slides={images.map((src) => ({ src }))}
        index={openIndex || 0}
        close={() => setOpenIndex(null)}
        carousel={{ finite: false }}
        on={{ view: ({ index }) => setOpenIndex(index) }}
      />

      <p>{description}</p>
    </div>
  );
}
