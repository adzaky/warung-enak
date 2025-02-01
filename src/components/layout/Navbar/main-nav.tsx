"use client";

import Link from "next/link";
import MobileNav from "./mobile-nav";
import { NAV_LINKS } from "./constant";

export default function MainNav() {
  return (
    <header aria-label="navbar" className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto p-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/">
            <span className="text-lg font-bold text-orange-600">Warung Enak</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map(({ href, title }) => (
              <Link key={href} href={href} className="text-sm font-medium">
                {title}
              </Link>
            ))}
          </nav>
          <div className="flex lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
