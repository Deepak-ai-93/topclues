import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground mb-8">
            We'd love to hear from you. Fill out the form or use our contact details below.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-md">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <a href="mailto:contact@topclues.com" className="text-muted-foreground hover:underline">contact@topclues.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-md">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <a href="tel:+15551234567" className="text-muted-foreground hover:underline">+1 (555) 123-4567</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="bg-primary text-primary-foreground p-3 rounded-md">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Office</h3>
                <p className="text-muted-foreground">123 Marketing St, Business City, 54321</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
