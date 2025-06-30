// app/data/projects.ts

export interface Project {
  id: string
  category: "eventos" | "interactivo" | "interiores" | "ia"
  title: string
  description: string
  longDescription?: string
  linkLabel?: string
  linkUrl?: string
  links?: { label: string; url: string }[]
  roles?: string[]
  tools?: string[]
  technologies: string[]
  image: string
  images?: string[]
  videos?: string[]
}

export const projects: Record<string, Project> = {
  "fallen-equinox": {
    id: "fallen-equinox",
    category: "eventos",
    title: "Fallen Equinox",
    description:
      "Fallen Equinox es una experiencia diseñada para el lanzamiento de colección de Named Collective, donde la moda se convierte en ritual y el entorno en símbolo.",
    longDescription: `Enmarcado en un espacio natural de arquitectura silenciosa, el evento fusiona performance, cena ceremonial, shooting al atardecer y activaciones sensoriales como tarot, tatuajes o confesionario.

Con una estética que combina lo gótico moderno, la melancolía urbana y el imaginario del renacimiento, el encuentro celebra la identidad fluida, la comunidad joven sin prejuicios y la creación de contenido como forma de relato. Una caída elegante hacia lo emocional, pensada para dejar huella tanto en los asistentes como en las redes.`,  
    linkLabel: "Enlace presentación",
    linkUrl:
      "https://www.canva.com/design/DAGjUptrQ-k/iRR-yicQu-evhegHzplPdQ/view?utm_content=DAGjUptrQ-k&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9916e4fde7",  
    roles: ["Art Direction", "Creativa", "Producción"],
    tools: ["Generación de imágenes con IA", "AutoCAD"],
    technologies: [],
    image: "/projects/fallen-equinox/imagen1.png",
    images: [
      "/projects/fallen-equinox/imagen1.png",
      "/projects/fallen-equinox/imagen2.png",
      "/projects/fallen-equinox/imagen3.png",
      "/projects/fallen-equinox/imagen4.png",
      "/projects/fallen-equinox/imagen5.png",
      "/projects/fallen-equinox/imagen6.png",
      "/projects/fallen-equinox/imagen7.png",
      "/projects/fallen-equinox/imagen8.png",
    ],
  },
  "sonidos-de-origen": {
    id: "sonidos-de-origen",
    category: "eventos",
    title: "Sonidos de Origen",
    description:
      "Un festival que reinventa la música de raíz para una nueva generación.",
    longDescription: `Sonidos de Origen nace en respuesta a una tendencia cultural en auge: la necesidad de reconectar con las raíces desde una mirada contemporánea. En un contexto de saturación musical globalizada, crece el interés por propuestas que celebran lo local, lo identitario y lo auténtico. Artistas de todo el territorio español están reinterpretando sus tradiciones sonoras, mezclándolas con electrónica, hip hop, pop o ambient, y llevándolas a nuevos públicos.

La propuesta de Sonidos de Origen es clara: un festival de folclore atemporal, donde las jerarquías se invierten y los artistas emergentes proponen con quién colaborar. Un espacio para la experimentación, la fusión y el diálogo entre generaciones. No se trata de un evento nostálgico ni de una celebración folclórica convencional, sino de un movimiento cultural donde la música de raíz se proyecta hacia el futuro sin dejar de ser fiel a sí misma. Cada edición no solo ofrece programación artística, sino que construye un nuevo relato sobre qué puede ser el folclore en el presente.`,
    linkLabel: "Enlace presentación",
    linkUrl:
      "https://www.canva.com/design/DAGiQO375UE/BxSPtxfz4oGN9zQNG0G1sg/view?utm_content=DAGiQO375UE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h56d89b37de",
    roles: ["Art Direction", "Creativa", "Producción"],
    tools: [],
    technologies: [],
    image: "/projects/sonidos-de-origen/imagen1.png",
    images: [
      "/projects/sonidos-de-origen/imagen1.png",
      "/projects/sonidos-de-origen/imagen2.png",
      "/projects/sonidos-de-origen/imagen3.png",
      "/projects/sonidos-de-origen/imagen4.png",
      "/projects/sonidos-de-origen/imagen5.png",
      "/projects/sonidos-de-origen/imagen6.png",
    ],
  },
  "circuito-glovo-btt-xco": {
    id: "circuito-glovo-btt-xco",
    category: "eventos",
    title: "Circuito Glovo BTT XCO",
    description:
      "Circuito de ciclismo de montaña cross-country (XCO) que conecta siete carreras amateurs bajo una narrativa común.",
    longDescription: `Concebido como estrategia de reposicionamiento, convierte a Glovo en un actor relevante dentro del deporte amateur. Todo gira en torno a “Modo Glovo”: fluir en la bici, activaciones móviles y recompensas que fortalecen la comunidad.

Una propuesta que aleja a Glovo del imaginario de “app de comida” y lo consolida como plataforma urbana útil, ágil y comprometida con un estilo de vida activo.`,
    linkLabel: "Enlace presentación",
    linkUrl:
      "https://www.canva.com/design/DAGoAnHGVdw/OhTcrU0zMEc4b_nB39LUhg/view?utm_content=DAGoAnHGVdw&utm_campaign=share_your_design&utm_medium=link2&utm_source=shareyourdesignpanel",
    roles: ["Art Direction", "Creativa", "Producción"],
    tools: ["Generación de imágenes con IA"],
    technologies: [],
    image: "/projects/circuito-glovo-btt-xco/imagen1.png",
    images: [
      "/projects/circuito-glovo-btt-xco/imagen1.png",
      "/projects/circuito-glovo-btt-xco/imagen2.png",
      "/projects/circuito-glovo-btt-xco/imagen3.png",
      "/projects/circuito-glovo-btt-xco/imagen4.png",
      "/projects/circuito-glovo-btt-xco/imagen5.png",
      "/projects/circuito-glovo-btt-xco/imagen6.png",
      "/projects/circuito-glovo-btt-xco/imagen7.png",
      "/projects/circuito-glovo-btt-xco/imagen8.png",
      "/projects/circuito-glovo-btt-xco/imagen9.png",
      "/projects/circuito-glovo-btt-xco/imagen10.png",
    ],
  },
  "back2play": {
    id: "back2play",
    category: "eventos",
    title: "BACK2PLAY",
    description:
      "Evento de tres días que combina competiciones de videojuegos con programación cultural de festival.",
    longDescription: `BACK2PLAY reúne a jugadores habituales, fans casuales y nuevos públicos en un entorno híbrido: LAN party con espíritu de festival. Competiciones, conciertos, talleres, zona retro y experiencias participativas se funden en un evento único.`,
    linkLabel: "Enlace presentación",
    linkUrl:
      "https://www.canva.com/design/DAGpeGTCskc/zNa7k7noGv1JqyubvRNM7g/view?utm_content=DAGpeGTCskc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h606babc5fd",
    roles: ["Art Direction", "Creativa", "Producción"],
    tools: [],
    technologies: [],
    image: "/projects/back2play/imagen0.png",
    images: [
      "/projects/back2play/imagen0.png",
      "/projects/back2play/imagen1.png",
      "/projects/back2play/imagen2.png",
      "/projects/back2play/imagen3.png",
      "/projects/back2play/imagen4.png",
      "/projects/back2play/imagen5.png",
      "/projects/back2play/imagen6.png",
      "/projects/back2play/imagen7.png",
      "/projects/back2play/imagen8.png",
      "/projects/back2play/imagen9.png",
      "/projects/back2play/imagen10.png",
    ],
  },
  "ecos-de-la-tierra": {
    id: "ecos-de-la-tierra",
    category: "interactivo",
    title: "Ecos de la Tierra",
    description:
      "Instalación interactiva que explora la conexión entre la naturaleza y la tecnología.",
    longDescription: `Esta idea ilustra la fragilidad y resiliencia de los ecosistemas, desde un mundo dominado por la naturaleza, pasando por la transformación humana, hasta el retorno de la naturaleza tras nuestra hipotética desaparición. Reflexión sobre sostenibilidad y coexistencia armoniosa.`,
    roles: ["Art Direction", "Creativa", "Creación visuales", "Dirección músical"],
    tools: ["Touchdesigner"],
    technologies: [],
    image: "/projects/ecos-de-la-tierra/imagen1.png",
    images: [
      "/projects/ecos-de-la-tierra/imagen1.png",
    ],
    videos: [
      "/projects/ecos-de-la-tierra/EDLT.mp4",
      "/projects/ecos-de-la-tierra/EDLT2.mp4",
      "/projects/ecos-de-la-tierra/EDLT3.mp4",
      "/projects/ecos-de-la-tierra/EDLT4.mp4",
    ],
  },
  "falla-tio-pep": {
    id: "falla-tio-pep",
    category: "interactivo",
    title: "Falla Tio Pep",
    description:
      "Secuencia de luces sincronizadas con poesía de Estellés y realidad aumentada en la Falla de Valencia.",
    longDescription: `Utilizando PAR LEDs, DMX/Artnet y TouchDesigner, creamos un sistema autosuficiente de iluminación. Además, incorporamos realidad aumentada con imágenes históricas de la ciudad. El proyecto obtuvo el tercer premio de Fallas experimentales.`,
    linkLabel: "Leer artículos",
    linkUrl: "https://flatmagazine.es/…",
    links: [
      { label: "Virginia Lorente -Las Fallas son una oportunidad increíble para incorporar todos los ámbitos del diseño.", url: "https://dissenycv.es/virginia-lorente-las-fallas-son-una-oportunidad-increible-para-incorporar-todos-los-ambitos-del-diseno/" },
      { label: "A través de las luces y el sonido, las personas que visiten el monumento podrán escuchar los versos, y sentir el latido de ese abrazo.", url: "https://flatmagazine.es/diseno/virginia-lorente-disena-el-abrazo-de-estelles-en-la-plaza-de-la-reina/" },
    ],
    roles: ["Art Direction", "Programación luces y sonido", "Producción"],
    tools: [],
    technologies: [],
    image: "/projects/falla-tio-pep/imagen1.jpg",
    images: [
      "/projects/falla-tio-pep/imagen1.jpg",
      "/projects/falla-tio-pep/imagen2.jpg",
      "/projects/falla-tio-pep/imagen3.png",
      "/projects/falla-tio-pep/imagen4.png",
      "/projects/falla-tio-pep/imagen5.jpg",
      "/projects/falla-tio-pep/imagen6.jpg",
      "/projects/falla-tio-pep/imagen7.png",
      "/projects/falla-tio-pep/imagen8.jpg",
    ],
    videos: ["/projects/falla-tio-pep/FTP2.mp4"],
  },
  "juego": {
    id: "juego",
    category: "interactivo",
    title: "Diseño de Juego",
    description:
      "Experiencia lúdica interactiva que responde a gestos y movimiento para dinamizar la creatividad.",
    roles: ["Programación"],
    tools: ["Touchdesigner", "Arduino"],
    technologies: [],
    image: "/projects/juego/imagen1.jpg",
    images: ["/projects/juego/imagen1.jpg"],
    videos: [
      "/projects/juego/video1.mp4",
      "/projects/juego/video2.mp4",
      "/projects/juego/video3.mov",
    ],
  },
  "serenates": {
    id: "serenates",
    category: "interactivo",
    title: "Serenates 2024",
    description:
      "Festival de música al aire libre en La Nau con visuales en directo inspirados en Sorolla.",
    roles: ["VJ", "Programación visuales", "Producción"],
    tools: ["Touchdesigner", "AfterEffects", "Resolume Arena"],
    technologies: [],
    image: "/projects/serenates/imagen1.jpg",
    images: ["/projects/serenates/imagen1.jpg"],
    videos: [
      "/projects/serenates/video1.mp4",
      "/projects/serenates/video2.mp4",
      "/projects/serenates/video3.mp4",
      "/projects/serenates/video4.mp4",
    ],
  },
  "deep-end-skatepark": {
    id: "deep-end-skatepark",
    category: "interiores",
    title: "Deep End Skatepark",
    description:
      "Diseño de interiores de un skatepark inspirado en las piscinas de California de los 70.",
    roles: ["Diseñadora de interiores", "Creativa"],
    tools: ["AutoCAD", "Sketchup", "Indesign", "Procreate"],
    technologies: [],
    image: "/projects/deep-end-skatepark/DES1.png",
    images: [
      "/projects/deep-end-skatepark/DES1.png",
      "/projects/deep-end-skatepark/DES2.jpg",
      "/projects/deep-end-skatepark/DES3.png",
      "/projects/deep-end-skatepark/DES4.png",
      "/projects/deep-end-skatepark/DES5.png",
      "/projects/deep-end-skatepark/DES6.png",
      "/projects/deep-end-skatepark/DES7.jpg",
      "/projects/deep-end-skatepark/DES8.jpg",
      "/projects/deep-end-skatepark/DES9.jpg",
      "/projects/deep-end-skatepark/DES10.jpg",
    ],
  },
  "formentera": {
    id: "formentera",
    category: "interiores",
    title: "Formentera",
    description:
      "Vivienda entre medianeras reformada para maximizar luz natural y esencia mediterránea.",
    roles: ["Diseño de interiores", "Detalles constructivos", "Contacto proveedores y cliente"],
    tools: ["AutoCAD", "Sketchup"],
    technologies: [],
    image: "/projects/formentera/f1.png",
    images: [
      "/projects/formentera/f1.png",
      "/projects/formentera/f2.png",
      "/projects/formentera/f3.png",
      "/projects/formentera/f4.png",
      "/projects/formentera/f5.png",
      "/projects/formentera/f6.png",
      "/projects/formentera/f7.jpg",
      "/projects/formentera/f8.jpg",
    ],
  },
  "dona-carmen": {
    id: "dona-carmen",
    category: "interiores",
    title: "Doña Carmen",
    description:
      "Proyecto de retail infantil: espacio cálido y organizado, con atmósfera amable y mobiliario a medida.",
    roles: ["Diseñadora de interiores", "Creativa"],
    tools: ["AutoCAD", "Sketchup"],
    technologies: [],
    image: "/projects/dona-carmen/DC1.png",
    images: [
      "/projects/dona-carmen/DC1.png",
      "/projects/dona-carmen/DC2.png",
      "/projects/dona-carmen/DC3.png",
      "/projects/dona-carmen/DC4.png",
      "/projects/dona-carmen/DC5.png",
    ],
  },
  "bailar-en-el-desierto": {
    id: "bailar-en-el-desierto",
    category: "ia",
    title: "Bailar en el Desierto",
    description: "Descripcion x completar",
    roles: ["Modelado 3D", "Creativa"],
    tools: ["Twinmotion"],
    technologies: [],
    image: "/projects/bailar-en-el-desierto/imagen1.png",
    images: [
      "/projects/bailar-en-el-desierto/imagen1.png",
      "/projects/bailar-en-el-desierto/imagen2.png",
      "/projects/bailar-en-el-desierto/imagen3.png",
      "/projects/bailar-en-el-desierto/imagen4.png",
      "/projects/bailar-en-el-desierto/imagen5.png",
      "/projects/bailar-en-el-desierto/imagen6.png",
    ],
    videos: ["/projects/bailar-en-el-desierto/video1.mp4"],
  },
  "dialogos": {
    id: "dialogos",
    category: "ia",
    title: "Diálogos 2024",
    description: "Proyecto x completar",
    roles: ["Diseñadora de interiores", "Creativa"],
    tools: ["AutoCAD", "Sketchup"],
    technologies: [],
    image: "/projects/dialogos/imagen1.png",
    images: ["/projects/dialogos/imagen1.png"],
    videos: [
      "/projects/dialogos/video1.mp4",
      "/projects/dialogos/video2.mp4",
    ],
  },
}
