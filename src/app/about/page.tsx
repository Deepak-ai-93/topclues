import { PageSection } from "@/components/PageSection";

const sections = [
  {
    title: "Our Mission at Topclues solutions",
    description: "At Topclues solutions, a Junagadh-based agency, we provide innovative digital marketing solutions that deliver measurable results, empowering our clients to achieve their business goals.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "mission target",
  },
  {
    title: "Our Vision",
    description: "Topclues solutions aims to be the leading digital agency in Junagadh and beyond, recognized for our creativity, strategic expertise, and unwavering commitment to client success.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "vision future",
  },
  {
    title: "Our Values",
    description: "Innovation, integrity, and collaboration are the pillars of our work at Topclues solutions in Junagadh. We believe in transparent communication and a partnership approach.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "values core",
  },
  {
    title: "Meet Our Founder",
    description: "Jane Doe founded Topclues solutions in Junagadh with a passion for helping businesses navigate the complexities of the digital world. Her expertise drives our strategic vision.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "founder portrait",
  },
  {
    title: "A Culture of Excellence",
    description: "We foster a culture of continuous learning and excellence at Topclues solutions. Our Junagadh-based team is composed of passionate strategists, creatives, and technologists.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "team collaboration",
  },
  {
    title: "Community & Growth",
    description: "Topclues solutions is committed to growing alongside our clients and our Junagadh community, contributing positively to the digital ecosystem and fostering sustainable business growth.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "growth chart",
  },
];


export default function AboutPage() {
  return (
    <div className="flex flex-col">
       <section className="w-full min-h-screen flex items-center justify-center py-16 md:py-24 px-4">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">About Topclues solutions</h1>
              <p className="max-w-[600px] text-muted-foreground text-sm md:text-lg">
                We're a passionate team from Junagadh, dedicated to crafting digital excellence.
              </p>
            </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        {sections.map((section, index) => (
            <PageSection
              key={index}
              title={section.title}
              description={section.description}
              imageUrl={section.imageUrl}
              imageHint={section.imageHint}
              isImageLeft={index % 2 === 0}
            />
        ))}
      </div>
    </div>
  );
}
