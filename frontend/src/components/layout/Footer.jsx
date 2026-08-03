"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer
      className="bg-[#0C0C0C] border-t border-white/10 pt-16 pb-12 relative overflow-hidden text-gray-300"
      aria-label="Site Footer"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="flex flex-col">
            <Link
              href="/"
              className="flex items-center gap-3 mb-5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400] rounded-lg w-fit"
            >
              <img
                src="/images/aem-logo.jpeg"
                alt="Aadhya Earth Movers logo"
                className="w-10 h-10 rounded object-contain border border-white/10 group-hover:border-[#F4B400]/50 transition-all"
              />
              <span className="text-lg font-bold tracking-wide uppercase text-white group-hover:text-[#F4B400] transition-colors">
                Aadhya Earth Movers
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Hyderabad&apos;s trusted earthmoving, rock breaking, road grading, and heavy machinery contractor. Building solid foundations with precision and safety.
            </p>
            <div className="flex gap-3">
              {[
                { name: "Facebook", href: "#", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { name: "Twitter", href: "#", path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" },
                { name: "Instagram", href: "#", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={`Follow us on ${social.name}`}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#F4B400] hover:border-[#F4B400]/30 hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-white font-bold text-xs uppercase tracking-widest mb-6 border-l-2 border-[#F4B400] pl-3">
              Navigation
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#F4B400] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F4B400] rounded">
                  About Company
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#F4B400] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F4B400] rounded">
                  Services & Fleet
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-[#F4B400] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F4B400] rounded">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-[#F4B400] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F4B400] rounded">
                  Media & Site Photos
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-[#F4B400] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F4B400] rounded">
                  Careers & Hiring
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-white font-bold text-xs uppercase tracking-widest mb-6 border-l-2 border-[#F4B400] pl-3">
              Direct Contact
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#F4B400] mt-0.5 shrink-0" size={18} />
                <span className="text-gray-400 leading-snug">
                  Near Outer Ring Road, Hyderabad, Telangana, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#F4B400] shrink-0" size={18} />
                <a href="tel:+918179675631" className="text-gray-400 hover:text-white transition-colors">
                  +91 81796 75631
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#F4B400] shrink-0" size={18} />
                <a href="tel:+918008543529" className="text-gray-400 hover:text-white transition-colors">
                  +91 80085 43529
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#F4B400] shrink-0" size={18} />
                <a href="mailto:prashanthvk494@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  prashanthvk494@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-white font-bold text-xs uppercase tracking-widest mb-6 border-l-2 border-[#F4B400] pl-3">
              Updates
            </h2>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Get updates on equipment availability and ongoing site operations.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 text-sm">
                <CheckCircle2 size={18} />
                <span>Thank you! Subscribed successfully.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 px-3.5 py-2.5 rounded-lg text-sm focus:outline-none focus:border-[#F4B400] focus:ring-1 focus:ring-[#F4B400] transition-colors"
                    required
                    aria-label="Email address for newsletter"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  rightIcon={<ArrowRight size={16} />}
                  className="w-full uppercase font-bold text-xs tracking-wider"
                >
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Aadhya Earth Movers. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
