import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users, FileText, Mail, MousePointerClick, Code } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    title: "SEO Optimization",
    description: "Boost your search engine visibility and attract organic traffic.",
    icon: Search,
  },
  {
    title: "Social Media Marketing",
    description: "Engage your audience and build a strong brand presence online.",
    icon: Users,
  },
  {
    title: "Content Creation",
    description: "Compelling content that captivates your audience and tells your story.",
    icon: FileText,
  },
  {
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with targeted email campaigns.",
    icon: Mail,
  },
  {
    title: "PPC Advertising",
    description: "Instant traffic and measurable ROI with data-driven PPC campaigns.",
    icon: MousePointerClick,
  },
  {
    title: "Web Design",
    description: "Beautiful, responsive websites that convert visitors into customers.",
    icon: Code,
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <FadeIn>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We offer a comprehensive suite of digital marketing services.
          </p>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <FadeIn key={service.title} className={`transition-all duration-1000 ease-in-out`} style={{ transitionDelay: `${index * 150}ms`}}>
            <Card className="flex flex-col h-full shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-md">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
