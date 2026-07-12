import { Linkedin, Github, Facebook, MessageCircle } from "lucide-react";

const SOCIAL_LINKS = [
    { id: 1, href: "https://linkedin.com/in/tomkacdev", icon: Linkedin, label: "LinkedIn" },
    { id: 2, href: "https://github.com/TomashKej", icon: Github, label: "GitHub" },
    { id: 3, href: "https://facebook.com/tomek.kaczmarek.5477/", icon: Facebook, label: "Facebook" },
    { id: 4, href: "https://wa.me/447535623284", icon: MessageCircle, label: "WhatsApp" }
];

/**
 * Footer renders compact social navigation shared across the portfolio.
 */
export default function Footer() {
    return (
        <footer className="relative z-10 mt-auto w-full border-t border-white/10 bg-brand-dark py-5 sm:py-7">
            <div className="flex w-full items-center justify-center px-4 sm:px-8 lg:px-12">
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 md:gap-8">
                    {SOCIAL_LINKS.map((link) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.id}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="footer-link"
                            >
                                <Icon size={22} />
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}
