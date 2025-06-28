// app/projects/[id]/page.server.tsx
import { notFound } from "next/navigation";
import PageClient from "./Page.client";
import { projects } from "@/app/data/projects";

export function generateStaticParams() {
  return Object.values(projects).map((p) => ({ id: p.id }));
}

export default function PageServer({
  params,
}: {
  params: { id: string };
}) {
  const project = projects[params.id];
  if (!project) notFound();

  return (
    <PageClient
      images={project.images || [project.image]}
      title={project.title}
      description={project.description}
    />
  );
}
