'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { createPortal } from "react-dom";

export function ProjectsCarousel({ images }: { images: string[] }) {
    const [index, setIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    {/* --- Block scroll when expanded --- */ }
    useEffect(() => {
        if (isExpanded) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [isExpanded]);

    if (!images.length) return null;

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();               // Prevents click from bubbling up to the container
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    }

    return (
        <>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black/40 border border-white/10 group">
                <Image
                    key={index}
                    src={images[index]}
                    alt={`Project screenshot ${index + 1}`}
                    fill
                    className="object-contain p-2 transition-opacity duration-500 ease-in-out opacity-100"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div
                    className="absolute top-2 right-2 p-1.5 bg-black/60 rounded-full cursor-pointer hover:scale-110 transition-all z-[50]"
                    onClick={() => setIsExpanded(true)}
                >
                    <Maximize2 size={16} className="text-white" />
                </div>

                {images.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between px-2 transition-opacity duration-200">
                        <button
                            onClick={() => setIndex((index - 1 + images.length) % images.length)}
                            className="bg-black/60 hover:bg-black/80 text-white p-1.5 rounded-full backdrop-blur-sm transition-all"
                        >
                            <ChevronLeft size={16} />
                        </button>

                        <button
                            onClick={() => setIndex((index + 1) % images.length)}
                            className="bg-black/60 hover:bg-black/80 text-white p-1.5 rounded-full backdrop-blur-sm transition-all"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                )}
            </div>
            {/* --- Modal for expanded image --- */}
            {isExpanded && createPortal(
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
                    onClick={() => setIsExpanded(false)}
                >
                    <div className="relative w-full h-full" onClick={e => e.stopPropagation()}>
                        <Image
                            src={images[index]}
                            alt="Fullscreen project screenshot"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Close button */}
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white z-[110]"
                        onClick={() => setIsExpanded(false)}
                    >
                        <X size={32} />
                    </button>

                    {/* Navigation */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white z-[110]"
                            >
                                <ChevronLeft size={40} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white z-[110]"
                            >
                                <ChevronRight size={40} />
                            </button>
                        </>
                    )}

                    {/* Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium">
                        {index + 1} / {images.length}
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}