import Image from "next/image";
import { SlideIn } from "@/components/SlideIn";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TypewriterEffect } from "@/components/TypewriterEffect";

const sections = [
  {
    title: "Crafting Digital Presence",
    description: "We build compelling brand narratives that resonate with your target audience, establishing a strong and memorable digital footprint.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "digital marketing",
    imageLeft: false,
  },
  {
    title: "Strategic SEO Mastery",
    description: "Our data-driven SEO strategies enhance your visibility on search engines, driving organic traffic and connecting you with customers actively seeking your solutions.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "seo chart",
    imageLeft: true,
  },
  {
    title: "Engaging Social Media",
    description: "We create and manage dynamic social media campaigns that foster community, build brand loyalty, and drive engagement across all major platforms.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "social media",
    imageLeft: false,
  },
  {
    title: "High-Impact Content",
    description: "From captivating blog posts to persuasive ad copy, our content is designed to capture attention and convert interest into action.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "writing content",
    imageLeft: true,
  },
  {
    title: "Precision PPC Campaigns",
    description: "Maximize your ROI with our meticulously managed pay-per-click advertising. We target, test, and optimize for performance.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "advertising target",
    imageLeft: false,
  },
  {
    title: "Web Design & Development",
    description: "We design and build beautiful, responsive, and high-performing websites that offer a seamless user experience and drive conversions.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "website design",
    imageLeft: true,
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
                  Digital Marketing That Drives Results.
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
        {sections.map((section, index) => (
           <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
            <SlideIn from={section.imageLeft ? 'right' : 'left'}>
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-4">{section.title}</h2>
                <TypewriterEffect text={section.description} className="text-muted-foreground text-sm" />
              </div>
            </SlideIn>
            <SlideIn from={section.imageLeft ? 'left' : 'right'}>
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
          </div>
        ))}
      </div>
    </div>
  );
}
