import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

const sections = [
  {
    title: "Our Mission",
    description: "To provide innovative digital marketing solutions that deliver measurable results and empower our clients to achieve their business goals in an ever-evolving online landscape.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "mission target",
    imageLeft: true,
  },
  {
    title: "Our Vision",
    description: "To be the leading digital agency recognized for our creativity, strategic expertise, and unwavering commitment to client success and long-term partnership.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "vision future",
    imageLeft: false,
  },
  {
    title: "Our Values",
    description: "Innovation, integrity, and collaboration are the pillars of our work. We believe in transparent communication and a partnership approach to achieve shared success.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "values core",
    imageLeft: true,
  },
  {
    title: "Meet Our Founder",
    description: "Jane Doe founded TopClues with a passion for helping businesses navigate the complexities of the digital world. Her expertise drives our strategic vision.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "founder portrait",
    imageLeft: false,
  },
  {
    title: "A Culture of Excellence",
    description: "We foster a culture of continuous learning and excellence. Our team is composed of passionate strategists, creatives, and technologists dedicated to their craft.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "team collaboration",
    imageLeft: true,
  },
  {
    title: "Community & Growth",
    description: "We are committed to growing alongside our clients and our community, contributing positively to the digital ecosystem and fostering sustainable business growth.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "growth chart",
    imageLeft: false,
  },
];


export default function AboutPage() {
  return (
    <div className="flex flex-col">
       <section className="w-full py-20 md:py-32 flex items-center">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">About TopClues</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-lg text-sm">
                We're a passionate team dedicated to crafting digital excellence.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 space-y-24">
        {sections.map((section, index) => (
          <FadeIn key={index}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={!section.imageLeft ? 'md:order-last' : ''}>
                <h2 className="text-3xl font-bold tracking-tight mb-4">{section.title}</h2>
                <p className="text-muted-foreground text-sm">{section.description}</p>
              </div>
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
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
