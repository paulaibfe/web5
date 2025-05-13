"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const projects = [
    // Eventos
    {
      id: "fallen-equinox",
      title: "Fallen Equinox",
      description: "Experiencia inmersiva que combina arte digital y sonido para crear un ambiente único.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Sonido", "Instalación", "Arte Digital"],
      category: "eventos",
    },
    {
      id: "sonidos-de-origen",
      title: "Sonidos de Origen",
      description: "Exploración sonora que investiga las raíces culturales a través de paisajes auditivos.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Audio", "Cultura", "Instalación"],
      category: "eventos",
    },
    {
      id: "rastro-vol-2",
      title: "Rastro Vol.2",
      description: "Festival urbano que celebra la cultura local a través de intervenciones artísticas efímeras.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Festival", "Arte Urbano", "Comunidad"],
      category: "eventos",
    },

    // Interactivo
    {
      id: "ecos-de-la-tierra",
      title: "Ecos de la Tierra",
      description: "Instalación interactiva que explora la conexión entre la naturaleza y la tecnología.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Sensores", "Ecología", "Sonido"],
      category: "interactivo",
    },
    {
      id: "falla-tio-pep",
      title: "Falla Tio Pep",
      description: "Instalación interactiva para las Fallas de Valencia que combina tradición y tecnología.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Mapping", "Tradición", "Interacción"],
      category: "interactivo",
    },
    {
      id: "dialogos-2024",
      title: "Diálogos 2024",
      description:
        "Serie de instalaciones interactivas que fomentan el diálogo entre diferentes culturas y perspectivas.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Interacción Social", "Multimedia", "Participativo"],
      category: "interactivo",
    },
    {
      id: "serenates-2024",
      title: "Serenates 2024",
      description:
        "Experiencia sonora interactiva que reinterpreta la tradición de las serenatas en un contexto contemporáneo.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Audio", "Tradición", "Participación"],
      category: "interactivo",
    },
    {
      id: "juego",
      title: "Juego",
      description: "Experiencia lúdica interactiva que difumina los límites entre el juego físico y digital.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Gamificación", "Diseño Interactivo", "Experiencia"],
      category: "interactivo",
    },

    // Interiores
    {
      id: "deep-end-skatepark",
      title: "Deep End Skatepark",
      description: "Diseño de interiores para un skatepark urbano que fusiona funcionalidad y estética contemporánea.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Diseño Urbano", "Arquitectura", "Deporte"],
      category: "interiores",
    },
    {
      id: "formentera",
      title: "Formentera",
      description:
        "Diseño de interiores para una residencia en Formentera que integra la esencia mediterránea con un enfoque contemporáneo.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Residencial", "Mediterráneo", "Sostenibilidad"],
      category: "interiores",
    },
    {
      id: "dona-carmen",
      title: "Doña Carmen",
      description: "Rediseño de un espacio gastronómico que combina tradición culinaria y diseño de vanguardia.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Hostelería", "Iluminación", "Experiencia"],
      category: "interiores",
    },

    // IA/RA/VR
    {
      id: "bailar-en-el-desierto",
      title: "Bailar en el desierto",
      description:
        "Experiencia de realidad virtual que transporta a los usuarios a un desierto donde el movimiento se traduce en expresiones visuales y sonoras.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["VR", "Danza", "Arte Digital"],
      category: "ia-ra-vr",
    },
    {
      id: "the-next-serve",
      title: "The Next Serve",
      description:
        "Aplicación de realidad aumentada que transforma el entrenamiento deportivo a través de análisis de movimiento en tiempo real.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["RA", "Deporte", "Análisis de Movimiento"],
      category: "ia-ra-vr",
    },
    {
      id: "onirix",
      title: "Onirix",
      description:
        "Experiencia inmersiva que utiliza inteligencia artificial para crear paisajes oníricos personalizados basados en las emociones del usuario.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["IA", "Emociones", "Arte Generativo"],
      category: "ia-ra-vr",
    },
  ]

  const categories = [
    { id: "all", name: "Todos los Proyectos" },
    { id: "eventos", name: "Eventos" },
    { id: "interactivo", name: "Interactivo" },
    { id: "interiores", name: "Interiores" },
    { id: "ia-ra-vr", name: "IA/RA/VR" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="space-y-8">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">proyectos.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-4">
            <span className="text-primary">{">"}</span> Mostrando directorio de proyectos. Selecciona una categoría para
            filtrar resultados.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              activeFilter === category.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  )
}
