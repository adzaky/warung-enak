interface FooterLink {
  name: string;
  url: string;
}

interface FooterType {
  navigate: {
    title: string;
    data: FooterLink[];
  };
  social: {
    title: string;
    data: FooterLink[];
  };
}

export const FOOTER_DATA: FooterType = {
  navigate: {
    title: "Navigate",
    data: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Menu",
        url: "/#menu",
      },
      {
        name: "About",
        url: "/#about",
      },
      {
        name: "Testimonials",
        url: "/#testimonials",
      },
      {
        name: "Contact",
        url: "/#contact",
      },
    ],
  },
  social: {
    title: "Follow Us",
    data: [
      {
        name: "Facebook",
        url: "https://facebook.com",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com",
      },
    ],
  },
};
