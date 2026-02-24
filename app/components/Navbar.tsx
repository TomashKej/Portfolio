'use client'; // This component is rendered on the client side
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Navbar component for site navigation
 * @returns A navigation bar with links to different pages
 */

export default function Navbar()
{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-secondary-dark z-50 relative border-b border-gray-800">
            <nav className="text-xl font-bold mx-auto flex items-center justify-between px-4 py-6 max-2-7xl">
                {/* Logo or module Name */}
                <div className="leading-tight">
                    <Link href="/" className="nav-link">Tomasz.dev</Link>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex gap-6 leading-tight">
                    <Link href="/about" className="nav-link">About</Link> {" "}
                    <Link href="/projects" className="nav-link">Projects</Link> {" "}
                    <Link href="/contact" className="nav-link">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-text-light focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && ( 
                    <div className="absolute top-full left-0 w-full bg-secondary-dark flex flex-col items-center gap-6 py-8 border-top-bottom md:hidden shadow-xl">
                        <Link href="/about" className="nav-link text-2xl" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link href="/projects" className="nav-link text-2xl" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                        <Link href="/contact" className="nav-link text-2xl" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    </div>  
                )}
            </nav>  
        </header>
    );
}