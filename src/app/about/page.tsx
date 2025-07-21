import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const teamMembers = [
  { name: "Jane Doe", title: "CEO & Founder", avatar: "JD" },
  { name: "John Smith", title: "Head of Marketing", avatar: "JS" },
  { name: "Emily White", title: "Lead SEO Strategist", avatar: "EW" },
  { name: "Michael Black", title: "Social Media Manager", avatar: "MB" },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About Topclues Solutions</h1>
          <p className="text-lg text-muted-foreground mb-6">
            We are a passionate team of digital marketers, strategists, and creatives who are dedicated to helping businesses thrive in the digital world.
          </p>
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="text-muted-foreground">To provide innovative and effective digital marketing solutions that deliver measurable results and help our clients achieve their business goals.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="text-muted-foreground">To be the leading digital marketing agency known for our creativity, expertise, and commitment to client success.</p>
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

      <section className="mt-16 md:mt-24">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center border-2 border-transparent hover:border-primary transition-colors duration-300 shadow-lg hover:shadow-xl">
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
          ))}
        </div>
      </section>
    </div>
  );
}
