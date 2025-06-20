// app/projects/[id]/page.client.tsx
"use client"

import React from "react"
import Slider from "react-slick"
import Lightbox from "yet-another-react-lightbox"
import Image from "next/image"

interface PageClientProps {
  images: string[]
  title: string
  description: string
  // …el resto de props que necesites
}

export default function PageClient({
  images,
  title,
  description,
}: PageClientProps) {
  const [index, setIndex] = React.useState<number>(0)
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>

      <Slider infinite dots slidesToShow={1} slidesToScroll={1}>
  {images.map((src, i) => (
    <div key={i} onClick={() => setIndex(i)} className="relative h-80">
        <Image
          src={src}
          alt={`Imagen ${i + 1} de ${title}`}    // texto alternativo
          fill
         className="object-cover cursor-pointer"
      />
      </div>
  ))}
</Slider>

      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src }))}
        carousel={{ finite: false }}
        on={{
          view: ({ index }) => setIndex(index),
        }}
      />
    </>
  )
}
