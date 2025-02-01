import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MENU_ITEMS } from "./constants";
import Image from "next/image";

export default function MenuSection() {
  return (
    <section id="menu" className="bg-orange-50">
      <div className="container mx-auto px-5 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Signature Dishes</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {MENU_ITEMS.map(({ name, desc, price, img }) => (
            <Card key={name}>
              <div className="overflow-hidden rounded-t-xl">
                <Image
                  src={img}
                  alt={name}
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover object-center"
                />
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{name}</CardTitle>
                  <CardDescription className="text-gray-600">{desc}</CardDescription>
                </CardHeader>
              </div>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-orange-600">Rp {price}</span>
                  <button className="rounded-full bg-orange-600 px-4 py-2 text-sm text-white">Add to Cart</button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
