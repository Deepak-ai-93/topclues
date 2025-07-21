import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users, FileText, Mail, MousePointerClick, Code } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    title: "SEO Optimization",
    description: "Boost your visibility on search engines and attract organic traffic with our expert SEO strategies.",
    icon: Search,
  },
  {
    title: "Social Media Marketing",
    description: "Engage with your audience and build a strong brand presence across all major social media platforms.",
    icon: Users,
  },
  {
    title: "Content Creation",
    description: "From blog posts to videos, we create compelling content that captivates your audience and tells your brand's story.",
    icon: FileText,
  },
  {
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with targeted email campaigns that deliver the right message at the right time.",
    icon: Mail,
  },
  {
    title: "PPC Advertising",
    description: "Get instant traffic and measurable ROI with our data-driven pay-per-click advertising campaigns.",
    icon: MousePointerClick,
  },
  {
    title: "Web Design & Development",
    description: "We design and build beautiful, responsive, and user-friendly websites that convert visitors into customers.",
    icon: Code,
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Our Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We offer a comprehensive suite of digital marketing services to help your business succeed.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col border-2 border-transparent hover:border-primary transition-colors duration-300 shadow-lg hover:shadow-xl">
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
        ))}
      </div>
    </div>
  );
}
