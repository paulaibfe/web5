// app/projects/page.tsx
import ProjectCard from "@/components/project-card";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  const featured = ["fallen-equinox", "sonidos-de-origen", "ecos-de-la-tierra"]
    .map((id) => projects[id])
    .filter(Boolean);

  return (
    <main className="space-y-8 py-12 bg-black text-white">
      <h1 className="text-3xl font-mono">Proyectos Destacados</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((p) => (
          <ProjectCard
            key={p.id}
            id={p.id}
            title={p.title}
            description={p.description}
            image={p.image}
            technologies={p.technologies}
          />
        ))}
      </div>
    </main>
  );
}
