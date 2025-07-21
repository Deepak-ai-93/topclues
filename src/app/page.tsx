import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-8rem)]">
      <section className="w-full py-20 md:py-32 lg:py-40 xl:py-56 flex-1 flex items-center">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                  <TypewriterEffect text="Digital Marketing That Drives Results." />
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-lg">
                  We're a full-service digital agency dedicated to helping businesses succeed online.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/services" passHref>
                  <Button size="lg">Our Services</Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
