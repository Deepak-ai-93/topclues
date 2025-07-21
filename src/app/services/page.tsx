import Image from "next/image";
import { SlideIn } from "@/components/SlideIn";
import { TypewriterEffect } from "@/components/TypewriterEffect";

const services = [
  {
    title: "SEO Optimization by TopClues",
    description: "TopClues elevates your search engine ranking to capture organic traffic. Our strategies are built on comprehensive keyword research, on-page optimization, and quality link building to ensure you are seen by the customers who need you most.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "search analysis",
  },
  {
    title: "Social Media Marketing with TopClues",
    description: "Forge a powerful brand presence across social platforms with TopClues. We develop and execute tailored strategies to engage your audience, foster a loyal community, and drive meaningful conversations that convert.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "social engagement",
  },
  {
    title: "Content Creation at TopClues",
    description: "Tell your brand’s story with compelling content from TopClues that captivates and converts. From insightful blog articles to engaging video scripts, we produce content that resonates with your audience and reinforces your authority.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "creative writing",
  },
  {
    title: "Email Marketing by TopClues",
    description: "Nurture leads and drive customer loyalty with strategic email campaigns from TopClues. We design, automate, and optimize your email marketing to deliver personalized messages that encourage action and build lasting relationships.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "email inbox",
  },
  {
    title: "PPC Advertising with TopClues",
    description: "Achieve instant visibility and measurable ROI with TopClues' data-driven pay-per-click campaigns. We manage your budget effectively across platforms like Google Ads and social media to drive targeted traffic and maximize conversions.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "data graph",
  },
  {
    title: "Web Design by TopClues",
    description: "Your website is your digital storefront. TopClues creates beautiful, intuitive, and responsive websites that not only look great but are also optimized for performance, user experience, and conversion.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "web layout",
  },
];


export default function ServicesPage() {
  return (
     <div className="flex flex-col">
       <section className="w-full py-20 md:py-32 flex items-center">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">Our Services at TopClues</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-md text-sm">
                A comprehensive suite of digital marketing solutions from TopClues.
              </p>
            </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 space-y-24">
        {services.map((service, index) => {
          const isImageLeft = index % 2 === 0;
          const content = (
            <>
              <SlideIn from={isImageLeft ? 'right' : 'left'}>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-4">{service.title}</h2>
                  <TypewriterEffect text={service.description} className="text-muted-foreground text-sm" />
                </div>
              </SlideIn>
              <SlideIn from={isImageLeft ? 'left' : 'right'}>
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
