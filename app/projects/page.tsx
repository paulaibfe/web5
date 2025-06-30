"use client"

import { useState } from "react"
import ProjectCard from "@/components/project-card"
import { projects } from "@/app/data/projects"

const categories = [
  { id: "all", name: "Todos" },
  { id: "eventos", name: "Eventos" },
  { id: "interactivo", name: "Diseño Interactivo" },
  { id: "interiores", name: "Diseño de Interiores" },
  { id: "ia-ra-vr", name: "IA/RA/VR" },
]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const filtered = activeFilter === "all"
    ? Object.values(projects)
    : Object.values(projects).filter(p => p.category === activeFilter)

  return (
    <main className="p-12 space-y-8">
      <div className="flex flex-wrap gap-4">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`
              px-4 py-2 rounded-md text-sm border transition
              ${activeFilter === cat.id
                ? "bg-white text-black border-white"
                : "bg-transparent text-gray-300 border-gray-500 hover:border-white hover:text-white"
              }
            `}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </main>
  )
}
