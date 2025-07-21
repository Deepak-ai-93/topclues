import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { TypewriterEffect } from "@/components/TypewriterEffect";

const services = [
  {
    title: "SEO Optimization",
    description: "We elevate your search engine ranking to capture organic traffic. Our strategies are built on comprehensive keyword research, on-page optimization, and quality link building to ensure you are seen by the customers who need you most.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "search analysis",
    imageLeft: true,
  },
  {
    title: "Social Media Marketing",
    description: "Forge a powerful brand presence across social platforms. We develop and execute tailored strategies to engage your audience, foster a loyal community, and drive meaningful conversations that convert.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "social engagement",
    imageLeft: false,
  },
  {
    title: "Content Creation",
    description: "Tell your brand’s story with compelling content that captivates and converts. From insightful blog articles to engaging video scripts, we produce content that resonates with your audience and reinforces your authority.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "creative writing",
    imageLeft: true,
  },
  {
    title: "Email Marketing",
    description: "Nurture leads and drive customer loyalty with strategic email campaigns. We design, automate, and optimize your email marketing to deliver personalized messages that encourage action and build lasting relationships.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "email inbox",
    imageLeft: false,
  },
  {
    title: "PPC Advertising",
    description: "Achieve instant visibility and measurable ROI with our data-driven pay-per-click campaigns. We manage your budget effectively across platforms like Google Ads and social media to drive targeted traffic and maximize conversions.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "data graph",
    imageLeft: true,
  },
  {
    title: "Web Design",
    description: "Your website is your digital storefront. We create beautiful, intuitive, and responsive websites that not only look great but are also optimized for performance, user experience, and conversion.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "web layout",
    imageLeft: false,
  },
];


export default function ServicesPage() {
  return (
     <div className="flex flex-col">
       <section className="w-full py-20 md:py-32 flex items-center">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Our Services</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-lg text-sm">
                A comprehensive suite of digital marketing solutions.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 space-y-24">
        {services.map((service, index) => (
          <FadeIn key={index}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={!service.imageLeft ? 'md:order-last' : ''}>
                <h2 className="text-3xl font-bold tracking-tight mb-4">{service.title}</h2>
                <TypewriterEffect text={service.description} className="text-muted-foreground text-sm" />
              </div>
              <div className="flex justify-center">
                 <Image
                  src={service.imageUrl}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                  data-ai-hint={service.imageHint}
                />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
