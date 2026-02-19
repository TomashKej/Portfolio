import { Linkedin, Github, Facebook, MessageCircle } from "lucide-react";

const SOCIAL_LINKS = [
    { id: 1, href: "https://linkedin.com/in/tomkacdev", icon: Linkedin, label: "LinkedIn" },
    { id: 2, href: "https://github.com/TomashKej", icon: Github, label: "GitHub" },
    { id: 3, href: "https://facebook.com/tomek.kaczmarek.5477/", icon: Facebook, label: "Facebook" },
    { id: 4, href: "https://wa.me/447535623284", icon: MessageCircle, label: "WhatsApp" }
];

export default function Footer() {
    return (
        <footer className="w-full bg-secondary-dark py-6 mt-auto border-t border-gray-800">
            <div className="flex justify-center items-center gap-8 md:gap-20">
                {SOCIAL_LINKS.map((link) => { 
                    const Icon = link.icon;
                    return (
                        <a key={link.id}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="nav-link"
                              >
                              <Icon size={40} className="md:w-10 md:h-10" />
                        </a>  
                    );
                })}
            </div>
        </footer>
    );
}