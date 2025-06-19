import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import PageClient from "./Page.client";

export function generateStaticParams() {
  return Object.values(projects).map((p) => ({ id: p.id }));
}

export default function PageServer({ params }: { params: { id: string } }) {
  const project = projects[params.id];
  if (!project) notFound();
  return <PageClient images={project.images || []} {...project} />;
}
