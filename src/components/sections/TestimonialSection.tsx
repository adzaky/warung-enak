import { Marquee } from "@/components/ui/marquee";
import ReviewCard from "@/components/ui/review-card";
import { TESTIMONIALS } from "./constants";

export default function TestimonialSection() {
  return (
    <section id="testimonials">
      <div className="container mx-auto px-5 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">What Our Customers Say</h2>
        <Marquee className="[--duration:20s]">
          {TESTIMONIALS.map(({ name, img, rating, review }) => (
            <ReviewCard key={name} name={name} img={img} rating={rating} review={review} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
