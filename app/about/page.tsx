"use client"

import { useState } from "react"
import { Terminal } from "@/components/terminal"
import { Linkedin, Mail, Instagram } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function AboutPage() {
  const [introComplete, setIntroComplete] = useState(false)
  const [bioComplete, setBioComplete] = useState(false)

  const workExperience = [
    {
      title: "AMB ARQUITECTURA",
      sections: [
        {
          subtitle: "Colaboración en proyectos residenciales",
          tasks: [
            "Desarrollo de propuestas de distribución",
            "Diseño de interiores",
            "Elaboración de planos técnicos",
            "Modelado 3D",
          ],
        },
        {
          subtitle: "Tareas técnicas y normativas",
          tasks: [
            "Redacción de Certificados de Eficiencia Energética",
            "Elaboración de Informes de Evaluación de Edificios (IEE)",
            "Aplicación de normativa vigente",
            "Análisis del estado constructivo de edificaciones existentes",
          ],
        },
      ],
    },
  ]

  const education = [
    {
      title: "Curso de Alto Rendimiento Creativo — Creación de Eventos y Experiencias Inmersivas",
      institution: "Barcelona School of Creativity",
      period: "2024-2025",
      description:
        "Programa intensivo enfocado en la generación de conceptos, diseño de experiencias y dirección creativa de eventos. Me permitió desarrollar una mirada transversal para combinar storytelling, espacio y emoción en proyectos culturales y de marca.",
    },
    {
      title: "Máster Oficial en Diseño Interactivo",
      institution: "Escola d'Art i Superior de Disseny de València (EASD)",
      period: "2023-2024",
      description:
        "Formación especializada en instalaciones interactivas, escenografías digitales, diseño de dispositivos físicos y visuales generativos. Aprendí a trabajar con herramientas como Arduino, TouchDesigner y lenguajes de programación creativa para generar experiencias tecnológicas centradas en el usuario.",
    },
    {
      title: "Grado en Diseño de Interiores",
      institution: "Barreira Arte + Diseño, València",
      period: "2018 - 2023",
      description:
        "Carrera de 4 años centrada en el diseño de espacios habitables, comerciales y efímeros. Me formé en representación técnica, conceptualización espacial y gestión de proyectos. Durante este periodo realicé una estancia Erasmus en Hanze UAS (Groningen, Países Bajos), donde descubrí el diseño interactivo y enfoques alternativos a la práctica del diseño.",
    },
  ]

  const skills = [
    {
      category: "Diseño3D_Visualizacion",
      items: [
        "Modelado y renderizado de espacios y objetos.",
        "Herramientas: SketchUp, 3ds Max, Twinmotion.",
        "Enfoque: visualización realista de atmósferas, materiales y volumetrías.",
      ],
    },
    {
      category: "Planimetria_Representación",
      items: [
        "Dominio de AutoCAD para planos, secciones y detalles técnicos.",
        "Documentación gráfica completa de proyectos arquitectónicos e interiores.",
      ],
    },
    {
      category: "Diseño_Interactivo",
      items: [
        "Experiencia en TouchDesigner, Arduino y Python básico.",
        "Proyectos interactivos, visuales en tiempo real y prototipos tecnológicos conectados al espacio o estímulos sensoriales.",
      ],
    },
    {
      category: "Visuales_Live_Media",
      items: [
        "Resolume Arena para mezcla de contenido visual en tiempo real.",
        "Aplicación en eventos, instalaciones y entornos escénicos.",
      ],
    },
    {
      category: "Edición",
      items: [
        "Manejo de Adobe Suite (Photoshop, Illustrator, InDesign, After Effects) y Canva.",
        "Desarrollo de identidad gráfica, presentaciones, contenido audiovisual y editorial.",
      ],
    },
  ]

  return (
    <div className="space-y-16">
      <section>
        <Terminal
          text="Inicializando perfil... Acceso concedido. Cargando datos..."
          typingSpeed={30}
          className="max-w-3xl mx-auto"
          onComplete={() => setIntroComplete(true)}
        />

        {introComplete && (
          <Terminal
            text="Hola, NeoNoia es mi proyecto personal y mi forma de jugar con lo que me remueve por dentro. Un espacio vivo que evoluciona conmigo, donde mezclo lo que me inspira, me obsesiona o me hace dudar."
            typingSpeed={20}
            className="max-w-3xl mx-auto mt-4"
            showPrompt={false}
            onComplete={() => setBioComplete(true)}
          />
        )}
      </section>

      {bioComplete && (
        <>
          <section>
            <h2 className="text-2xl font-bold mb-6">Experiencia Laboral</h2>
            <div className="space-y-6">
              {workExperience.map((exp, index) => (
                <div key={index} className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-button terminal-button-red"></div>
                    <div className="terminal-button terminal-button-yellow"></div>
                    <div className="terminal-button terminal-button-green"></div>
                    <div className="terminal-title">{exp.title}.sh</div>
                  </div>
                  <div className="terminal-content">
                    {exp.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="mb-4">
                        <p className="mb-2">
                          <span className="text-primary">{">"}</span> {section.subtitle}
                        </p>
                        <ul className="space-y-1 ml-6">
                          {section.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-start gap-2">
                              <span className="text-primary">-</span>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Educación</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-button terminal-button-red"></div>
                    <div className="terminal-button terminal-button-yellow"></div>
                    <div className="terminal-button terminal-button-green"></div>
                    <div className="terminal-title">educacion_{index + 1}.sh</div>
                  </div>
                  <div className="terminal-content">
                    <p className="mb-1">
                      <span className="text-primary">{">"}</span> {edu.title}
                    </p>
                    <div className="mb-4 ml-6">
                      <p className="text-sm text-muted-foreground">
                        {edu.institution} | {edu.period}
                      </p>
                      <p className="mt-2">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Habilidades</h2>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="terminal-title">skills.sh</div>
              </div>
              <div className="terminal-content">
                <p className="mb-4">
                  <span className="text-primary">{">"}</span> cat /habilidades
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-primary font-bold">{skillGroup.category}</h3>
                      <ul className="space-y-1">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-start gap-2">
                            <span className="text-primary">-</span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Contacto</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-button terminal-button-red"></div>
                  <div className="terminal-button terminal-button-yellow"></div>
                  <div className="terminal-button terminal-button-green"></div>
                  <div className="terminal-title">contact_form.sh</div>
                </div>
                <div className="terminal-content">
                  <p className="mb-4">
                    <span className="text-primary">{">"}</span> ./send_message.sh
                  </p>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm mb-1">
                        <span className="text-primary">name:</span>
                      </label>
                      <Input id="name" placeholder="Enter your name" className="bg-background border-border" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm mb-1">
                        <span className="text-primary">email:</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm mb-1">
                        <span className="text-primary">message:</span>
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Enter your message"
                        rows={4}
                        className="bg-background border-border"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>

              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-button terminal-button-red"></div>
                  <div className="terminal-button terminal-button-yellow"></div>
                  <div className="terminal-button terminal-button-green"></div>
                  <div className="terminal-title">network_connections.sh</div>
                </div>
                <div className="terminal-content">
                  <p className="mb-4">
                    <span className="text-primary">{">"}</span> cat /contacto.txt
                  </p>
                  <div className="mb-4">
                    <p className="text-primary font-bold">NOMBRE:</p>
                    <p className="mb-2">PAULA IBOR FERRER</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-1 text-primary">mail0:</p>
                      <Link
                        href="mailto:paulaibfe@gmail.com"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <Mail size={16} />
                        paulaibfe@gmail.com
                      </Link>
                    </div>
                    <div>
                      <p className="mb-1 text-primary">linkedin0:</p>
                      <Link
                        href="http://linkedin.com/in/paula-ibor-4278761ba"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                        target="_blank"
                      >
                        <Linkedin size={16} />
                        linkedin.com/in/paula-ibor-4278761ba
                      </Link>
                    </div>
                    <div>
                      <p className="mb-1 text-primary">instagram0:</p>
                      <Link
                        href="https://instagram.com/paulaibfe"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                        target="_blank"
                      >
                        <Instagram size={16} />
                        @paulaibfe
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
