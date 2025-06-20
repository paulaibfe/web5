// app/projects/[id]/page.server.tsx
import { notFound } from "next/navigation"
import { projects } from "@/app/data/projects"
import PageClient from "./page.client"

export function generateStaticParams() {
  return Object.values(projects).map((p) => ({ id: p.id }))
}

export default function PageServer({
  params,
}: {
  params: { id: string }
}) {
  const project = projects[params.id]
  if (!project) return notFound()

  return <PageClient images={project.images!} {...project} />
}
