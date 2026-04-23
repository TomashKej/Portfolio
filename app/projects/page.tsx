/**
 * Projects Page
 * This page showcases a selection of private and engineering projects, demonstrating backend architecture, web development, and computer science fundamentals.
 * Some projects are available on GitHub, while others are private due to confidentiality agreements. Detailed discussions about any project can be arranged during an interview.
 */

import { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectsCard from "@/app/components/ProjectsCard";

export const metadata: Metadata = {
    title: "Projects | Tomasz.dev",
    description: "Engineering projects showcasing backend systems, web aplications, and open-source contributions. Explore my work in software development, system design, and more.",
};
export default function ProjectsPage()
{
    return (
        <div className="w-full max-w-6xl px-4 sm:px-6 py-12 md:py-20">
            {/* --- Header element --- */}
            <header className="mb-6">
                <h1 className="text-header font-bold text-gradient">
                    Projects<span className="text-brand-light">.</span>
                </h1>
                <div className="h-1.5 w-24 bg-brand-light rounded-full" />
                <p className="text-color-text-light/70 mt-4 max-w-6xl">
                    A selection of private / engineering projects demonstrating backend architecture, web development, and computer science fundamentals.
                    Some projects are available on GitHub, and some are private due to confidentiality agreements, but I am happy to discuss any of them in detail during an interview.
                </p>
            </header>
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {projects.map(p => (
                    <ProjectsCard key={p.title} project={p} />
                ))}
            </div>

            {/* GitHub CTA */}
            <section className="glass-card gradient-border p-10 mt-20 relative overflow-hidden text-center">
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

                <h2 className="text-2xl font-bold text-gradient relative z-10">
                    Explore Full Source Code
                </h2>
                <p className="text-sm text-[--color-text-light]/70 mt-2 relative z-10">
                    More projects, and documentation are available on GitHub.
                </p>
                <a
                    href="https://github.com/TomashKej"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex mt-6 px-6 py-3 bg-white text-secondary-dark font-bold rounded-lg hover:scale-105 transition-all relative z-10"
                >
                    Visit GitHub Profile
                </a>
            </section>

        </div>
    );
}