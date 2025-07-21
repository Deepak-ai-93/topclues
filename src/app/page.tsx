import Image from "next/image";
import { SlideIn } from "@/components/SlideIn";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TypewriterEffect } from "@/components/TypewriterEffect";

const sections = [
  {
    title: "Crafting Digital Presence with TopClues",
    description: "At TopClues, we build compelling brand narratives that resonate with your target audience, establishing a strong and memorable digital footprint.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "digital marketing",
  },
  {
    title: "Strategic SEO Mastery by TopClues",
    description: "Our data-driven SEO strategies at TopClues enhance your visibility on search engines, driving organic traffic and connecting you with customers actively seeking your solutions.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "seo chart",
  },
  {
    title: "Engaging Social Media with TopClues",
    description: "TopClues creates and manages dynamic social media campaigns that foster community, build brand loyalty, and drive engagement across all major platforms.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "social media",
  },
  {
    title: "High-Impact Content from TopClues",
    description: "From captivating blog posts to persuasive ad copy, content from TopClues is designed to capture attention and convert interest into action.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "writing content",
  },
  {
    title: "Precision PPC Campaigns by TopClues",
    description: "Maximize your ROI with our meticulously managed pay-per-click advertising. TopClues targets, tests, and optimizes for performance.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "advertising target",
  },
  {
    title: "Web Design & Development at TopClues",
    description: "TopClues designs and builds beautiful, responsive, and high-performing websites that offer a seamless user experience and drive conversions.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "website design",
  },
];


export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-20 md:py-32 flex items-center min-h-[calc(100vh-8rem)]">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                  TopClues: Digital Marketing That Drives Results.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-md text-sm">
                  We're a full-service digital agency dedicated to helping businesses succeed online.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/services" passHref>
                  <Button size="lg">Our Services</Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 space-y-24">
        {sections.map((section, index) => {
          const isImageLeft = index % 2 === 0;
          const content = (
             <>
              <SlideIn from={isImageLeft ? 'right' : 'left'}>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-4">{section.title}</h2>
                  <TypewriterEffect text={section.description} className="text-muted-foreground text-sm" />
                </div>
              </SlideIn>
              <SlideIn from={isImageLeft ? 'left' : 'right'}>
                <div className="flex justify-center">
                  <Image
                    src={section.imageUrl}
                    alt={section.title}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                    data-ai-hint={section.imageHint}
                  />
                </div>
              </SlideIn>
            </>
          );
           return (
            <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
              {isImageLeft ? [content.props.children[1], content.props.children[0]] : content}
            </div>
          )
        })}
      </div>
    </div>
  );
}
