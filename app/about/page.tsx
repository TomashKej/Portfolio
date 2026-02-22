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
                            I am a Junior Software Developer and a Software Engineering student who genuinely enjoys building reliable,
                            well structured software. I specialise in backend development with C# and .NET,
                            while also working confidently across modern web technologies.
                        </p>

                        <p>
                            My strongest expertise lies in <span className="text-white font-semibold">
                                C# and the .NET ecosystem (ASP.NET Core, WPF, MVVM)
                            </span>. I design backend systems, REST APIs, and structured business logic
                            with a strong focus on clarity, maintainability, and scalability.
                        </p>

                        <p>
                            Alongside .NET, I develop web applications using <span className="text-white font-semibold"> 
                                PHP, React, Next.js, JavaScript, TypeScript, HTML, CSS and Tailwind
                            </span>, supported by solid knowledge of
                            <span className="text-white font-semibold"> SQL and relational databases</span>.
                            I am comfortable building full stack solutions from user interface to database modelling.
                        </p>

                        <p>
                            I am currently gaining commercial experience as a C# Developer Intern at the
                            Center for Research and Programming (CBiP), contributing to backend development
                            for a student platform. The application enables users to join servers, navigate interactive
                            environments, participate in meetings, and communicate within a collaborative digital space.
                            I work with Git, GitHub, Jira and Swagger as part of an Agile team.
                        </p>

                        <p>
                            What sets me apart is analytical thinking combined with practical engineering discipline.
                            I do not just write code. I design systems that are structured, maintainable and scalable.
                        </p>
                    </section>

                    {/* ENGINEERING */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-gradient flex items-center gap-2">
                            <Layers className="text-brand-light" size={24} />
                            Engineering and Architecture
                        </h2>

                        <p>
                            I understand client server architecture, layered design, and separation of concerns.
                            I use UML diagrams to plan systems before implementation,
                            ensuring clarity and structure from the beginning.
                        </p>

                        <p>
                            I am particularly interested in clean architecture, scalable backend systems,
                            and writing code that remains understandable over time.
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
                            strengthening my understanding of how software interacts with hardware systems.
                        </p>

                        <p>
                            I also worked extensively with Microsoft Project, where I independently designed
                            a complete ERP system plan from scratch. This included scheduling,
                            resource allocation, defining milestones, identifying critical paths,
                            and visualising progress using Gantt charts.
                        </p>

                        <p>
                            This experience improved my structured thinking and ability to approach complex systems
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
                            <LearningItem text="Scalable system design patterns" />
                            <LearningItem text="SQL optimisation and performance tuning" />
                            <LearningItem text="Distributed systems fundamentals" />
                            <LearningItem text="Modern React architecture" />
                            <LearningItem text="Professional software engineering practices" />
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
                            skills="ASP.NET / .NET, REST APIs, React, Next.js, HTML, CSS, Tailwind"
                        />

                        <SkillGroup
                            icon={<Database size={18} />}
                            title="Databases"
                            skills="SQL Server, relational databases, query optimisation"
                        />

                        <SkillGroup
                            icon={<Terminal size={18} />}
                            title="Systems and Networking"
                            skills="Client Server Architecture, IPv4, IPv6, DNS, DHCP, Subnetting, Cisco Packet Tracer"
                        />

                        <SkillGroup
                            icon={<Layers size={18} />}
                            title="Software Engineering"
                            skills="Object-Oriented Programming (OOP), UML, System Design, Clean Architecture, Agile, Scrum"
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
                        href="/cv/TomaszKaczmarekSoftwareDeveloperCvInPDF.pdf"
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