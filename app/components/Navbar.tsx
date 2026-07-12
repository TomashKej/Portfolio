'use client'; // This component is rendered on the client side
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Navbar provides responsive site navigation with a translucent modern shell.
 */

export default function Navbar()
{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-dark/72 backdrop-blur-2xl">
            <nav className="flex w-full items-center justify-between px-4 py-4 text-base font-bold sm:px-8 lg:px-12">
                {/* Logo or module Name */}
                <div className="leading-tight">
                    <Link href="/" className="nav-link text-lg">
                        <span className="text-gradient">Tomasz</span>
                        <span className="text-brand-light">.dev</span>
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="hidden items-center gap-7 leading-tight md:flex">
                    <Link href="/about" className="nav-link">About</Link> {" "}
                    <Link href="/projects" className="nav-link">Projects</Link> {" "}
                    <Link href="/contact" className="nav-link">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    className="rounded-lg border border-white/10 bg-white/5 p-2 text-text-light transition hover:bg-white/10 md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && ( 
                    <div className="absolute left-0 top-full flex w-full flex-col items-center gap-6 border-top-bottom bg-brand-dark/95 py-8 shadow-2xl backdrop-blur-2xl md:hidden">
                        <Link href="/about" className="nav-link text-xl" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link href="/projects" className="nav-link text-xl" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                        <Link href="/contact" className="nav-link text-xl" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    </div>  
                )}
            </nav>  
        </header>
    );
}
