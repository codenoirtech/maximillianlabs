import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/social-icons";

const offices = [
  {
    city: "London",
    phone: "(+44) 0207 870 5794",
    address: "77 New Cavendish Street, Fitzrovia, W1W 6XB",
  },
  {
    city: "Surrey",
    phone: "(+44) 01483 277 547",
    address: "41 Smithbrook Kilns, Guildford, GU6 8JJ",
  },
  {
    city: "New York",
    phone: "+1 (212) 372 7640",
    address: "136 Madison Avenue, Manhattan, NY 10016",
  },
];

export function ContactInfo() {
  return (
    <section className="bg-[#f4f4f5] px-6 py-16 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="space-y-10">
          <div>
            <p className="mb-2 text-sm text-zinc-500">Phone number</p>
            <p className="text-2xl font-bold tracking-tight text-black md:text-3xl">
              (+44) 0207 870 5794
            </p>
          </div>

          <div>
            <p className="mb-2 text-sm text-zinc-500">E-mail address</p>
            <p className="text-lg font-bold text-black md:text-xl">
              info@creativebranddesign.co.uk
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm text-zinc-500">Follow us</p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-black transition-opacity hover:opacity-60"
              >
                <LinkedinIcon />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="text-black transition-opacity hover:opacity-60"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="text-black transition-opacity hover:opacity-60"
              >
                <FacebookIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="divide-y divide-zinc-300">
          {offices.map((office) => (
            <div
              key={office.city}
              className="flex items-start justify-between gap-4 py-6 first:pt-0 last:pb-0"
            >
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-lg font-bold text-black">{office.city}</h3>
                  <p className="text-sm text-black">{office.phone}</p>
                </div>
                <p className="mt-1 text-sm text-black">{office.address}</p>
              </div>
              <Link
                href="#"
                aria-label={`View ${office.city} office`}
                className="mt-1 shrink-0 text-black transition-opacity hover:opacity-60"
              >
                <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
