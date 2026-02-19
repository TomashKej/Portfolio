import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    Code2,
    Database,
    Globe,
    Cpu,
    Layers,
    Terminal,
    BookOpen,
    Wrench,
    Briefcase,
    Smartphone,
    CheckCircle2,
    Network,
    MessagesSquare
} from 'lucide-react';

export const metadata: Metadata = {
    title: "About | TomaszDev",
    description: "Software Engineering student and Junior Software Engineer with strong foundations in .NET, Web, Systems, and Computer Networks.",
};

export default function AboutPage() {
    return (
        <div className="w-full max-w-6xl px-4 sm:px-6 py-12 md:py-20">

            {/* Header */}
            <header className="mb-12">
                <h1 className="text-header font-bold text-gradient">
                    About me<span className="text-[--color-brand-light]">.</span>
                </h1>
                <div className="h-1.5 w-24 bg-[--color-brand-light] rounded-full" />
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">

                {/* MAIN COLUMN */}
                <div className="lg:col-span-7 space-y-10 text-[--color-text-light]">

                    {/* Intro */}
                    <section className="space-y-4">
                        <p className="text-xl text-white font-medium leading-relaxed">
                            I am a Software Engineering student and Junior Software Engineer with a strong foundation in computer science,
                            system architecture, and mathematics. I focus on building robust backend systems and modern web applications,
                            while continuously improving my engineering skills.
                        </p>

                        <p>
                            My primary expertise lies in the <span className="text-white font-semibold">.NET ecosystem (C#, ASP.NET, WPF, MVVM)</span>,
                            but I also actively develop web applications using <span className="text-white">PHP, JavaScript, TypeScript, React, Next.js, and Node.js</span>.
                            I am comfortable working across the full stack, from frontend UI and APIs to databases and system-level architecture.
                        </p>

                        <p>
                            I am currently gaining commercial experience as a C# Developer Intern at the Center for Research and Programming (CBiP),
                            working in a backend team on communication platforms. I follow professional workflows using
                            <span className="text-white"> Git, GitHub, Jira, and Swagger</span> within Agile and Scrum environments.
                        </p>

                        <p>
                            I combine analytical thinking with creative problem solving, allowing me to design maintainable and scalable software solutions.
                        </p>
                    </section>

                    {/* Engineering & Architecture */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-gradient flex items-center gap-2">
                            <Layers className="text-[--color-brand-light]" size={24} />
                            Engineering & Architecture
                        </h2>

                        <p>
                            I have a solid understanding of <span className="text-white">client-server architecture</span>, system design principles,
                            and software documentation using <span className="text-white">UML</span>. I understand how to design scalable systems
                            using layered architectures and separation of concerns.
                        </p>

                        <p>
                            My background includes knowledge of <span className="text-white">network topologies, IPv4/IPv6 addressing</span>, and
                            the fundamentals of <span className="text-white">electronics and electrotechnics</span>, which helps me understand
                            how software interacts with hardware and infrastructure.
                        </p>
                    </section>

                    {/* Networking Section */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-gradient flex items-center gap-2">
                            <Network className="text-[--color-brand-light]" size={24} />
                            Computer Networks
                        </h2>

                        <p>
                            I understand the principles of <span className="text-white">static and dynamic IP addressing</span>, including DHCP-based
                            network configuration and manual network configuration in enterprise environments. I am familiar with
                            subnetting, network masks, and fundamental routing concepts.
                        </p>
                    </section>

                    {/* Software Engineering & Documentation */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-gradient flex items-center gap-2">
                            <Cpu className="text-[--color-brand-light]" size={24} />
                            Software Engineering & Documentation
                        </h2>

                        <p>
                            I use <span className="text-white">UML diagrams (class, sequence, and system diagrams)</span> to model software systems
                            and prepare technical documentation before implementation. I understand the importance of clean architecture,
                            maintainability, and documentation in professional software development.
                        </p>

                        <p>
                            I have experience with <span className="text-white">project management fundamentals</span>, sprint planning, and Agile methodologies,
                            using Jira for task tracking and Git for collaborative development workflows.
                        </p>
                    </section>

                </div>

                {/* SIDEBAR */}
                <aside className="lg:col-span-5 space-y-8">

                    {/* Current Focus */}
                    <section className="glass-card gradient-border p-6 hover-card">
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <BookOpen className="text-[--color-brand-light]" size={20} />
                            Current Focus & Learning Path
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <LearningItem text="Building web applications with ASP.NET and PHP" />
                            <LearningItem text="Advanced backend architecture and design patterns" />
                            <LearningItem text="Embedded systems and microprocessors" />
                            <LearningItem text="Computer organization and architecture" />
                            <LearningItem text="Mobile development with Xamarin / .NET MAUI" />
                            <LearningItem text="Advanced software engineering and project management" />
                        </div>
                    </section>

                    {/* Skills */}
                    <div className="glass-card gradient-border p-6 hover-card space-y-6">
                        <SkillGroup
                            icon={<Code2 size={18} />}
                            title="Programming Languages"
                            skills="C, C++, C#, Java, JavaScript, TypeScript, PHP, SQL, LINQ"
                        />

                        <SkillGroup
                            icon={<Globe size={18} />}
                            title="Web & Application Development"
                            skills="ASP.NET Core, PHP, React, Next.js, Node.js, REST APIs, Tailwind CSS, HTML, CSS"
                        />

                        <SkillGroup
                            icon={<Database size={18} />}
                            title="Databases"
                            skills="SQL, SSMS, relational databases, query optimization"
                        />

                        <SkillGroup
                            icon={<Terminal size={18} />}
                            title="Systems & Networking"
                            skills="Client-Server Architecture, IPv4/IPv6, Static & Dynamic IP Addressing, Network Topologies"
                        />

                        <SkillGroup
                            icon={<Layers size={18} />}
                            title="Software Engineering"
                            skills="UML, System Design, Documentation, Agile & Scrum"
                        />

                        <SkillGroup
                            icon={<Wrench size={18} />}
                            title="Tools & Workflow"
                            skills="Git, GitHub, Jira, Swagger, Oracle VirtualBox"
                        />

                        <SkillGroup
                            icon={<Cpu size={18} />}
                            title="Engineering Foundations"
                            skills="Algorithms, Mathematics, Electronics & Electrotechnics Basics"
                        />
                    </div>

                    {/* Languages & Education */}
                    <div className="glass-card gradient-border p-6 hover-card space-y-4">
                        <div>
                            <h3 className="text-white font-bold text-sm uppercase mb-2">Languages</h3>
                            <div className="flex justify-between text-sm">
                                <span>Polish</span>
                                <span className="text-[--color-brand-light]">Native</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>English</span>
                                <span className="text-[--color-brand-light]">Advanced (C1)</span>
                            </div>
                        </div>

                        <hr className="border-[--color-brand-light]/10" />

                        <div>
                            <h3 className="text-white font-bold text-sm uppercase mb-2">Education</h3>
                            <p className="text-sm">BSc in Software Engineering</p>
                            <p className="text-xs text-[--color-brand-light]">3rd Year Student</p>
                        </div>
                    </div>

                    {/* Contact me */}
                    <Link
                        href="/contact"
                        className="justify-center gap-3 w-full py-4 font-bold rounded-xl glass-card overflow-hidden nav-link">

                        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        <MessagesSquare size={20} className="text-[--color-brand-light]" />
                        <span className="text-white">Contact Me !</span>
                    </Link>

                    {/* CV */}
                    <Link
                        href="/cv.pdf"
                        download
                        className="justify-center gap-3 w-full py-4 font-bold rounded-xl glass-card overflow-hidden nav-link">
                        
                        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        <Briefcase size={20} className="text-[--color-brand-light]" />
                        <span className="text-white">Download My CV</span>
                    </Link>

                </aside>
            </div>
        </div>
    );
}

/* Components */

function SkillGroup({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string }) {
    return (
        <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold">
                <span className="text-[--color-brand-light]">{icon}</span>
                <h3 className="text-sm uppercase tracking-wider">{title}</h3>
            </div>
            <p className="text-xs leading-relaxed text-[--color-text-light]/80">
                {skills}
            </p>
        </div>
    );
}

function LearningItem({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-2">
            <CheckCircle2 className="text-[--color-brand-light] mt-1" size={16} />
            <span>{text}</span>
        </div>
    );
}
