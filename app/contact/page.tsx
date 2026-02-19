'use client';

import * as Accordion from "@radix-ui/react-accordion";
import { Mail, Phone, Linkedin, Github, Facebook, MessageCircle } from 'lucide-react';
import CopyField from "../components/CopyField";

const SOCIAL_LINKS = [
    { id: 1, href: "https://linkedin.com/in/tomkacdev", icon: Linkedin, text: "Find me on LinkedIn!" },
    { id: 2, href: "https://facebook.com/tomek.kaczmarek.5477/", icon: Facebook, text: "Find me on Facebook!" },
    { id: 3, href: "https://github.com/TomashKej", icon: Github, text: "Find me on GitHub!" },
    { id: 4, href: "https://wa.me/447535623284", icon: MessageCircle, text: "Message me on WhatsApp!" },
];

export default function ContactPage() {
    return (
        <section className="w-full min-h-[80vh] flex items-center justify-center p-4 sm:p-6 font-mono">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-[1fr_2px_1fr] gap-12 lg:gap-0 items-stretch">

                {/* LEFT COLUMN */}
                <div className="flex flex-col items-center py-6 lg:py-8 lg:pr-16 glasscard">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white">
                        Contact me
                    </h2>

                    <div className="space-y-8 w-full max-w-xs">
                        {SOCIAL_LINKS.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nav-link !flex items-center gap-6"
                                >
                                    <Icon size={32} className="shrink-0" />
                                    <span className="text-base md:text-lg leading-tight">
                                        {link.text}
                                    </span>
                                </a>
                            );
                        })}
                    </div>

                    <Accordion.Root type="single" collapsible className="w-full max-w-xs mt-8">
                        <Accordion.Item value="contact">

                            <Accordion.Header>
                                <Accordion.Trigger className="text-brand-light font-bold nav-link cursor-pointer">
                                    Prefer direct contact? Click here!
                                </Accordion.Trigger>
                            </Accordion.Header>

                            <Accordion.Content className="mt-4 glass-card gradient-border p-4 hover-card">
                                <CopyField
                                    value="t.kaczmarek@sofdev.co.uk"
                                    label="Email"
                                    icon={<Mail size={18}/>}
                                />

                                <CopyField
                                    value="+44 7535 623284"
                                    label="Phone"
                                    icon={<Phone size={18} />}
                                />
                            </Accordion.Content>

                        </Accordion.Item>
                    </Accordion.Root>

                </div>

                {/* DIVIDER */}
                <div className="hidden lg:block w-[2px] bg-gray-800 opacity-40 self-stretch" />

                {/* RIGHT COLUMN */}
                <div className="flex flex-col items-center justify-center py-6 lg:py-8 lg:pl-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white">
                        Send me an email
                    </h2>

                    <form action="/api/contact" method="POST" className="w-full max-w-md space-y-6">

                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-text-light">
                                Your name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="John Doe"
                                className="w-full p-2 bg-[#E6EAF0] text-secondary-dark rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-light transition-all shadow-inner"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-text-light">
                                Your email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="john@example.com"
                                className="w-full p-2 bg-[#E6EAF0] text-secondary-dark rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-light transition-all shadow-inner"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-text-light">
                                Your message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                placeholder="Write your message..."
                                className="w-full p-4 bg-[#E6EAF0] text-secondary-dark rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-light transition-all resize-y shadow-inner"
                            />
                        </div>

                        <div className="pt-4 flex justify-center lg:justify-start">
                            <button
                                type="submit"
                                className="flex items-center gap-2 px-6 py-3 bg-secondary-dark text-text-light font-bold rounded-lg border-2 border-brand-light hover:bg-brand-light hover:text-brand-dark transition-all shadow-md cursor-pointer"                            >
                                Send Message
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
}