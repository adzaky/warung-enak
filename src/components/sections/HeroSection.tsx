import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="h-[560px]">
      <div className="absolute inset-0">
        <Image
          className="size-full object-cover"
          src="/images/hero-bg.jpg"
          alt="Traditional Indonesian warung restaurant interior with warm lighting and wooden furniture, photographic style"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container relative mx-auto flex h-full items-center px-5">
        <div className="max-w-2xl text-white">
          <h1 className="mb-6 text-5xl font-bold">Authentic Indonesian Home Cooking</h1>
          <p className="mb-8 text-xl">
            Experience the true taste of traditional Indonesian cuisine, made with love and served with pride.
          </p>
          <Button className="rounded-full bg-orange-600 px-8 py-3 text-white transition hover:bg-orange-700">
            Order Now
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
