import { ContactForm } from "@/components/ContactForm";
import { SlideIn } from "@/components/SlideIn";
import Image from "next/image";
import { PageSection } from "@/components/PageSection";

const sections = [
  {
    title: "Let's Connect with Topclues solutions",
    description: "We're here to answer your questions and explore how our Junagadh-based company, Topclues solutions, can help your business grow. Reach out to us, and let's start a conversation.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "connection network",
  },
  {
    title: "Project Inquiry at Topclues solutions",
    description: "Have a specific project in mind? Fill out our contact form, and one of our strategists from our Junagadh team at Topclues solutions will get back to you to discuss your vision.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "project blueprint",
  },
  {
    title: "Partnership Opportunities",
    description: "We believe in the power of collaboration. If you're interested in partnering with Topclues solutions, our Junagadh office would love to hear your ideas and explore potential synergies.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "handshake deal",
  },
   {
    title: "Career Inquiries at Topclues solutions",
    description: "Looking to join a team of passionate digital marketing experts in Junagadh? Topclues solutions is always looking for talented individuals to join us. Send us your resume.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "career path",
  },
  {
    title: "Our Location",
    description: "Topclues solutions' office is located in the heart of Junagadh, but we serve clients globally. We are proud of our local roots and focus on delivering results, no matter where you are.",
    imageUrl: "http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png",
    imageHint: "city map",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
       <section className="w-full min-h-screen flex items-center justify-center py-16 md:py-24 px-4">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">Get In Touch With Topclues solutions</h1>
              <p className="max-w-[600px] text-muted-foreground text-sm md:text-lg">
                We'd love to hear from you. Our team in Junagadh is ready to help.
              </p>
            </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
            <section className="grid md:grid-cols-2 gap-8 md:gap-16 items-center min-h-screen w-full py-16 md:py-24">
              <SlideIn key="form-text" from="left">
                <div className="flex flex-col justify-center text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Send Us a Message</h2>
                  <p className="text-muted-foreground text-base md:text-lg mb-8">
                    Fill out the form below and we will get back to you as soon as possible.
                  </p>
                   <ContactForm />
                </div>
              </SlideIn>
              <SlideIn key="form-image" from="right">
                <div className="flex justify-center">
                   <Image
                    src="http://topcluessolutions.in/wp-content/uploads/2025/02/img-e1740125173491.png"
                    alt="Contact Us"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                    data-ai-hint="contact form"
                  />
                </div>
              </SlideIn>
            </section>

        {sections.map((section, index) => (
          <PageSection
            key={index}
            title={section.title}
            description={section.description}
            imageUrl={section.imageUrl}
            imageHint={section.imageHint}
            isImageLeft={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
}
