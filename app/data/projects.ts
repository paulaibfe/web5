// app/data/projects.ts

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  linkLabel?: string
  linkUrl?: string
  roles?: string[]
  tools?: string[]
  technologies: string[]      // ← lo añado aquí
  image: string
  images?: string[]
}

export const projects: Record<string, Project> = {
  "fallen-equinox": {
    id: "fallen-equinox",
    title: "Fallen Equinox",
    description:
      "Fallen Equinox es una experiencia diseñada para el lanzamiento de colección de Named Collective, donde la moda se convierte en ritual y el entorno en símbolo.",
    longDescription: `Con una estética que combina lo gótico moderno, la melancolía urbana y el imaginario del renacimiento...`,
    linkLabel: "Enlace presentación",
    linkUrl:
      "https://www.canva.com/design/DAGjUptrQ-k/iRR-yicQu-evhegHzplPdQ/view?...",
    roles: ["Art Direction", "Creativa", "Producción"],
    tools: ["Generación de imágenes con IA", "AutoCAD"],
    technologies: ["Sonido", "Instalación", "Arte Digital"], // ← aquí
    image: "/projects/fallen-equinox/imagen1.png",
    images: ["/projects/fallen-equinox/imagen1.png"],
  },
  "sonidos-de-origen": {
    id: "sonidos-de-origen",
    title: "Sonidos de Origen",
    description:
      "Un festival que reinventa la música de raíz para una nueva generación.",
    longDescription: `Sonidos de Origen nace en respuesta a una tendencia cultural en auge...`,
    linkLabel: "Enlace presentación",
    linkUrl:
      "https://www.canva.com/design/DAGiQO375UE/BxSPtxfz4oGN9zQNG0G1sg/view?...",
    roles: ["Art Direction", "Creativa", "Producción"],
    tools: [],
    technologies: ["Audio", "Cultura", "Instalación"], // ← aquí
    image: "/projects/sonidos-de-origen/imagen1.png",
    images: ["/projects/sonidos-de-origen/imagen1.png"],
  },
  "ecos-de-la-tierra": {
    id: "ecos-de-la-tierra",
    title: "Ecos de la Tierra",
    description:
      "Instalación interactiva que explora la conexión entre la naturaleza y la tecnología.",
    longDescription: `Este ciclo de vida ilustra la fragilidad y la resiliencia de los ecosistemas...`,
    roles: ["Art Direction", "Creativa", "Creación visuales", "Dirección músical"],
    tools: ["Touchdesigner"],
    technologies: ["Sensores", "Ecología", "Sonido"], // ← aquí
    image: "/projects/ecos-de-la-tierra/imagen1.png",
    images: ["/projects/ecos-de-la-tierra/imagen1.png"],
  },
  // …añade el resto igual, incluyendo siempre `technologies: [...]`…
}
