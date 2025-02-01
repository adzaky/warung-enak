"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "../../layout/Navbar/constant";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="rounded-lg border p-2">
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle className="flex justify-center">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <span className="text-lg font-bold text-orange-600">Warung Enak</span>
            </Link>
          </SheetTitle>
          <SheetDescription asChild>
            <nav className="flex flex-col items-center gap-4 pt-2">
              {NAV_LINKS.map(({ href, title }) => (
                <Link
                  key={href}
                  href={href}
                  className="py-1 text-sm font-medium hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </Link>
              ))}
            </nav>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
