import { Project } from "@/data/projects";
import { ProjectsCarousel } from "./ProjectsCarousel";
import { ChevronRight } from "lucide-react";

export default function ProjectsCard({ project }: { project: Project }) {
  return (
    <article className="glass-card gradient-border hover-card p-5 flex flex-col">

      <ProjectsCarousel images={project.images} />

      <h3 className="text-lg font-bold mt-4 text-white">
        {project.title}
      </h3>

      <p className="text-sm text-[--color-text-light]/80 mt-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.tech.map(t => (
          <span
            key={t}
            className="px-2 py-1 text-xs bg-white/5 rounded border border-white/10"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        className="mt-4 text-sm font-semibold text-[--color-brand-light] hover:underline"
      >
              Check out my projects <ChevronRight size={16} />
      </a>
    </article>
  );
}
