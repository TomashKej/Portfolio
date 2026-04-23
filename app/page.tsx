/**
 * Home page of the portfolio website, featuring a hero section with a profile photo and introduction.
 * The layout is responsive, with the profile photo and text side by side on larger screens and stacked on smaller devices.
 * The hero section includes a radial background behind the profile photo, and call-to-action buttons for navigating to the about page, projects page, and downloading the CV.
 * The profile photo is styled with a border and is contained within a circular frame, while the text uses a monospace font and bold styling for emphasis.
 */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { User, LayoutGrid, Download } from "lucide-react";

export default function Home() {
    return (
        <section className="w-full bg-brand-light hero-slant py-16 md:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left column: text with monospace font and bold */}
                <div className="flex flex-col items-center text-secondary-dark text-center order-2 md:order-1 lg:order-1">
                    <h1 className="text-header font-bold leading-tight">
                        Hello! <br />
                        I am Tomasz
                    </h1>
                    <p className="italic text-body mt-4 max-w-md mx-auto">
                        <span className="font-bold">Software Developer</span> specializing in <span className="font-bold">C#</span> and <span className="font-bold">.NET</span>, focused on building scalable business applications and modern web solutions.
                        Currently pursuing a degree in <span className="font-bold">Software Engineering</span>.
                    </p>

                    {/* Call-to-action buttons */}
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link href="/about"
                            className="flex items-center gap-2 px-6 py-3 bg-white text-secondary-dark font-bold rounded-lg hover:bg-secondary-dark hover:text-text-light transition-all shadow-md">
                            <User size={20} />
                            About Me
                        </Link>

                        <Link href="/projects"
                            className="flex items-center gap-2 px-6 py-3 bg-white text-secondary-dark font-bold rounded-lg hover:bg-secondary-dark hover:text-text-light transition-all shadow-md">
                            <LayoutGrid size={20} />
                            My Projects
                        </Link>

                        <Link href="/cv/TomaszKaczmarekSoftwareDeveloperCv.pdf"
                            download
                            className="flex items-center gap-2 px-6 py-3 bg-white text-secondary-dark font-bold rounded-lg hover:bg-secondary-dark hover:text-text-light transition-all shadow-md">
                            <Download size={20} />
                            Download CV
                        </Link>
                    </div>
                </div>

                {/* Right column: circular profile photo with radial background and border */}
                <div className="relative flex justify-center order-1 md:order-2">
                    
                    {/* Radial background behind the profile photo */}
                    <div className="absolute w-56 h-56 md:w-72 md:h-72 lg:w-[450px] lg:h-[450px] bg-radial rounded-full" />
                    <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-[400px] lg:h-[400px] border-4 border-secondary-dark rounded-full overflow-hidden z-10">
                        <Image
                            src="/images/ProfilePhoto.jpg"
                            alt="It's me!"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                            priority
                            className="object-contain relative z-10"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}