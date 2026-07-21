/**
 * Home page introduces the portfolio with a modern hero, clear CTAs, profile imagery, and quick proof points.
 */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    ArrowUpRight,
    Braces,
    Download,
    Layers3,
    LayoutGrid,
    Sparkles,
    User,
} from "lucide-react";

const HERO_STATS = [
    { value: "Diverse", label: "engineering projects" },
    { value: "C#/.NET", label: "main backend stack" },
    { value: "C1", label: "English proficiency" },
];

const TECH_STACK = [
    "C#",
    ".NET",
    "ASP.NET Core",
    "REST APIs",
    "CQRS",
    "MediatR",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Laravel",
    "SQL",
    "Entity Framework",
    "Docker",
    "Git",
    "Swagger",
    "Jira",
];

const TECH_STACK_LOOP = [...TECH_STACK, ...TECH_STACK];

/**
 * Home renders the first impression of the portfolio and keeps repeated hero details data-driven.
 */
export default function Home() {
    return (
        <section className="aurora-section relative isolate w-full overflow-hidden px-4 py-8 sm:px-6 md:py-14 xl:py-20">
            <div className="mx-auto grid min-h-[calc(100svh-132px)] w-full max-w-7xl items-start gap-8 min-[769px]:grid-cols-[minmax(0,0.98fr)_minmax(340px,0.82fr)] min-[769px]:items-center md:gap-10 2xl:grid-cols-[1.02fr_0.98fr]">
                <div className="order-2 flex min-w-0 flex-col items-start text-left min-[769px]:order-1">
                    <div className="section-kicker">
                        <Sparkles size={16} className="text-accent-cyan" />
                        Software Developer Portfolio
                    </div>

                    <h1 className="mt-5 max-w-4xl text-header font-black leading-[0.98] tracking-normal text-white sm:mt-7 lg:leading-[0.95]">
                        Reliable software.{" "}
                        <span className="text-gradient">Modern web edge.</span>
                    </h1>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-brand-light sm:mt-6 sm:text-base sm:leading-8 xl:text-lg">
                        I am Tomasz Kaczmarek, a Software Developer focused on C#, .NET, backend architecture,
                        and full-stack products that feel fast, structured, and polished.
                    </p>

                    <div className="mt-7 flex w-full max-w-2xl flex-col justify-center gap-3 self-center sm:mt-9 sm:flex-row">
                        <Link href="/projects" className="primary-cta">
                            <LayoutGrid size={18} />
                            View Projects
                            <ArrowUpRight size={16} />
                        </Link>

                        <Link href="/about" className="secondary-cta">
                            <User size={18} />
                            About Me
                        </Link>

                        <Link href="/cv/TomaszKaczmarekSoftwareDeveloperCv.pdf" download className="secondary-cta">
                            <Download size={18} />
                            Download CV
                        </Link>
                    </div>

                    <div className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-3 min-[440px]:grid-cols-3 sm:mt-10">
                        {HERO_STATS.map((stat) => (
                            <div key={stat.label} className="glass-card gradient-border p-4">
                                <p className="font-mono text-2xl font-black text-white">{stat.value}</p>
                                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-light">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex w-full max-w-2xl justify-center sm:mt-7">
                        <div className="skills-marquee" aria-label="Technology stack">
                            <div className="skills-marquee-track">
                                {TECH_STACK_LOOP.map((tech, index) => (
                                    <span key={`${tech}-${index}`} className="tech-chip shrink-0">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-1 self-center min-[769px]:order-2">
                    <div className="mx-auto flex w-full max-w-[440px] flex-col gap-4 sm:max-w-[520px] lg:max-w-[500px] 2xl:max-w-[620px]">
                        <div className="profile-frame p-2.5 sm:p-3">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-brand-dark sm:rounded-[1.25rem]">
                                <Image
                                    src="/images/ProfilePhoto.jpg"
                                    alt="Tomasz Kaczmarek"
                                    fill
                                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 520px, 46vw"
                                    priority
                                    className="object-cover object-center"
                                />

                                <div className="absolute left-2 top-3 rounded-xl border border-white/10 bg-brand-dark/82 p-2.5 backdrop-blur sm:left-3 sm:top-4 sm:p-3 xl:left-5 xl:top-6 xl:p-4">
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-lg bg-accent-cyan/15 p-1.5 text-accent-cyan sm:p-2">
                                            <Braces size={16} />
                                        </span>
                                        <div>
                                            <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-brand-light sm:text-[0.65rem] sm:tracking-[0.18em]">Core</p>
                                            <p className="text-xs font-bold text-white sm:text-sm xl:text-base">C# / .NET</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-3 right-2 rounded-xl border border-white/10 bg-brand-dark/86 p-2.5 backdrop-blur sm:bottom-4 sm:right-3 sm:p-3 xl:bottom-6 xl:right-5 xl:p-4">
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-lg bg-accent-emerald/15 p-1.5 text-accent-emerald sm:p-2">
                                            <Layers3 size={16} />
                                        </span>
                                        <div>
                                            <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-brand-light sm:text-[0.65rem] sm:tracking-[0.18em]">Focus</p>
                                            <p className="text-xs font-bold text-white sm:text-sm xl:text-base">Clean Architecture</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
