'use client'

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectsCarousel({ images }: { images: string[] }) {
    const [index, setIndex] = useState(0);

    if (!images.length) return null;

    return (
        <div className="relative w-full h-48 rounded-lg overflow-hidden bg-black/40 border border-white/10">
            <Image
                src={images[index]}
                alt="Project screenshot"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
            />

            {images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between px-2">
                    <button
                        onClick={() => setIndex((index - 1 + images.length) % images.length)}
                        className="bg-black/60 p-1 rounded"
                    >
                        <ChevronLeft size={16} />
                    </button>

                    <button
                        onClick={() => setIndex((index + 1) % images.length)}
                        className="bg-black/60 p-1 rounded"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            )}
        </div>
    );
}