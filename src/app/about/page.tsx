import Image from "next/image";
import { SlideIn } from "@/components/SlideIn";
import { TypewriterEffect } from "@/components/TypewriterEffect";

const sections = [
  {
    title: "Our Mission at TopClues",
    description: "At TopClues, we provide innovative digital marketing solutions that deliver measurable results, empowering our clients to achieve their business goals in an ever-evolving online landscape.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "mission target",
  },
  {
    title: "Our Vision",
    description: "TopClues aims to be the leading digital agency, recognized for our creativity, strategic expertise, and unwavering commitment to client success and long-term partnership.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "vision future",
  },
  {
    title: "Our Values",
    description: "Innovation, integrity, and collaboration are the pillars of our work at TopClues. We believe in transparent communication and a partnership approach to achieve shared success.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "values core",
  },
  {
    title: "Meet Our Founder",
    description: "Jane Doe founded TopClues with a passion for helping businesses navigate the complexities of the digital world. Her expertise drives our strategic vision.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "founder portrait",
  },
  {
    title: "A Culture of Excellence",
    description: "We foster a culture of continuous learning and excellence at TopClues. Our team is composed of passionate strategists, creatives, and technologists dedicated to their craft.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "team collaboration",
  },
  {
    title: "Community & Growth",
    description: "TopClues is committed to growing alongside our clients and our community, contributing positively to the digital ecosystem and fostering sustainable business growth.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "growth chart",
  },
];


export default function AboutPage() {
  return (
    <div className="flex flex-col">
       <section className="w-full py-20 md:py-32 flex items-center">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">About TopClues</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-md text-sm">
                We're a passionate team at TopClues, dedicated to crafting digital excellence.
              </p>
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
