"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { projects } from "@/app/data/projects"

export async function generateStaticParams() {
  return Object.values(projects).map((p) => ({ id: p.id }))
}

export default function ProjectPage({
  params,
}: {
  params: { id: string }
}) {
  const project = projects[params.id]
  if (!project) return notFound()

  const images = project.images ?? [project.image]
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <div className="space-y-8">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-primary hover:underline"
      >
        <ArrowLeft size={16} /> Volver a proyectos
      </Link>

      {images.length > 0 && (
        <Slider
          dots
          infinite
          slidesToShow={1}
          slidesToScroll={1}
          className="rounded-md overflow-hidden"
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative h-80 cursor-pointer"
              onClick={() => setLightboxIndex(idx)}
            >
              <Image
                src={src}
                alt={`${project.title} imagen ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </Slider>
      )}

      <Lightbox
        open={lightboxIndex !== null}
        index={lightboxIndex ?? 0}
        close={() => setLightboxIndex(null)}
        slides={images.map((src) => ({ src }))}
        carousel={{ finite: false }}
      />

      <div className="prose prose-invert">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
    </div>
  )
}
