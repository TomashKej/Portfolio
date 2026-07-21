'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { createPortal } from "react-dom";

/**
 * getProjectPreviewImage maps an original project screenshot to its lightweight generated preview.
 */
function getProjectPreviewImage(image: string) {
    if (!image.startsWith('/projectsResources/')) {
        return image;
    }

    return `/optimized${image.replace(/\.[^/.]+$/, '.webp')}`;
}

/**
 * ProjectsCarousel handles screenshot browsing and a fullscreen preview modal.
 */
export function ProjectsCarousel({ images }: { images: string[] }) {
    const [index, setIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    // Preserve the previous body overflow so closing the modal restores the page state.
    useEffect(() => {
        if (!isExpanded) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousOverflow;
        };
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
            <div className="group relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
                <Image
                    key={index}
                    src={getProjectPreviewImage(images[index])}
                    alt={`Project screenshot ${index + 1}`}
                    fill
                    loading="lazy"
                    decoding="async"
                    className="object-contain p-2 opacity-100 transition-opacity duration-500 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />

                <button
                    type="button"
                    aria-label="Open fullscreen screenshot"
                    className="absolute right-2 top-2 z-[50] rounded-full bg-black/60 p-1.5 text-white transition-all hover:scale-110 hover:bg-black/80"
                    onClick={() => setIsExpanded(true)}
                >
                    <Maximize2 size={16} />
                </button>

                {images.length > 1 && (
                    <div className="absolute inset-0 z-20 flex items-center justify-between px-3 pointer-events-none">
                        <button
                            type="button"
                            aria-label="Show previous project screenshot"
                            onClick={prevImage}
                            className="pointer-events-auto
                                       flex h-8 w-8 items-center justify-center
                                       rounded-full
                                       border border-white/30
                                       bg-black/80
                                       text-white
                                       shadow-lg
                                       transition-transform
                                       hover:scale-110
                                       hover:bg-black">
                            <ChevronLeft size={24} />
                        </button>

                        <button
                            type="button"
                            aria-label="Show next project screenshot"
                            onClick={nextImage}
                            className="pointer-events-auto
                                       flex h-8 w-8 items-center justify-center
                                       rounded-full
                                       border border-white/30
                                       bg-black/80
                                       text-white
                                       shadow-lg
                                       transition-transform
                                       hover:scale-110
                                       hover:bg-black">
                            <ChevronRight size={24} />
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
                            loading="eager"
                            quality={90}
                            className="object-contain"
                            sizes="100vw"
                        />
                    </div>

                    {/* Close button */}
                    <button
                        type="button"
                        aria-label="Close fullscreen screenshot"
                        className="absolute top-6 right-6 text-white/70 hover:text-white z-[110]"
                        onClick={() => setIsExpanded(false)}
                    >
                        <X size={32} />
                    </button>

                    {/* Navigation */}
                    {images.length > 1 && (
                        <>
                            <button
                                type="button"
                                aria-label="Show previous fullscreen screenshot"
                                onClick={prevImage}
                                className="absolute left-2 sm:left-4 top-1/2 z-[120]
                                           flex h-11 w-11 sm:h-14 sm:w-14
                                           -translate-y-1/2
                                           items-center justify-center
                                           rounded-full
                                           border border-white/30
                                           bg-black/80
                                           text-white
                                           shadow-xl
                                           transition-transform
                                           hover:scale-110
                                           hover:bg-black">
                                <ChevronLeft className="h-7 w-7 sm:h-10 sm:w-10" />
                            </button>

                            <button
                                type="button"
                                aria-label="Show next fullscreen screenshot"
                                onClick={nextImage}
                                className="absolute right-2 sm:right-4 top-1/2 z-[120]
                                           flex h-11 w-11 sm:h-14 sm:w-14
                                           -translate-y-1/2
                                           items-center justify-center
                                           rounded-full
                                           border border-white/30
                                           bg-black/80
                                           text-white
                                           shadow-xl
                                           transition-transform
                                           hover:scale-110
                                           hover:bg-black">
                                <ChevronRight className="h-7 w-7 sm:h-10 sm:w-10" />
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
