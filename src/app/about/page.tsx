import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

const teamMembers = [
  { name: "Jane Doe", title: "CEO & Founder", avatar: "JD" },
  { name: "John Smith", title: "Marketing Head", avatar: "JS" },
  { name: "Emily White", title: "SEO Strategist", avatar: "EW" },
  { name: "Michael Black", title: "Social Media Manager", avatar: "MB" },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're a passionate team of strategists and creatives dedicated to helping businesses thrive in the digital world.
            </p>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">Our Mission</h2>
                <p className="text-muted-foreground">To provide innovative solutions that deliver measurable results and help our clients achieve their goals.</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Our Vision</h2>
                <p className="text-muted-foreground">To be the leading agency known for creativity, expertise, and commitment to client success.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/500x500.png"
              width={500}
              height={500}
              alt="Our Team"
              data-ai-hint="team collaboration"
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </FadeIn>

      <section className="mt-20 md:mt-32">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
               <FadeIn key={member.name} className={`transition-all duration-1000 ease-in-out`} style={{ transitionDelay: `${index * 150}ms`}}>
                <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardHeader>
                    <Avatar className="mx-auto h-24 w-24 mb-4">
                      <AvatarImage src={`https://placehold.co/100x100.png`} alt={member.name} data-ai-hint="professional headshot" />
                      <AvatarFallback>{member.avatar}</AvatarFallback>
                    </Avatar>
                    <CardTitle>{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.title}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
