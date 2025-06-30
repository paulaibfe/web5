// app/page.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import ProjectCard from "@/components/project-card"
import { BlogCard } from "@/components/blog-card"
import { ArrowRight, MessageSquare } from "lucide-react"
import { ChatInterface } from "@/components/chat-interface"

// Importamos los proyectos definidos en app/data/projects.ts
import { projects } from "@/app/data/projects"

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)
  const [showChat, setShowChat] = useState(false)

  // Seleccionamos únicamente los tres destacados que queremos mostrar
  const featuredIds = ["sonidos-de-origen", "formentera", "serenates"]
  const featuredProjects = featuredIds
    .map((id) => projects[id])
    .filter(Boolean)

  const latestPosts = [
    {
      id: "future-of-ai",
      title: "El futuro de la IA en el arte",
      excerpt:
        "Explorando las implicaciones éticas y avances tecnológicos en la inteligencia artificial aplicada al arte.",
      date: "2023-05-15",
      readingTime: "5 min de lectura",
    },
  ]

  const skills = [
    "Diseño de Interiores",
    "Instalaciones Interactivas",
    "Producción de Eventos",
    "Realidad Aumentada",
    "Realidad Virtual",
    "Inteligencia Artificial",
    "Diseño Sonoro",
    "Iluminación",
  ]

  const handleChatClick = () => setShowChat(true)
  const handleCloseChat = () => setShowChat(false)

  return (
    <div className="space-y-16">
      {/* Sección de presentación */}
      <section className="py-12">
        <Terminal
          text="Hola, Mundo. Soy Paula Ibor. Aún estoy en proceso de definir exactamente mi rol profesional, pero me gusta identificarme como directora creativa de nuevos formatos y diseñadora de experiencias."
          typingSpeed={40}
          className="max-w-3xl mx-auto"
          onComplete={() => setIntroComplete(true)}
        />

        {introComplete && (
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={handleChatClick}
              className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors border border-primary/30"
            >
              Conoce más sobre mí <MessageSquare size={16} />
            </button>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md transition-colors"
            >
              About <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </section>

      {/* Sección de proyectos destacados */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Proyectos Destacados</h2>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-primary hover:underline"
          >
            Ver todos <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      {/* Sección de especialidades */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Especialidades</h2>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">especialidades.sh</div>
          </div>
          <div className="terminal-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-primary">{">"}</span>
                  <span className="text-white">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección de inspiración/blog */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Inspiración</h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-primary hover:underline"
          >
            Ver todo <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </section>

      {/* Chat Interface */}
      <ChatInterface isOpen={showChat} onClose={handleCloseChat} />
    </div>
  )
}
