"use client"

import { projects } from "@/app/data/projects"
import ProjectCard from "@/app/components/project-card"  // ← ruta corregida

export default function ProjectsPage() {
  const featuredIDs = ["fallen-equinox", "sonidos-de-origen", "ecos-de-la-tierra"]
  const featuredProjects = featuredIDs
    .map((id) => projects[id])
    .filter(Boolean)

  return (
    <main className="space-y-8 py-12 bg-black text-white">
      <h2 className="text-3xl font-mono">Proyectos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map(({ id, title, description, image, technologies }) => (
          <ProjectCard
            key={id}
            id={id}
            title={title}
            description={description}
            image={image}
            technologies={technologies}
          />
        ))}
      </div>
    </main>
  )
}
