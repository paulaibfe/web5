import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
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

  return (
    <div className="space-y-8">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-primary hover:underline"
      >
        <ArrowLeft size={16} /> Volver a proyectos
      </Link>

      <div className="relative h-80 rounded overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="prose prose-invert">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
    </div>
  )
}
