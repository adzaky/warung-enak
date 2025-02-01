interface MenuItem {
  name: string;
  desc: string;
  price: number;
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
