import Image from "next/image";
import { SlideIn } from "@/components/SlideIn";
import { TypewriterEffect } from "@/components/TypewriterEffect";

const services = [
  {
    title: "Social Media Marketing by Topclues solutions",
    description: "Based in Junagadh, Topclues solutions elevates your brand's presence across social platforms with engaging content and strategic campaigns that foster community and drive growth.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "social media feed",
  },
  {
    title: "Creative Poster Design with Topclues solutions",
    description: "Our Junagadh-based design team at Topclues solutions creates visually stunning posters that capture attention and communicate your message effectively for events, promotions, and more.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "event poster",
  },
  {
    title: "Comprehensive Branding by Topclues solutions",
    description: "Topclues solutions in Junagadh helps you build a strong, memorable brand identity, from logo design to brand guidelines, ensuring consistency and recognition across all channels.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "brand logo",
  },
  {
    title: "Web Development at Topclues solutions",
    description: "Your website is your digital storefront. Our Junagadh-based team at Topclues solutions creates beautiful, intuitive, and responsive websites optimized for performance and conversion.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "web layout",
  },
  {
    title: "Eye-Catching Banner Design with Topclues solutions",
    description: "From our studio in Junagadh, Topclues solutions designs compelling digital and print banners that increase visibility and drive traffic to your campaigns and business.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "digital banner",
  },
  {
    title: "Professional Video Editing by Topclues solutions",
    description: "Our video editing services at Topclues solutions in Junagadh transform raw footage into polished, professional videos that tell your story and captivate your audience.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "video production",
  },
];


export default function ServicesPage() {
  return (
     <div className="flex flex-col">
       <section className="w-full min-h-screen flex items-center justify-center py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">Our Services at Topclues solutions</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-md text-sm">
                A comprehensive suite of digital marketing solutions from Topclues solutions in Junagadh.
              </p>
            </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        {services.map((service, index) => {
          const isImageLeft = index % 2 === 0;
          const content = (
            <>
              <SlideIn from={isImageLeft ? 'right' : 'left'}>
                <div className="flex flex-col justify-center text-center md:text-left">
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
            <section key={index} className="grid md:grid-cols-2 gap-12 items-center min-h-screen w-full py-16 md:py-24">
              {isImageLeft ? [content.props.children[1], content.props.children[0]] : content}
            </section>
          )
        })}
      </div>
    </div>
  );
}
