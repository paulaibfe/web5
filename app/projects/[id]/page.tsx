// app/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import PageClient from "./page.client";

export async function generateStaticParams() {
  return Object.values(projects).map((p) => ({ id: p.id }));
}

export default async function Page({ params }: { params: { id: string } }) {
  // 🔑 await params:
  const { id } = await params;
  const project = projects[id];
  if (!project) notFound();

  return <PageClient {...project} />;
}
