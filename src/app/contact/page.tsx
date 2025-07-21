import { ContactForm } from "@/components/ContactForm";
import { SlideIn } from "@/components/SlideIn";
import Image from "next/image";
import { TypewriterEffect } from "@/components/TypewriterEffect";

const sections = [
  {
    title: "Let's Connect with TopClues",
    description: "We're here to answer your questions and explore how TopClues can help your business grow. Reach out to us, and let's start a conversation about your digital marketing needs.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "connection network",
  },
  {
    title: "Project Inquiry at TopClues",
    description: "Have a specific project in mind? Fill out our contact form with the details, and one of our strategists from TopClues will get back to you to discuss your vision and goals.",
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
    title: "Career Inquiries at TopClues",
    description: "Looking to join a team of passionate digital marketing experts? TopClues is always looking for talented individuals to join us. Send us your resume and portfolio.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "career path",
  },
  {
    title: "Our Location",
    description: "TopClues' office is located in the heart of Business City, but we serve clients globally. We are a remote-first company with a focus on delivering results, no matter where you are.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "city map",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
       <section className="w-full min-h-screen flex items-center py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">Get In Touch With TopClues</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-md text-sm">
                We'd love to hear from you.
              </p>
            </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
            <section className="grid md:grid-cols-2 gap-16 items-center min-h-screen w-full py-16 md:py-24">
              <SlideIn from="left">
                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl font-bold tracking-tight mb-4">Send Us a Message</h2>
                  <p className="text-muted-foreground text-sm mb-8">
                    Fill out the form below and we will get back to you as soon as possible.
                  </p>
                   <ContactForm />
                </div>
              </SlideIn>
              <SlideIn from="right">
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
              </SlideIn>
            </section>

        {sections.map((section, index) => {
          const isImageLeft = index % 2 === 0;
           const content = (
            <>
              <SlideIn from={isImageLeft ? 'right' : 'left'}>
                <div className="flex flex-col justify-center">
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
            <section key={index} className="grid md:grid-cols-2 gap-12 items-center min-h-screen w-full py-16 md:py-24">
               {isImageLeft ? [content.props.children[1], content.props.children[0]] : content}
            </section>
          )
        })}
      </div>
    </div>
  );
}
