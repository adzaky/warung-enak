import { Star } from "lucide-react";
import Image from "next/image";

export default function ReviewCard({
  name,
  img,
  rating,
  review,
}: {
  name: string;
  img: string;
  rating: number;
  review: string;
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <div className="mb-4 flex items-center">
        <Image src={img} className="h-12 w-12 rounded-full" alt="Customer" width={48} height={48} />
        <div className="ml-4">
          <h4 className="font-bold">{name}</h4>
          <div className="flex items-center">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="fill-orange-400 text-orange-400" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600">&quot;{review}&quot;</p>
    </div>
  );
}
