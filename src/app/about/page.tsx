import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/FadeIn";

const teamMembers = [
  { name: "Jane Doe", title: "CEO & Founder" },
  { name: "John Smith", title: "Marketing Head" },
  { name: "Emily White", title: "SEO Strategist" },
  { name: "Michael Black", title: "Social Media Manager" },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <FadeIn>
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About Us</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
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
      </FadeIn>

      <section className="mt-20 md:mt-32">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
               <FadeIn key={member.name} className={`transition-all duration-1000 ease-in-out`} style={{ transitionDelay: `${index * 150}ms`}}>
                <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardHeader>
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
