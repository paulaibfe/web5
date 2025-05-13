"use client"

import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()

  // This would typically come from an API or database
  const projects = {
    // Eventos
    "fallen-equinox": {
      title: "Fallen Equinox",
      description: "Experiencia inmersiva que combina arte digital y sonido para crear un ambiente único.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Sonido", "Instalación", "Arte Digital"],
      category: "eventos",
      github: "https://github.com/example/fallen-equinox",
      demo: "https://fallen-equinox-demo.example.com",
      longDescription:
        "Fallen Equinox es una experiencia nocturna diseñada para el lanzamiento de colección de Named Collective, donde la moda se convierte en ritual y el entorno en símbolo. Enmarcado en un espacio natural, el evento fusiona performance, cena ceremonial, shooting y activaciones sensoriales como tarot, tatuajes o confesionario.\n\nCon una estética que combina lo gótico moderno, la melancolía urbana y el imaginario del renacimiento, el encuentro celebra la identidad fluida, la comunidad y la creación de contenido como forma de relato.",
    },
    "sonidos-de-origen": {
      title: "Sonidos de Origen",
      description: "Exploración sonora que investiga las raíces culturales a través de paisajes auditivos.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Audio", "Cultura", "Instalación"],
      category: "eventos",
      github: "https://github.com/example/sonidos-origen",
      demo: "https://sonidos-origen.example.com",
      longDescription:
        "Sonidos de Origen es un festival que nace para transformar la escena musical española conectando artistas emergentes con figuras consagradas en un formato de curaduría invertida. Celebrado en su primera edición en el Real Jardín Botánico Alfonso XIII (Madrid, mayo 2025), propone un encuentro intergeneracional y sonoro donde la tradición no se revive: se reinventa.\n\nA través de fusiones inéditas entre músicas de raíz y lenguajes contemporáneos —como la electrónica, el pop o el rap— el festival se posiciona como una plataforma viva para una nueva generación cultural. Su propuesta se aleja del modelo de festival jerárquico para poner el poder creativo en manos de los propios artistas.",
    },
    "rastro-vol-2": {
      title: "Rastro Vol.2",
      description: "Festival urbano que celebra la cultura local a través de intervenciones artísticas efímeras.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Festival", "Arte Urbano", "Comunidad"],
      category: "eventos",
      github: "https://github.com/example/rastro-vol-2",
      demo: "https://rastro-vol-2.example.com",
      longDescription:
        "Rastro Vol.2 es un evento diseñado para poner en valor los accesorios dentro del panorama de la moda urbana. Concebido como un espacio de encuentro entre marcas independientes, público joven y cultura local, el festival convierte el centro de Madrid en un mercado especializado, abierto y accesible.\n\nDurante dos días, el público puede recorrer una selección de stands, asistir a talleres de customización, participar en dinámicas performativas como el regateo y disfrutar de gastronomía y música en directo. Todo ello en un entorno cuidado, donde la identidad visual y espacial están pensadas para reforzar la experiencia de marca y fomentar la interacción.\n\nEl proyecto se construye desde una mirada contemporánea, pero con referencias claras a la tradición madrileña. No solo celebra el objeto —la gorra, el pañuelo, el pendiente— sino todo lo que representa: expresión personal, pertenencia y estilo.",
    },

    // Interactivo
    "ecos-de-la-tierra": {
      title: "Ecos de la Tierra",
      description: "Instalación interactiva que explora la conexión entre la naturaleza y la tecnología.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Sensores", "Ecología", "Sonido"],
      category: "interactivo",
      github: "https://github.com/example/ecos-tierra",
      demo: "https://ecos-tierra.example.com",
      longDescription:
        "Esta idea explora la evolución del ecosistema desde un mundo dominado por la naturaleza hasta uno transformado por la presencia humana, y finalmente, el retorno de la naturaleza tras la hipotética desaparición de la humanidad.\n\nEste ciclo de vida ilustra la fragilidad y la resiliencia de los ecosistemas. Subraya la responsabilidad humana en el cuidado del medio ambiente y cómo nuestras acciones pueden tener consecuencias duraderas.\n\nTambién destaca la capacidad de la naturaleza para recuperarse y regenerarse, ofreciendo una reflexión sobre la sostenibilidad y la coexistencia armoniosa.",
    },
    "falla-tio-pep": {
      title: "Falla Tio Pep",
      description: "Instalación interactiva para las Fallas de Valencia que combina tradición y tecnología.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Mapping", "Tradición", "Interacción"],
      category: "interactivo",
      github: "https://github.com/example/falla-tio-pep",
      demo: "https://falla-tio-pep.example.com",
      longDescription:
        'Diseñamos una secuencia de luces inspirada en los poemas del poeta valenciano Vicent Andrés Estellés, que se proyectaban sobre las figuras de la Falla, utilizando PAR LEDs conectados con DMX y protocolo Artnet, en sincronía con los poemas del poeta. Con la ayuda de TouchDesigner, logramos crear un sistema autosuficiente que encendía y apagaba automáticamente la instalación, garantizando su funcionamiento sin problemas durante todo el evento.\n\nY no nos detuvimos ahí. También llevamos la experiencia a la realidad aumentada, agregando imágenes que representaban la historia de la Falla, la Plaza de la Reina y Valencia en la época de Estellés.\n\nY para nuestra alegría, la Falla Tio Pep, diseñada por Virginia Lorente y creada por el artista Ricardo Alcaide, recibió el tercer premio de Fallas experimentales. Fue un verdadero honor haber sido parte de este proyecto y trabajar junto a verdaderos profesionales.\n\nVirginia Lorente: "Las Fallas son una oportunidad increíble para incorporar todos los ámbitos del diseño."\n\nA través de las luces y el sonido, las personas que visiten el monumento podrán escuchar los versos, "y sentir el latido de ese abrazo".',
    },
    "dialogos-2024": {
      title: "Diálogos 2024",
      description:
        "Serie de instalaciones interactivas que fomentan el diálogo entre diferentes culturas y perspectivas.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Interacción Social", "Multimedia", "Participativo"],
      category: "interactivo",
      github: "https://github.com/example/dialogos-2024",
      demo: "https://dialogos-2024.example.com",
      longDescription:
        "La Inteligencia de Nuestros Cuerpos: Una Inmersión en la Conexión Humano-IA\n\nDurante la semana de Diálogos 2024 de la escuela EASD de Valencia, llevamos la innovación al siguiente nivel.\n\nPor un lado, diseñamos una mesa interactiva que ofrece información sobre los creadores de los diseños participantes en el desfile final de las jornadas de diseño. Mediante la tecnología ReacTIVsion, los visitantes podían escanear un código QR que les permitía acceder a una web donde seleccionando el diseñador, podían cargar su información en la mesa interactiva.\n\nPor otro lado, preparamos una instalación con focos controlados por DMX sobre fibra óptica para destacar la zona donde se ubica el DJ en el desfile final de moda de las Jornadas de Diseño Diálogos 2024. Las animaciones de los focos se controlaban en tiempo real mediante un teclado MIDI conectado al programa TouchDesigner, brindando una experiencia visual única.\n\nAdemás, participamos en el proyecto GALER(IA) de Iván Pastor, donde los visitantes no solo eran espectadores, sino participantes activos. Sus interacciones directas alimentaban el corazón de la exposición: la generación de imágenes a través de la inteligencia artificial, controladas y manipuladas en tiempo real. Este proceso resalta la capacidad de la inteligencia artificial para crear imágenes a partir de algoritmos y la importancia del componente humano en cada creación.",
    },
    "serenates-2024": {
      title: "Serenates 2024",
      description:
        "Experiencia sonora interactiva que reinterpreta la tradición de las serenatas en un contexto contemporáneo.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Audio", "Tradición", "Participación"],
      category: "interactivo",
      github: "https://github.com/example/serenates-2024",
      demo: "https://serenates-2024.example.com",
      longDescription:
        "Serenates es un festival de música organizado por la Universitat de València, La Nau, para ofrecer al público valenciano una alternativa de ocio al aire libre en las noches estivales de junio y julio. Se inicia la noche siguiente a la Nit de Sant Joan en un entorno privilegiado como es el claustro neoclásico de La Nau.\n\nEn esta edición, trabajamos con la música del ballet SOROLLA, de Juan J. Colomer, creando visuales en directo inspirados en la obra pictórica de Joaquín Sorolla.\n\nGracias a este proyecto aprendí a trabajar con herramientas como Resolume Arena y TouchDesigner para generar contenido visual en tiempo real. Fue una experiencia única ver cómo imagen y música se fundían en un mismo lenguaje, además de tener la oportunidad de colaborar con más de 60 músicos profesionales en un entorno increíble.",
    },
    juego: {
      title: "Juego",
      description: "Experiencia lúdica interactiva que difumina los límites entre el juego físico y digital.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Gamificación", "Diseño Interactivo", "Experiencia"],
      category: "interactivo",
      github: "https://github.com/example/juego",
      demo: "https://juego.example.com",
      longDescription:
        "Juego es una experiencia interactiva que explora el concepto fundamental del juego como actividad creativa y social. La instalación crea un espacio donde los elementos físicos y digitales se entrelazan, respondiendo a los movimientos, gestos y colaboración entre los participantes. Sin reglas predefinidas, Juego invita a los visitantes a descubrir posibilidades emergentes a través de la experimentación colectiva, generando dinámicas impredecibles que evolucionan con cada interacción. El proyecto investiga cómo los entornos interactivos pueden fomentar la creatividad espontánea y la conexión social a través del juego libre.",
    },

    // Interiores
    "deep-end-skatepark": {
      title: "Deep End Skatepark",
      description: "Diseño de interiores para un skatepark urbano que fusiona funcionalidad y estética contemporánea.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Diseño Urbano", "Arquitectura", "Deporte"],
      category: "interiores",
      github: "https://github.com/example/deep-end-skatepark",
      demo: "https://deep-end-skatepark.example.com",
      longDescription:
        "Deep End Skatepark es un proyecto de diseño interior que transforma un antiguo espacio industrial en un centro dinámico para la cultura del skateboarding. El diseño respeta y realza las características arquitectónicas originales del edificio, incorporando elementos de diseño inspirados en la estética urbana y la cultura skate. Más allá de las rampas y obstáculos técnicamente optimizados, el espacio integra áreas sociales, expositivas y educativas, creando un hub cultural completo. La iluminación, acústica y materiales han sido cuidadosamente seleccionados para crear un ambiente que es tanto funcional para la práctica deportiva como visualmente impactante.",
    },
    formentera: {
      title: "Formentera",
      description:
        "Diseño de interiores para una residencia en Formentera que integra la esencia mediterránea con un enfoque contemporáneo.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Residencial", "Mediterráneo", "Sostenibilidad"],
      category: "interiores",
      github: "https://github.com/example/formentera",
      demo: "https://formentera.example.com",
      longDescription:
        "Formentera es un proyecto de diseño interior residencial que captura la esencia de la isla balear homónima. El diseño se inspira en la simplicidad de la arquitectura tradicional mediterránea, utilizando una paleta de colores que refleja el paisaje natural de la isla: blancos cálidos, azules profundos y tonos terrosos. Los materiales naturales y locales como la madera recuperada, la piedra caliza y los textiles artesanales dominan el espacio, creando una sensación de autenticidad y conexión con el entorno. La distribución espacial maximiza la luz natural y las vistas al exterior, difuminando los límites entre el interior y el paisaje circundante.",
    },
    "dona-carmen": {
      title: "Doña Carmen",
      description: "Rediseño de un espacio gastronómico que combina tradición culinaria y diseño de vanguardia.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Hostelería", "Iluminación", "Experiencia"],
      category: "interiores",
      github: "https://github.com/example/dona-carmen",
      demo: "https://dona-carmen.example.com",
      longDescription:
        "Doña Carmen es un proyecto de interiorismo para un restaurante que celebra la rica tradición culinaria española con un enfoque contemporáneo. El diseño rinde homenaje a la figura de Doña Carmen, una cocinera legendaria cuyos platos inspiraron el concepto gastronómico del local. El espacio se estructura en diferentes ambientes que representan aspectos de la vida y recetas de Doña Carmen, utilizando materiales, texturas y elementos decorativos que evocan memorias sensoriales asociadas con la comida tradicional. La iluminación juega un papel crucial, creando atmósferas íntimas que evolucionan a lo largo del día y realzan la experiencia gastronómica.",
    },

    // IA/RA/VR
    "bailar-en-el-desierto": {
      title: "Bailar en el desierto",
      description:
        "Experiencia de realidad virtual que transporta a los usuarios a un desierto donde el movimiento se traduce en expresiones visuales y sonoras.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["VR", "Danza", "Arte Digital"],
      category: "ia-ra-vr",
      github: "https://github.com/example/bailar-desierto",
      demo: "https://bailar-desierto.example.com",
      longDescription:
        "Bailar en el desierto es una experiencia de realidad virtual que invita a los participantes a explorar la expresión corporal en un paisaje desértico virtual. Utilizando tecnología de captura de movimiento, la experiencia traduce los gestos y movimientos del usuario en elementos visuales y sonoros que transforman el entorno virtual. El desierto, inicialmente minimalista y estático, cobra vida con cada movimiento, generando dunas ondulantes, tormentas de arena rítmicas y fenómenos atmosféricos que responden a la intensidad y fluidez de la danza. La experiencia explora la relación entre el cuerpo, el espacio y la transformación digital del movimiento.",
    },
    "the-next-serve": {
      title: "The Next Serve",
      description:
        "Aplicación de realidad aumentada que transforma el entrenamiento deportivo a través de análisis de movimiento en tiempo real.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["RA", "Deporte", "Análisis de Movimiento"],
      category: "ia-ra-vr",
      github: "https://github.com/example/next-serve",
      demo: "https://next-serve.example.com",
      longDescription:
        "The Next Serve es una aplicación de realidad aumentada diseñada para revolucionar el entrenamiento deportivo, inicialmente enfocada en el tenis. Utilizando la cámara del dispositivo y algoritmos avanzados de visión por computadora, la aplicación analiza en tiempo real la técnica del jugador, proporcionando retroalimentación visual superpuesta sobre el mundo real. Los usuarios pueden ver trayectorias óptimas, correcciones posturales y estadísticas de rendimiento directamente en su campo de visión. La aplicación incluye programas de entrenamiento personalizados que se adaptan al nivel y objetivos del usuario, creando una experiencia de aprendizaje inmersiva que acelera la mejora técnica.",
    },
    onirix: {
      title: "Onirix",
      description:
        "Experiencia inmersiva que utiliza inteligencia artificial para crear paisajes oníricos personalizados basados en las emociones del usuario.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["IA", "Emociones", "Arte Generativo"],
      category: "ia-ra-vr",
      github: "https://github.com/example/onirix",
      demo: "https://onirix.example.com",
      longDescription:
        "Onirix es una experiencia inmersiva que utiliza inteligencia artificial para generar paisajes oníricos personalizados. A través de sensores biométricos y análisis de expresiones faciales, la instalación detecta el estado emocional del participante y utiliza estos datos para alimentar algoritmos generativos que crean entornos visuales y sonoros únicos. Estos paisajes evolucionan en tiempo real, respondiendo a los cambios emocionales del usuario y creando un ciclo de retroalimentación donde la experiencia y las emociones se influyen mutuamente. Onirix explora cómo la tecnología puede visualizar nuestro mundo interior, creando representaciones externas de estados mentales normalmente invisibles.",
    },
  }

  const project = projects[id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:underline">
        <ArrowLeft size={16} /> Volver a proyectos
      </Link>

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">detalles_proyecto.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-2">
            <span className="text-primary">{">"}</span> cat {id}.json
          </p>
          <div className="mb-4">
            <p>
              <span className="text-primary">título:</span> {project.title}
            </p>
            <p>
              <span className="text-primary">categoría:</span> {project.category}
            </p>
            <p className="flex flex-wrap gap-2 mt-2">
              <span className="text-primary">tecnologías:</span>
              {project.technologies.map((tech, index) => (
                <span key={index} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
                  {tech}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-80 rounded-md overflow-hidden">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md transition-colors"
        >
          <Github size={16} /> Ver en GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors border border-primary/30"
        >
          <ExternalLink size={16} /> Demo en vivo
        </a>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Descripción del Proyecto</h2>
        <div className="text-muted-foreground whitespace-pre-line">{project.longDescription}</div>
      </div>
    </div>
  )
}
