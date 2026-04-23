/** 
 * About Page
 * This page provides information about the developer, their skills, and experience.
 * It includes sections on engineering and architecture, computer networks, technical foundations, current learning focus, and contact information.
 */

import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    Code2,
    Code,
    Database,
    Globe,
    Cpu,
    Layers,
    Terminal,
    BookOpen,
    Wrench,
    Briefcase,
    CheckCircle2,
    Network,
    MessagesSquare
} from 'lucide-react';

export const metadata: Metadata = {
    title: "About | TomaszDev",
    description: "Junior Software Developer and Software Engineering student specialising in .NET, backend systems, and modern web applications.",
};

export default function AboutPage() {
    return (
        <div className="w-full max-w-6xl px-4 sm:px-6 py-12 md:py-20">

            <header className="mb-12">
                <h1 className="text-header font-bold text-gradient">
                    About me<span className="text-brand-light">.</span>
                </h1>
                <div className="h-1.5 w-24 bg-brand-light rounded-full" />
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">

                {/* MAIN COLUMN */}
                <div className="lg:col-span-7 space-y-10 text-text-light">

                    {/* INTRO */}
                    <section className="space-y-4">
                        <p className="text-xl text-white font-medium leading-relaxed">
                            I am a Software Developer and Software Engineering student specialising in backend development with C# and .NET,
                            focused on building reliable, well-structured systems.
                        </p>

                        <p>
                            My strongest expertise lies in <span className="text-white font-semibold">
                                C# and the .NET ecosystem (ASP.NET Core, MVC, WPF, MVVM)
                            </span>. I design backend systems, REST APIs, and business logic with a strong focus on clarity,
                            maintainability, and scalability.
                        </p>

                        <p>
                            Alongside .NET, I develop web applications using <span className="text-white font-semibold">
                                PHP (including Laravel), React, Next.js, JavaScript and TypeScript
                            </span>, supported by solid knowledge of
                            <span className="text-white font-semibold"> SQL and relational databases</span>.
                            I am comfortable building full stack solutions from user interface to database modelling.
                        </p>

                        <p>
                            I am currently expanding my skill set by learning
                            <span className="text-white font-semibold"> CQRS patterns with MediatR, containerisation using Docker, and mobile application development with React Native</span>,
                            building a deeper understanding of modern, scalable application design.
                        </p>

                        <p>
                            I am currently gaining commercial experience as a C# Developer Intern at the
                            Center for Research and Programming (CBiP), contributing to backend development
                            for a student platform. The application enables users to join servers, navigate interactive
                            environments, participate in meetings, and communicate within a collaborative digital space.
                            <span className="text-white font-semibold">I work with Git, GitHub, Jira and Swagger as part of an Agile team.</span>
                        </p>

                        <p>
                            What sets me apart is analytical thinking combined with a strong focus on software architecture and engineering discipline.<br />
                            <span className="text-white font-semibold">I do not just write code. I design systems that are structured, maintainable and scalable.</span>
                        </p>
                    </section>

                    {/* ENGINEERING */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-gradient flex items-center gap-2">
                            <Layers className="text-brand-light" size={24} />
                            Engineering and Architecture
                        </h2>
                        <p>
                            I focus on building systems with clear structure and separation of concerns,
                            applying principles such as layered architecture and clean design patterns.
                        </p>

                        <p>
                            I use UML diagrams and structured planning to design systems before implementation,
                            helping me reduce complexity and create more predictable and maintainable solutions.
                        </p>

                        <p>
                            I am particularly interested in scalable backend systems, clean architecture,
                            and writing code that remains understandable and reliable over time.
                        </p>
                    </section>

                    {/* NETWORKING */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-gradient flex items-center gap-2">
                            <Network className="text-brand-light" size={24} />
                            Computer Networks and Infrastructure
                        </h2>

                        <p>
                            I have worked with Cisco Packet Tracer to design and simulate network topologies,
                            configure routers and switches, and practise both static and dynamic IP addressing.
                        </p>

                        <p>
                            I understand subnetting, IPv4 and IPv6 addressing, DNS fundamentals, DHCP configuration,
                            and the core principles behind how devices communicate in local and enterprise environments.
                        </p>
                    </section>

                    {/* TECHNICAL FOUNDATIONS */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-gradient flex items-center gap-2">
                            <Cpu className="text-brand-light" size={24} />
                            Technical Foundations and Systems Thinking
                        </h2>

                        <p>
                            I explored electronics and circuit simulation using Multisim,
                            gaining a better understanding of how software interacts with hardware systems.
                        </p>

                        <p>
                            I also worked with Microsoft Project, where I designed a complete ERP system plan,
                            including scheduling, resource allocation, and system structure visualisation.
                        </p>

                        <p>
                            This experience strengthened my structured thinking and ability to approach complex systems
                            in a methodical and organised way.
                        </p>
                    </section>

                </div>

                {/* SIDEBAR */}
                <aside className="lg:col-span-5 space-y-8">

                    {/* CURRENT FOCUS */}
                    <section className="glass-card gradient-border p-6 hover-card">
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <BookOpen className="text-brand-light" size={20} />
                            Current Focus and Learning Path
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <LearningItem text="Advanced backend architecture in .NET" />
                            <LearningItem text="CQRS and MediatR in real applications" />
                            <LearningItem text="Building web applications with Laravel (PHP)" />
                            <LearningItem text="Mobile app development with React Native" />
                            <LearningItem text="Containerisation with Docker" />
                            <LearningItem text="Scalable and maintainable system design" />
                        </div>
                    </section>

                    {/* SKILLS */}
                    <div className="glass-card gradient-border p-6 hover-card space-y-6">

                        <SkillGroup
                            icon={<Code2 size={18} />}
                            title="Core Languages"
                            skills="C#, PHP, JavaScript, TypeScript, SQL"
                        />

                        <SkillGroup
                            icon={<Code size={18} />}
                            title="Additional Languages"
                            skills="C, C++, Java, Pascal"
                        />

                        <SkillGroup
                            icon={<Globe size={18} />}
                            title="Web and Backend"
                            skills="ASP.NET Core, .NET, MVC, REST APIs, PHP, Laravel, React, Next.js, HTML, CSS, Tailwind"
                        />

                        <SkillGroup
                            icon={<Database size={18} />}
                            title="Databases"
                            skills="SQL Server, relational databases, database design, query optimisation"
                        />

                        <SkillGroup
                            icon={<Layers size={18} />}
                            title="Architecture and Engineering"
                            skills="OOP, MVVM, MVC, CQRS, MediatR, UML, System Design, Clean Architecture, Agile, Scrum"
                        />

                        <SkillGroup
                            icon={<Terminal size={18} />}
                            title="Systems and Infrastructure"
                            skills="Client-server architecture, Docker, IPv4, IPv6, DNS, DHCP, subnetting, Cisco Packet Tracer"
                        />

                        <SkillGroup
                            icon={<Wrench size={18} />}
                            title="Tools"
                            skills="Git, GitHub, Jira, Swagger, Microsoft Project"
                        />
                    </div>

                    {/* LANGUAGES & EDUCATION */}
                    <div className="glass-card gradient-border p-6 hover-card space-y-4">

                        <div>
                            <h3 className="text-white font-bold text-sm uppercase mb-2">Languages</h3>
                            <div className="flex justify-between text-sm">
                                <span>Polish</span>
                                <span className="text-brand-light">Native</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>English</span>
                                <span className="text-brand-light">Advanced (C1)</span>
                            </div>
                        </div>

                        <hr className="border-brand-light/10" />

                        <div>
                            <h3 className="text-white font-bold text-sm uppercase mb-2">Education</h3>
                            <p className="text-sm">BSc in Software Engineering</p>
                            <p className="text-xs text-brand-light">3rd Year Student</p>
                        </div>
                    </div>

                    {/* CONTACT */}
                    <Link
                        href="/contact"
                        className="justify-center gap-3 w-full py-4 font-bold rounded-xl glass-card overflow-hidden nav-link">

                        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        <MessagesSquare size={20} className="text-brand-light" />
                        <span className="text-white">Contact Me</span>
                    </Link>

                    {/* CV */}
                    <Link
                        href="/cv/TomaszKaczmarekSoftwareDeveloperCv.pdf"
                        download
                        className="justify-center gap-3 w-full py-4 font-bold rounded-xl glass-card overflow-hidden nav-link">

                        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        <Briefcase size={20} className="text-brand-light" />
                        <span className="text-white">Download My CV</span>
                    </Link>

                </aside>
            </div>
        </div>
    );
}

function SkillGroup({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string }) {
    return (
        <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold">
                <span className="text-brand-light">{icon}</span>
                <h3 className="text-sm uppercase tracking-wider">{title}</h3>
            </div>
            <p className="text-xs leading-relaxed text-text-light/80">
                {skills}
            </p>
        </div>
    );
}

function LearningItem({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-2">
            <CheckCircle2 className="text-brand-light mt-1" size={16} />
            <span>{text}</span>
        </div>
    );
}