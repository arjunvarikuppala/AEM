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
      <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Video/Image Placeholder */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0 scale-110"
        >
          <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dark Overlay */}
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578593172078-0ce9fac5040e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
          />
        </motion.div>

        {/* Particles Effect */}
        {isMounted && (
          <div className="absolute inset-0 z-10 opacity-30 pointer-events-none">
            {[...Array(20)].map((_, i) => (
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
        <div className="container mx-auto px-6 relative z-20 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tighter mb-4">
               <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4B400] to-yellow-200">
                Safety. Quality. Trust.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-light"
          >
            Earthwork made clear — dependable excavation, hauling, and rentals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/request-quote"
              className="px-8 py-4 bg-[#F4B400] text-black font-bold uppercase tracking-wider text-sm hover:bg-[#d69f00] transition-all transform hover:-translate-y-1 w-full sm:w-auto text-center border border-transparent shadow-[0_0_20px_rgba(244,180,0,0.4)]"
            >
              Request Quote
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold uppercase tracking-wider text-sm hover:bg-white/10 hover:border-white transition-all transform hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-gray-400">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-[#F4B400] to-transparent"
          />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-[#111111] relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { target: 55, label: "Projects Completed", suffix: "+" },
              { target: 15, label: "Years Experience", suffix: "+" },
              { target: 45, label: "Heavy Machines", suffix: "+" },
              { target: 98, label: "Satisfaction Rate", suffix: "%" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-4xl md:text-6xl font-bold text-white mb-2 flex justify-center items-end">
                  <span className="stat-number text-[#F4B400]" data-target={stat.target}>0</span>
                  <span className="text-[#F4B400]">{stat.suffix}</span>
                </h3>
                <p className="text-gray-400 uppercase tracking-wider text-xs md:text-sm font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro / About Preview */}
      <section className="py-24 bg-[#0A0A0A] relative z-10 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#F4B400] text-sm font-medium mb-6 uppercase tracking-wider">
                <CheckCircle2 size={16} /> Welcome to AEM
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Precision & Power in Every Project.
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Based in Hyderabad, Aadhya Earth Movers is a premier construction and earth-moving company. We specialize in providing heavy-duty excavation, rock breaking, and machinery rental services to build the infrastructure of tomorrow.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Advanced & Well-Maintained Fleet",
                  "Expert Operators & Engineering Team",
                  "Strict Safety Standards",
                  "On-Time Project Delivery"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#F4B400]/20 flex items-center justify-center text-[#F4B400]">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/about" className="group inline-flex items-center gap-2 text-[#F4B400] font-semibold hover:text-white transition-colors">
                Discover Our Story
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F4B400]/20 to-transparent blur-3xl -z-10 rounded-full" />
              <div className="border-gradient p-1 rounded-xl overflow-hidden">
                <img
                  src="/images/img2.jpg"
                  alt="Aadhya Earth Movers excavation site"
                  className="w-full max-h-[550px] object-cover object-top rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative bg-[#F4B400]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Ready to start your next project?</h2>
          <p className="text-black/80 text-xl max-w-2xl mx-auto mb-10">
            Contact us today for a free consultation and get the best earth-moving solutions tailored for your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-gray-900 transition-colors shadow-xl"
          >
            <Phone size={20} /> Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
