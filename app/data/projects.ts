// app/data/projects.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  linkLabel?: string;
  linkUrl?: string;
  roles?: string[];
  tools?: string[];
  technologies: string[];
  image: string;
  images?: string[];
}

export const projects: Record<string, Project> = {
  "fallen-equinox": {
    id: "fallen-equinox",
    title: "Fallen Equinox",
    description:
      "Fallen Equinox es una experiencia diseñada para el lanzamiento de colección…",
    longDescription: `Aquí tu descripción larga…`,
    linkLabel: "Enlace presentación",
    linkUrl:
      "https://www.canva.com/design/DAGjUptrQ-k/iRR-yicQu-evhegHzplPdQ/view",
    roles: ["Art Direction", "Creativa", "Producción"],
    tools: ["Generación de imágenes con IA", "AutoCAD"],
    technologies: ["Sonido", "Instalación", "Arte Digital"],
    image: "/projects/fallen-equinox/imagen1.png",
    images: [
      "/projects/fallen-equinox/imagen1.png",
      "/projects/fallen-equinox/imagen2.png",
      "/projects/fallen-equinox/imagen3.png",
    ],
  },
  "sonidos-de-origen": {
    id: "sonidos-de-origen",
    title: "Sonidos de Origen",
    description: "Un festival que reinventa la música de raíz…",
    longDescription: `Aquí tu descripción larga…`,
    linkLabel: "Enlace presentación",
    linkUrl:
      "https://www.canva.com/design/DAGiQO375UE/BxSPtxfz4oGN9zQNG0G1sg/view",
    roles: ["Art Direction", "Creativa", "Producción"],
    tools: [],
    technologies: ["Audio", "Cultura", "Instalación"],
    image: "/projects/sonidos-de-origen/imagen1.png",
    images: [
      "/projects/sonidos-de-origen/imagen1.png",
      "/projects/sonidos-de-origen/imagen2.png",
      "/projects/sonidos-de-origen/imagen3.png",
    ],
  },
  "ecos-de-la-tierra": {
    id: "ecos-de-la-tierra",
    title: "Ecos de la Tierra",
    description:
      "Instalación interactiva que explora la conexión…",
    longDescription: `Aquí tu descripción larga…`,
    roles: ["Art Direction", "Creativa"],
    tools: ["Touchdesigner"],
    technologies: ["Sensores", "Ecología", "Sonido"],
    image: "/projects/ecos-de-la-tierra/imagen1.png",
    images: [
      "/projects/ecos-de-la-tierra/imagen1.png",
      "/projects/ecos-de-la-tierra/imagen2.png",
      "/projects/ecos-de-la-tierra/imagen3.png",
    ],
  },
  // añade el resto siguiendo este patrón…
};
