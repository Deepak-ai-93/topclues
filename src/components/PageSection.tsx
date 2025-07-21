"use client";

import Image from "next/image";
import { SlideIn } from "@/components/SlideIn";
import { TypewriterEffect } from "@/components/TypewriterEffect";

interface PageSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  isImageLeft: boolean;
}

export function PageSection({ title, description, imageUrl, imageHint, isImageLeft }: PageSectionProps) {
  const imageColumn = (
    <SlideIn key="image" from={isImageLeft ? "left" : "right"}>
      <div className="flex justify-center">
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={400}
          className="rounded-lg object-cover"
          data-ai-hint={imageHint}
        />
      </div>
    </SlideIn>
  );

  const textColumn = (
    <SlideIn key="text" from={isImageLeft ? "right" : "left"}>
      <div className="flex flex-col justify-center text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{title}</h2>
        <TypewriterEffect text={description} className="text-muted-foreground text-sm md:text-base" />
      </div>
    </SlideIn>
  );

  return (
    <section className="grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full py-16 md:py-24">
      {isImageLeft ? [imageColumn, textColumn] : [textColumn, imageColumn]}
    </section>
  );
}
