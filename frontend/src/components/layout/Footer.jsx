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
      className="bg-[#0A0A0A] border-t border-white/10 pt-12 sm:pt-16 pb-8 sm:pb-12 relative overflow-hidden text-gray-300"
      aria-label="Site Footer"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="flex flex-col">
            <Link
              href="/"
              className="flex items-center gap-3 mb-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400] rounded-lg w-fit p-1"
            >
              <img
                src="/images/aem-logo.jpeg"
                alt="Aadhya Earth Movers logo"
                className="w-10 h-10 rounded object-contain border border-white/10 group-hover:border-[#F4B400]/50 transition-all"
              />
              <span className="text-base sm:text-lg font-bold tracking-wide uppercase text-white group-hover:text-[#F4B400] transition-colors leading-tight">
                Aadhya Earth Movers
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-gray-300 mb-5 leading-relaxed">
              Hyderabad&apos;s trusted earthmoving, rock breaking, road grading, and heavy machinery contractor. Building solid foundations with precision and safety.
            </p>
            <div className="flex gap-2.5">
              {[
                { name: "Facebook", href: "#", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { name: "Twitter", href: "#", path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" },
                { name: "Instagram", href: "#", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={`Follow us on ${social.name}`}
                  className="w-10 h-10 min-w-[44px] min-h-[44px] rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#F4B400] hover:border-[#F4B400]/40 hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
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
            <h2 className="text-white font-bold text-xs uppercase tracking-widest mb-4 sm:mb-5 border-l-2 border-[#F4B400] pl-3">
              Quick Links
            </h2>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#F4B400] transition-colors inline-block py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F4B400] rounded">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#F4B400] transition-colors inline-block py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F4B400] rounded">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#F4B400] transition-colors inline-block py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F4B400] rounded">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-[#F4B400] transition-colors inline-block py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F4B400] rounded">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-[#F4B400] transition-colors inline-block py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F4B400] rounded">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#F4B400] transition-colors inline-block py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F4B400] rounded">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-white font-bold text-xs uppercase tracking-widest mb-4 sm:mb-5 border-l-2 border-[#F4B400] pl-3">
              Contact Information
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="text-[#F4B400] mt-0.5 shrink-0" size={17} />
                <span className="text-gray-300 leading-snug">
                  Hyderabad, Telangana
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="text-[#F4B400] shrink-0" size={17} />
                <a href="tel:+918179675631" className="text-gray-300 hover:text-white transition-colors py-0.5">
                  +91 8179675631
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="text-[#F4B400] shrink-0" size={17} />
                <a href="tel:+918008543529" className="text-gray-300 hover:text-white transition-colors py-0.5">
                  +91 8008543529
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-[#25D366] text-base shrink-0 font-bold">📱</span>
                <a href="https://wa.me/918499014721" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#25D366] transition-colors py-0.5">
                  WhatsApp: +91 8499014721
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="text-[#F4B400] shrink-0" size={17} />
                <a href="mailto:prashanthvk494@gmail.com" className="text-gray-300 hover:text-white transition-colors py-0.5 truncate">
                  prashanthvk494@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h2 className="text-white font-bold text-xs uppercase tracking-widest mb-4 sm:mb-5 border-l-2 border-[#F4B400] pl-3">
              Business Hours
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
              <p className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="font-medium text-white">Monday – Saturday</span>
                <span className="text-gray-400">6:00 AM – 10:00 PM</span>
              </p>
              <p className="flex justify-between pt-1">
                <span className="font-medium text-white">Sunday</span>
                <span className="text-rose-400 font-semibold">Closed</span>
              </p>
            </div>

            <div className="pt-2">
              {subscribed ? (
                <div className="flex items-center gap-2 p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs">
                  <CheckCircle2 size={16} />
                  <span>Thank you! Subscribed.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email for updates"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 px-3 py-2 rounded-xl text-xs focus:outline-none focus:border-[#F4B400] focus:ring-1 focus:ring-[#F4B400] transition-colors"
                    required
                    aria-label="Email address for updates"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    className="uppercase font-bold text-[10px] tracking-wider px-3"
                  >
                    Join
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Aadhya Earth Movers. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors py-1">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors py-1">
              Terms & Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors py-1">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
