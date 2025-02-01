import HeroSection from "@/components/sections/HeroSection";
import MenuSection from "@/components/sections/MenuSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function Home() {
  return (
    <div className="space-y-2">
      <HeroSection />
      <MenuSection />
      <TestimonialSection />
    </div>
  );
}
