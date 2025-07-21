"use client";

import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface WhatsAppButtonProps {
    phoneNumber: string;
    message?: string;
}

export function WhatsAppButton({ phoneNumber, message }: WhatsAppButtonProps) {
    const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

    return (
        <TooltipProvider delayDuration={0}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-1.001z"
                            />
                        </svg>
                        <span className="sr-only">Contact on WhatsApp</span>
                    </Link>
                </TooltipTrigger>
                <TooltipContent side="left" sideOffset={10}>
                    <p>Contact on WhatsApp</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
