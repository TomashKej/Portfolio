'use client';
import { useState } from "react";

export function useCopyToClipboard(timeout = 1500)
{
    const [copied, setCopied] = useState<string | null>(null);

    const copy = async (text: string, label?: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(label ?? text);

            setTimeout(() => setCopied(null), timeout);
        }
        catch (err) {
            console.error("Clipboard copy failed", err);
        }
    };

    return { copy, copied };
}