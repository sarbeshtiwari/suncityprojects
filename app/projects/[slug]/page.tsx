import { notFound } from "next/navigation";
import ProjectDetailPage from "./client";
import ProjectDetailWrapper from "./projectDetailWrapper";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  return <ProjectDetailWrapper slug={slug} />;
}