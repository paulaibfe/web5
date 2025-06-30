"use client";

import React from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  id: string;
  category: "eventos" | "interactivo" | "interiores" | "ia";
  title: string;
  description: string;
  longDescription?: string;
  linkLabel?: string;
  linkUrl?: string;
  links?: { label: string; url: string }[];
  roles?: string[];
  tools?: string[];
  technologies: string[];
  image: string;
  images?: string[];
  videos?: string[];
}

export default function PageClient({
  title,
  description,
  longDescription,
  linkLabel,
  linkUrl,
  links,
  roles,
  tools,
  technologies,
  images = [],
  videos = [],
}: Props) {
  // 1) Mezclamos imágenes y vídeos
  const media = [...images, ...videos];
  // 2) Estado para el lightbox (-1 = cerrado)
  const [index, setIndex] = React.useState<number>(-1);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">{title}</h1>

      <p className="prose">{description}</p>
      {longDescription && (
        <div className="prose prose-invert">{longDescription}</div>
      )}

      {linkUrl && (
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          {linkLabel || "Ver más"}
        </a>
      )}
      {links &&
        links.map((l) => (
          <div key={l.url}>
            <a
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              {l.label}
            </a>
          </div>
        ))}

      {/* Slider único para imágenes y vídeos */}
      <Slider
        infinite
        dots
        slidesToShow={1}
        slidesToScroll={1}
        className="rounded-md overflow-hidden"
      >
        {media.map((src, i) => {
          const isVideo = /\.(mp4|webm|mov)$/i.test(src);
          return (
            <div
              key={i}
              className="relative h-80 cursor-pointer"
              onClick={() => setIndex(i)}
            >
              {isVideo ? (
                <video
                  src={src}
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={src}
                  alt={`${title} imagen ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          );
        })}
      </Slider>

      {/* Lightbox para ambos */}
      <Lightbox
        open={index !== -1}
        index={index >= 0 ? index : 0}
        close={() => setIndex(-1)}
        slides={media.map((src) => ({ src }))}
        carousel={{ finite: false }}
        on={{ view: ({ index: newIndex }) => setIndex(newIndex) }}
      />

      {/* Datos adicionales */}
      {roles && (
        <p>
          <strong>Roles:</strong> {roles.join(", ")}
        </p>
      )}
      {tools && (
        <p>
          <strong>Herramientas:</strong> {tools.join(", ")}
        </p>
      )}
      {technologies.length > 0 && (
        <p>
          <strong>Tecnologías:</strong> {technologies.join(", ")}
        </p>
      )}
    </div>
  );
}
