import { Clock, MapPin, Phone } from "lucide-react";

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

interface ContactInfo {
  title: string;
  content: string;
  icon: React.ReactNode;
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
    review: "The best Indonesian food I've had! The Rendang is absolutely amazing.",
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

export const CONTACT_INFO: ContactInfo[] = [
  {
    title: "Location",
    content: "Jl. Sudirman No. 123\nJakarta Pusat, 10220",
    icon: <MapPin className="text-gray-600" />,
  },
  {
    title: "Hours",
    content: "Monday - Sunday: 10:00 AM - 10:00 PM",
    icon: <Clock className="text-gray-600" />,
  },
  {
    title: "Contact",
    content: "+62 21 5555 6666\ninfo@warungenak.com",
    icon: <Phone className="text-gray-600" />,
  },
];
