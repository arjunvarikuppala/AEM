"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    setIsMounted(true);
    // Stats Counter Animation
    const stats = document.querySelectorAll('.stat-number');

    stats.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'));

      ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(stat, {
            innerHTML: target,
            duration: 2.5,
            snap: { innerHTML: 1 },
            ease: "power2.out",
          });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Cinematic Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] sm:h-screen w-full flex items-center justify-center overflow-hidden pt-16 sm:pt-0">
        {/* Background Video/Image Placeholder */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0 scale-105"
        >
          <div className="absolute inset-0 bg-black/65 z-10" /> {/* Dark Overlay */}
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578593172078-0ce9fac5040e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
          />
        </motion.div>

        {/* Particles Effect */}
        {isMounted && (
          <div className="absolute inset-0 z-10 opacity-30 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                  opacity: Math.random()
                }}
                animate={{
                  y: [null, Math.random() * 800 - 100],
                  opacity: [null, Math.random(), 0]
                }}
                transition={{
                  duration: 10 + Math.random() * 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        )}

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-20 text-center mt-12 sm:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4B400] via-yellow-300 to-amber-100">
                Safety. Quality. Trust.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-base sm:text-xl md:text-2xl text-gray-200 max-w-2xl sm:max-w-3xl mx-auto mb-8 sm:mb-10 font-normal leading-relaxed px-2"
          >
            Earthwork made clear — dependable excavation, hauling, and rentals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 max-w-md sm:max-w-none mx-auto"
          >
            <Link
              href="/request-quote"
              className="px-7 py-3.5 bg-[#F4B400] text-black font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-[#d69f00] active:scale-[0.98] transition-all transform rounded-xl w-full sm:w-auto text-center border border-transparent shadow-[0_4px_20px_rgba(244,180,0,0.3)] min-h-[48px] flex items-center justify-center"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="px-7 py-3.5 bg-white/5 border border-white/20 text-white font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-white/15 hover:border-white/40 active:scale-[0.98] transition-all transform rounded-xl w-full sm:w-auto text-center min-h-[48px] flex items-center justify-center"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-20 hidden xs:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-400 font-mono">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[2px] h-8 sm:h-10 bg-gradient-to-b from-[#F4B400] to-transparent rounded-full"
          />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 sm:py-16 lg:py-20 bg-[#111111] border-y border-white/10 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            {[
              { target: 55, label: "Projects Completed", suffix: "+" },
              { target: 15, label: "Years Experience", suffix: "+" },
              { target: 45, label: "Heavy Machines", suffix: "+" },
              { target: 98, label: "Satisfaction Rate", suffix: "%" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1.5 flex justify-center items-end">
                  <span className="stat-number text-[#F4B400]" data-target={stat.target}>0</span>
                  <span className="text-[#F4B400]">{stat.suffix}</span>
                </h3>
                <p className="text-gray-400 uppercase tracking-wider text-[11px] sm:text-xs md:text-sm font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro / About Preview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0A0A0A] relative z-10 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4B400]/10 border border-[#F4B400]/30 text-[#F4B400] text-xs sm:text-sm font-medium mb-4 sm:mb-6 uppercase tracking-wider">
                <CheckCircle2 size={16} /> Welcome to AEM
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
                Precision & Power in Every Project.
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Based in Hyderabad, Aadhya Earth Movers is a premier construction and earth-moving company. We specialize in providing heavy-duty excavation, rock breaking, and machinery rental services to build the infrastructure of tomorrow.
              </p>

              <ul className="space-y-3.5 mb-8 sm:mb-10">
                {[
                  "Advanced & Well-Maintained Fleet",
                  "Expert Operators & Engineering Team",
                  "Strict Safety Standards",
                  "On-Time Project Delivery"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#F4B400]/20 flex items-center justify-center text-[#F4B400] shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-gray-200 text-sm sm:text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/about" className="group inline-flex items-center gap-2 text-[#F4B400] font-semibold hover:text-white transition-colors text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400] rounded p-1">
                Discover Our Story
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:w-1/2 relative w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F4B400]/20 to-transparent blur-3xl -z-10 rounded-full" />
              <div className="border border-white/10 p-1.5 rounded-2xl bg-[#141414] shadow-2xl">
                <img
                  src="/images/img2.jpg"
                  alt="Aadhya Earth Movers excavation site"
                  className="w-full h-64 xs:h-80 sm:h-96 lg:h-[480px] object-cover object-center rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 relative bg-[#F4B400] text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">Ready to start your next project?</h2>
          <p className="text-black/85 text-base sm:text-xl max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
            Contact us today for a free consultation and get the best earth-moving solutions tailored for your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 bg-black text-white px-8 py-4 font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-gray-900 active:scale-[0.98] transition-all rounded-xl shadow-xl min-h-[48px]"
          >
            <Phone size={18} /> Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
