"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/Button";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0A]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black/50"
          : "bg-gradient-to-b from-black/80 to-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400] rounded-lg p-1"
          aria-label="Aadhya Earth Movers Homepage"
        >
          <img
            src="/images/aem-logo.jpeg"
            alt="Aadhya Earth Movers official company logo"
            className="h-10 w-auto rounded object-contain border border-white/10 group-hover:border-[#F4B400]/50 transition-all"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-wide uppercase text-white group-hover:text-[#F4B400] transition-colors leading-tight">
              Aadhya Earth Movers
            </span>
            <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase hidden sm:block">
              Earthwork & Infrastructure
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 text-xs font-semibold tracking-wider uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400] rounded px-2 ${
                  isActive
                    ? "text-[#F4B400]"
                    : "text-gray-300 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#F4B400] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <Link href="/request-quote" tabIndex={-1}>
            <Button
              variant="primary"
              size="sm"
              rightIcon={<ArrowUpRight size={16} />}
              className="ml-2 font-bold tracking-wider uppercase text-xs"
            >
              Get Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="lg:hidden text-gray-200 hover:text-white z-50 p-2 rounded-lg border border-white/10 bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[65px] z-40 bg-[#0A0A0A]/95 backdrop-blur-2xl border-t border-white/10 flex flex-col p-6 overflow-y-auto lg:hidden"
            >
              <div className="flex flex-col gap-3 mt-4">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-lg font-semibold tracking-wide uppercase px-4 py-3 rounded-xl border transition-colors ${
                        isActive
                          ? "bg-[#F4B400]/10 border-[#F4B400]/40 text-[#F4B400]"
                          : "border-white/5 text-gray-200 hover:bg-white/5 hover:text-white"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <div className="pt-6 border-t border-white/10 mt-2">
                  <Link
                    href="/request-quote"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full"
                  >
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full font-bold uppercase tracking-wider justify-center"
                    >
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
