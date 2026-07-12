'use client';
import { useEffect, useRef, useState } from "react";

/**
 * useCopyToClipboard copies text and exposes a temporary label for copied-state feedback.
 */
export function useCopyToClipboard(timeout = 1500)
{
    const [copied, setCopied] = useState<string | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const copy = async (text: string, label?: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(label ?? text);

            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => setCopied(null), timeout);
        }
        catch (err) {
            console.error("Clipboard copy failed", err);
        }
    };

    return { copy, copied };
}
