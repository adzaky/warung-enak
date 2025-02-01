import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_INFO } from "./constants";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="container mx-auto bg-orange-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Visit Us Today</h2>
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="space-y-8">
              {CONTACT_INFO.map(({ title, icon, content }) => (
                <div key={title}>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <div className="flex items-center gap-2">
                      {icon}
                      <Link href="/" className="text-gray-600 hover:underline">
                        {content}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <form className="space-y-6">
              <Input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-orange-600 focus:outline-none"
              />
              <Input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-orange-600 focus:outline-none"
              />
              <Textarea
                placeholder="Message"
                rows={4}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-orange-600 focus:outline-none"
              />
              <Button className="w-full rounded-lg bg-orange-600 px-6 py-3 text-white transition hover:bg-orange-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
