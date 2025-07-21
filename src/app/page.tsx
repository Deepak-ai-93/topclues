import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageSection } from "@/components/PageSection";

const sections = [
  {
    title: "Crafting Digital Presence with Topclues solutions",
    description: "From our base in Junagadh, Topclues solutions builds compelling brand narratives that resonate with your target audience, establishing a strong and memorable digital footprint.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "digital marketing",
  },
  {
    title: "Strategic SEO Mastery by Topclues solutions",
    description: "Our data-driven SEO strategies at Topclues solutions, a proud Junagadh agency, enhance your visibility on search engines, driving organic traffic and connecting you with customers actively seeking your solutions.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "seo chart",
  },
  {
    title: "Engaging Social Media with Topclues solutions",
    description: "Topclues solutions, based in Junagadh, creates and manages dynamic social media campaigns that foster community, build brand loyalty, and drive engagement across all major platforms.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "social media",
  },
  {
    title: "High-Impact Content from Topclues solutions",
    description: "From captivating blog posts to persuasive ad copy, content from our Junagadh-based Topclues solutions team is designed to capture attention and convert interest into action.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "writing content",
  },
  {
    title: "Precision PPC Campaigns by Topclues solutions",
    description: "Maximize your ROI with our meticulously managed pay-per-click advertising. Topclues solutions, operating from Junagadh, targets, tests, and optimizes for performance.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "advertising target",
  },
  {
    title: "Web Design & Development at Topclues solutions",
    description: "Our Junagadh team at Topclues solutions designs and builds beautiful, responsive, and high-performing websites that offer a seamless user experience and drive conversions.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "website design",
  },
];


export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full flex items-center justify-center min-h-screen py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Topclues solutions: Junagadh's Digital Marketing Experts.
                </h1>
                <p className="max-w-[600px] text-muted-foreground text-sm md:text-base">
                  We're a full-service digital agency from Junagadh, dedicated to helping businesses succeed online.
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
