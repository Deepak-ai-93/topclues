import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

const sections = [
  {
    title: "Let's Connect",
    description: "We're here to answer your questions and explore how we can help your business grow. Reach out to us, and let's start a conversation about your digital marketing needs.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "connection network",
  },
  {
    title: "Project Inquiry",
    description: "Have a specific project in mind? Fill out our contact form with the details, and one of our strategists will get back to you to discuss your vision and goals.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "project blueprint",
  },
  {
    title: "Partnership Opportunities",
    description: "We believe in the power of collaboration. If you're interested in partnering with TopClues, we'd love to hear your ideas and explore potential synergies.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "handshake deal",
  },
   {
    title: "Career Inquiries",
    description: "Looking to join a team of passionate digital marketing experts? We are always looking for talented individuals to join us. Send us your resume and portfolio.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "career path",
  },
  {
    title: "Our Location",
    description: "Our office is located in the heart of Business City, but we serve clients globally. We are a remote-first company with a focus on delivering results, no matter where you are.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "city map",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
       <section className="w-full py-20 md:py-32 flex items-center">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Get In Touch</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-lg text-sm">
                We'd love to hear from you.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 space-y-24">
         <FadeIn>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground text-sm mb-8">
                  Fill out the form below and we will get back to you as soon as possible.
                </p>
                 <ContactForm />
              </div>
              <div className="flex justify-center">
                 <Image
                  src="https://placehold.co/600x400.png"
                  alt="Contact Us"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                  data-ai-hint="contact form"
                />
              </div>
            </div>
          </FadeIn>

        {sections.map((section, index) => (
          <FadeIn key={index}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 0 ? 'md:order-last' : ''}>
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
