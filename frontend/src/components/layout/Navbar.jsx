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

  // Lock body scroll when mobile menu is active & listen for ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu automatically when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleNavClick = (e, href) => {
    setIsMobileMenuOpen(false);

    const [targetPath, hash] = href.split("#");
    const isCurrentPage = pathname === targetPath || (targetPath === "" && pathname === "/");

    if (isCurrentPage) {
      e.preventDefault();
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
          ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/50"
          : "bg-gradient-to-b from-black/90 via-black/50 to-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400] rounded-lg p-1"
          aria-label="Aadhya Earth Movers Homepage"
        >
          <img
            src="/images/aem-logo.jpeg"
            alt="Aadhya Earth Movers official company logo"
            className="h-9 w-auto sm:h-10 rounded object-contain border border-white/10 group-hover:border-[#F4B400]/50 transition-all"
          />
          <div className="flex flex-col">
            <span className="text-sm xs:text-base sm:text-lg font-bold tracking-wide uppercase text-white group-hover:text-[#F4B400] transition-colors leading-tight truncate">
              Aadhya Earth Movers
            </span>
            <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase hidden sm:block">
              Earthwork & Infrastructure
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 text-xs font-semibold tracking-wider uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400] rounded px-2.5 ${
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
                    className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-[#F4B400] rounded-full"
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
              Book Appointment
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="lg:hidden text-gray-200 hover:text-white z-50 min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-lg border border-white/10 bg-white/5 active:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
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
              className="fixed inset-0 top-[60px] z-50 bg-[#0A0A0A]/95 backdrop-blur-2xl border-t border-white/10 flex flex-col p-5 sm:p-6 overflow-y-auto overscroll-contain touch-pan-y lg:hidden"
            >
              <div className="flex flex-col gap-2.5 mt-2">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-base sm:text-lg font-semibold tracking-wide uppercase px-4 py-3 rounded-xl border min-h-[48px] flex items-center transition-colors touch-manipulation cursor-pointer select-none ${
                        isActive
                          ? "bg-[#F4B400]/10 border-[#F4B400]/40 text-[#F4B400]"
                          : "border-white/5 text-gray-200 hover:bg-white/5 hover:text-white"
                      }`}
                      onClick={(e) => handleNavClick(e, link.href)}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <div className="pt-5 border-t border-white/10 mt-2">
                  <Link
                    href="/request-quote"
                    onClick={(e) => handleNavClick(e, "/request-quote")}
                    className="block w-full touch-manipulation cursor-pointer select-none"
                  >
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full min-h-[48px] font-bold uppercase tracking-wider justify-center"
                    >
                        Book Appointment
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
