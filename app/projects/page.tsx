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

/**
 * ProjectsPage lists portfolio work and highlights source-code availability.
 */
export default function ProjectsPage()
{
    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-20">
            {/* --- Header element --- */}
            <header className="mb-9">
                <p className="section-kicker mb-5">Selected engineering work</p>
                <h1 className="text-header font-bold text-gradient">
                    Projects<span className="text-brand-light">.</span>
                </h1>
                <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-accent-cyan via-accent-emerald to-accent-amber" />
                <p className="mt-5 max-w-5xl text-brand-light">
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
                <p className="text-sm text-text-light/70 mt-2 relative z-10">
                    More projects, and documentation are available on GitHub.
                </p>
                <a
                    href="https://github.com/TomashKej"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-cta relative z-10 mt-6"
                >
                    Visit GitHub Profile
                </a>
            </section>

        </div>
    );
}
