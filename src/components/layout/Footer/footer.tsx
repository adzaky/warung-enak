import Link from "next/link";
import { FOOTER_DATA } from "./constant";
import { FacebookIcon, InstagramIcon, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const { navigate, social } = FOOTER_DATA;

  const ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
    Facebook: FacebookIcon,
    Instagram: InstagramIcon,
  };

  return (
    <footer>
      <div className="bg-gray-800 px-5 py-12 text-white">
        <div className="container grid items-center justify-center justify-items-center gap-8 lg:grid-cols-4 lg:items-start">
          <div className="flex flex-col items-center gap-2 lg:items-start">
            <Link href="/">
              <span className="text-3xl font-bold">Warung Enak</span>
            </Link>
            <p className="text-center text-gray-300 lg:text-start">
              Authentic Indonesian cuisine <br />
              served with pride and passion.
            </p>
          </div>

          {/* Navigate */}
          <div className="space-y-2">
            <h3 className="text-center text-2xl font-semibold lg:text-start">{navigate.title}</h3>
            <div className="flex flex-col items-center gap-2 lg:items-start">
              {navigate.data.map(({ name, url }) => (
                <Link key={name} href={url} className="text-sm text-gray-400 hover:text-white hover:underline">
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="space-y-2">
            <h3 className="text-center text-2xl font-semibold lg:text-start">{social.title}</h3>
            <div className="flex items-center justify-center gap-2 lg:items-start lg:justify-start">
              {social.data.map(({ name, url }) => {
                const Icon = ICON_MAP[name];
                return (
                  <Link target="_blank" key={name} href={url} className="opacity-90">
                    {Icon && <Icon size={24} />}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-2">
            <h3 className="text-center text-2xl font-semibold lg:text-start">Newsletter</h3>
            <div className="flex rounded-lg shadow-sm">
              <Input
                className="-me-px flex-1 rounded-lg rounded-e-none bg-white shadow-none focus-visible:z-10"
                placeholder="Your Email"
                type="email"
              />
              <Button className="rounded-s-none bg-orange-600 hover:bg-orange-700">
                <Send />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 bg-gray-800 py-5 text-white">
        <p className="text-center opacity-80">&copy; 2025 Warung Enak. All rights reserved.</p>
      </div>
    </footer>
  );
}
