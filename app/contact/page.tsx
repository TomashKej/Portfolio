'use client';

import * as Accordion from "@radix-ui/react-accordion";
import { Mail, Phone, Linkedin, Github, Facebook, MessageCircle, Send, Loader2, CheckCircle2 } from 'lucide-react';
import CopyField from "../components/CopyField";
import { useContactForm } from "../hooks/useContactForm";

const SOCIAL_LINKS = [
    { id: 1, href: "https://linkedin.com/in/tomkacdev", icon: Linkedin, text: "Find me on LinkedIn!" },
    { id: 2, href: "https://facebook.com/tomek.kaczmarek.5477/", icon: Facebook, text: "Find me on Facebook!" },
    { id: 3, href: "https://github.com/TomashKej", icon: Github, text: "Find me on GitHub!" },
    { id: 4, href: "https://wa.me/447535623284", icon: MessageCircle, text: "Message me on WhatsApp!" },
];

export default function ContactPage() {
    const { formData, errors, isSubmitting, isSuccess, handleChange, handleSubmit } = useContactForm();

    return (
        <section className="w-full min-h-[80vh] flex items-center justify-center p-4 sm:p-6 lg:p-12">
            <div className="max-w-6xl w-full glass-card gradient-border grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-0 p-6 sm:p-10 lg:p-12">

                {/* --- Left Column - Social Links --- */}
                <div className="flex flex-col items-center justify-center lg:pr-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gradient text-center font-sans uppercase tracking-tight">
                        Connect
                    </h2>
                    <div className="space-y-6 w-full max-w-xs font-mono text-sm uppercase">
                        {SOCIAL_LINKS.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer"
                                    className="nav-link !flex items-center gap-5 p-2 rounded-lg hover:bg-white/5 transition-all">
                                    <Icon size={24} className="shrink-0 text-brand-light" />
                                    <span>{link.text}</span>
                                </a>
                            );
                        })}
                    </div>
                    {/* --- Accordion for Direct Contact Info --- */}
                    <Accordion.Root type="single" collapsible className="w-full max-w-xs mt-10 font-mono">
                        <Accordion.Item value="contact" className="border-t border-brand-light/10 pt-6">
                            <Accordion.Header>
                                <Accordion.Trigger className="text-brand-light text-xs font-bold hover:text-white transition-colors cursor-pointer w-full text-left uppercase tracking-widest">
                                    + Direct Contact Info
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className="mt-4 space-y-3 animate-in fade-in slide-in-from-top-2">
                                <CopyField value="tomasz.m.kaczmarek@gmail.com" label="Email" icon={<Mail size={16} />} />
                                <CopyField value="+44 7535 623284" label="Phone" icon={<Phone size={16} />} />
                            </Accordion.Content>
                        </Accordion.Item>
                    </Accordion.Root>
                </div>

                {/* --- Divider --- */  }
                <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-brand-light/20 to-transparent self-stretch mx-4" />
                <div className="lg:hidden flex items-center py-4">
                    <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-brand-light/20 to-transparent"></div>
                    <span className="px-4 text-brand-light/30 text-[10px] font-mono tracking-[0.3em] uppercase">Email Me</span>
                    <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-brand-light/20 to-transparent"></div>
                </div>

                {/* --- Right Column - Contact Form --- */   }
                <div className="flex flex-col items-center justify-center lg:pl-12 font-sans">
                    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
                        <div className="space-y-4">
                            <div className="flex flex-col gap-1.5">
                                <div className="flex justify-between items-end px-1">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-light/60 font-mono">Your Name</label>
                                    {errors.name && <span className="text-[10px] text-red-400 font-mono uppercase">{errors.name}</span>}
                                </div>
                                <input
                                    name="name" value={formData.name} onChange={handleChange} placeholder="John Doe"
                                    className={`w-full p-3 bg-brand-dark/50 border ${errors.name ? 'border-red-400/50' : 'border-brand-light/10'} text-white rounded focus:outline-none focus:border-brand-light/40 transition-all`}
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <div className="flex justify-between items-end px-1">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-light/60 font-mono">Email Address</label>
                                    {errors.email && <span className="text-[10px] text-red-400 font-mono uppercase">{errors.email}</span>}
                                </div>
                                <input
                                    name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com"
                                    className={`w-full p-3 bg-brand-dark/50 border ${errors.email ? 'border-red-400/50' : 'border-brand-light/10'} text-white rounded focus:outline-none focus:border-brand-light/40 transition-all`}
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <div className="flex justify-between items-end px-1">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-light/60 font-mono">Message</label>
                                    {errors.message && <span className="text-[10px] text-red-400 font-mono uppercase">{errors.message}</span>}
                                </div>
                                <textarea
                                    name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="What's on your mind?"
                                    className={`w-full p-3 bg-brand-dark/50 border ${errors.message ? 'border-red-400/50' : 'border-brand-light/10'} text-white rounded focus:outline-none focus:border-brand-light/40 transition-all resize-none`}
                                />
                            </div>
                        </div>

                        {errors.server && (
                            <p className="text-red-400 text-xs font-mono text-center mt-2 animate-pulse">
                                {errors.server}
                            </p>
                        )}

                        <button
                            type="submit" disabled={isSubmitting || isSuccess}
                            className={`w-full group relative flex justify-center items-center gap-3 px-8 py-4 font-bold rounded overflow-hidden transition-all
                                ${isSuccess ? 'bg-green-600 text-white' : 'bg-white text-brand-dark hover:bg-brand-light'} 
                                ${isSubmitting ? 'opacity-70 cursor-wait' : 'cursor-pointer hover-card'}`}
                        >
                            {isSubmitting ? <Loader2 className="animate-spin" size={18} /> :
                                isSuccess ? <CheckCircle2 size={18} /> : <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            <span className="uppercase tracking-widest text-xs">
                                {isSubmitting ? "Sending..." : isSuccess ? "Success!" : "Send Message"}
                            </span>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}