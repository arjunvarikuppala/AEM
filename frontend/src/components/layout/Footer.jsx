"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, CheckCircle2, MessageCircle } from "lucide-react";
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-12 sm:mb-16">
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
                {
                  name: "WhatsApp",
                  href: "https://wa.me/918499014721",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  icon: <MessageCircle size={19} className="text-[#25D366]" />,
                  hoverStyle: "hover:border-[#25D366]/50 hover:bg-[#25D366]/10",
                },
                {
                  name: "Email",
                  href: "mailto:prashanthvk494@gmail.com",
                  icon: <Mail size={19} className="text-[#F4B400]" />,
                  hoverStyle: "hover:border-[#F4B400]/50 hover:bg-[#F4B400]/10",
                },
                {
                  name: "Phone",
                  href: "tel:+918179675631",
                  icon: <Phone size={19} className="text-[#F4B400]" />,
                  hoverStyle: "hover:border-[#F4B400]/50 hover:bg-[#F4B400]/10",
                },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.target}
                  rel={item.rel}
                  aria-label={`Contact us via ${item.name}`}
                  className={`w-10 h-10 min-w-[44px] min-h-[44px] rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400] ${item.hoverStyle}`}
                >
                  {item.icon}
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
