interface MenuItem {
  name: string;
  desc: string;
  price: number;
  img: string;
}

interface Testimonial {
  name: string;
  rating: number;
  review: string;
  img: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    name: "Nasi Goreng Special",
    desc: "Traditional Indonesian fried rice with prawns and chicken",
    price: 35000,
    img: "/images/menu-item1.png",
  },
  {
    name: "Rendang Sapi",
    desc: "Slow-cooked beef in coconut milk and spices",
    price: 45000,
    img: "/images/menu-item2.png",
  },
  {
    name: "Gado-Gado",
    desc: "Mixed vegetables with peanut sauce dressing",
    img: "/images/menu-item3.png",
    price: 25000,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Johnson",
    rating: 5,
    review: "The best Indonesian food I&apos;ve had! The Rendang is absolutely amazing.",
    img: "/images/customer-1.jpg",
  },
  {
    name: "Michael Chen",
    rating: 5,
    review: "Authentic taste and great service. Will definitely come back!",
    img: "/images/customer-2.jpg",
  },
  {
    name: "John Doe",
    rating: 5,
    review: "Their Nasi Goreng is to die for! Highly recommended!",
    img: "/images/customer-3.jpg",
  },
];
