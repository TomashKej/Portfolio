'use client';

import { Copy } from 'lucide-react';
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";

type CopyFieldProps = {
    value: string;
    label: string;
    icon?: React.ReactNode;
};

export default function CopyField({ value, label, icon }: CopyFieldProps)
{
    const { copy, copied } = useCopyToClipboard();
    const isCopied = copied === label;

    return (
        <div
            onClick={() => copy(value, label)}
            className="flex items-center gap-3 cursor-pointer group text-text-light hover:text-brand-light transition-all min-h-[24px] flex-wrap"
        >
            <span className="flex-shrink-0">
                {icon}
            </span>
            <span className="font-medium break-words max-w-full">{value}</span>

            <Copy size={16} className="opacity-0 group-hover:opacity-100 transition-all" />

            {isCopied && (
                <span className="ml-2 text-xs text-green-400 animate-pulse">
                    Copied !
                </span>
            )}
        </div>
    );
}