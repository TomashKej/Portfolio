import { Project } from "@/data/projects";
import { ProjectsCarousel } from "./ProjectsCarousel";
import { ChevronRight, Github, Lock } from "lucide-react";

export default function ProjectsCard({ project }: { project: Project }) {
  return (
    <article className="glass-card gradient-border hover-card p-5 flex flex-col h-full">

      <ProjectsCarousel images={project.images} />
      <div className="flex flex-col flex-1 mt-4">
        <h3 className="text-lg font-bold text-white">
          {project.title}
        </h3>

        <p className="text-sm text-color-brand-light/80 mt-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3 mb-6">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-2 py-1 text-xs bg-white/5 rounded border border-white/10"
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
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-color-brand-light hover:underline transition-transform duration-200 hover:scale-105"
            >
              <Github size={16} />
              View Source <ChevronRight size={16} className="translate-y-[1px]"/>
            </a>
        ) : (
            <div className="inline-flex items-center gap-1.5 text-sm font-medium text-[--color-text-light]/50 cursor-not-allowed select-none"
                 title="Source code is private due to confidentiality agreements or is not available on GitHub">
                 <Lock size={16} />
                 <span>Not Available</span>
            </div>
        )}
      </div>
    </article>
  );
}
