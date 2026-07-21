import { Project } from "@/data/projects";
import { ProjectsCarousel } from "./ProjectsCarousel";
import { ChevronRight, Github, Lock } from "lucide-react";

/**
 * ProjectsCard presents one project with screenshots, stack tags, and source availability.
 */
export default function ProjectsCard({ project }: { project: Project }) {
  return (
    <article className="project-card glass-card gradient-border hover-card group flex h-full flex-col overflow-hidden p-4">

      <ProjectsCarousel images={project.images} />
      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="text-lg font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-brand-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3 mb-6">
          {project.tech.map(t => (
            <span
              key={t}
              className="tech-chip"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* GitHub Link */}
      <div className="mt-auto border-t border-white/5 pt-4">
        {project.github ? ( 
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-cyan transition-transform duration-200 hover:translate-x-1 hover:text-white"
            >
              <Github size={16} />
              View Source <ChevronRight size={16} className="translate-y-[1px]"/>
            </a>
        ) : (
            <div className="inline-flex cursor-not-allowed select-none items-center gap-1.5 text-sm font-medium text-text-light/50"
                 title="Source code is private due to confidentiality agreements or is not available on GitHub">
                 <Lock size={16} />
                 <span>Not Available</span>
            </div>
        )}
      </div>
    </article>
  );
}
