"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mountain, Pickaxe, Hammer, Truck, Map, Compass, Pipelines, CheckCircle, ShieldCheck, X } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedService, setSelectedService] = useState(null);

  const categories = ["All", "Earthmoving", "Drainage & Utilities", "Fleet Rental", "Site Prep"];

  // ESC key and body scroll lock for detail modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedService(null);
    };
    if (selectedService) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedService]);

  const services = [
    {
      id: "excavation",
      title: "Earth Excavation & Trenching",
      category: "Earthmoving",
      description: "Precision deep and shallow earth excavation for building foundations, roads, and infrastructure projects using heavy-duty SANY excavators.",
      features: [
        "Heavy-duty bucket & arm excavation",
        "Foundation & basement digging",
        "Slope shaping and cut-and-fill operations",
        "Real-time site level checking"
      ],
      specs: "Bucket Capacity: 1.0 - 1.2 m³ | Depth: Up to 15m",
      icon: <Pickaxe size={32} className="text-[#F4B400]" />,
      image: "/images/sany-excavator-grading.jpg"
    },
    {
      id: "tipper-transport",
      title: "Bulk Material Transport & Tipper Fleet",
      category: "Fleet Rental",
      description: "High-capacity earth transport and debris removal using multi-axle heavy tipper dump trucks operating on rugged terrains.",
      features: [
        "16 m³ box capacity heavy tippers",
        "Fast cycle earth dumping",
        "Debris & gravel haulage",
        "Experienced site drivers"
      ],
      specs: "Fleet Size: 15+ Tippers | Payload: 28 Ton GVW",
      icon: <Truck size={32} className="text-[#F4B400]" />,
      image: "/images/tipper-fleet-dumping.jpg"
    },
    {
      id: "drainage-piping",
      title: "Underground Drainage & Pipe Laying",
      category: "Drainage & Utilities",
      description: "Comprehensive installation of high-density corrugated drainage pipes, stormwater conduits, and utility trenching.",
      features: [
        "HDPE & RCC pipe trench alignment",
        "Brick & concrete pipe bed support",
        "Sub-surface drainage system setup",
        "Gradient & slope precision"
      ],
      specs: "Pipe Dia: 150mm - 1200mm | Trenching Depth: Custom",
      icon: <Map size={32} className="text-[#F4B400]" />,
      image: "/images/trench-pipeline-laying.jpg"
    },
    {
      id: "chamber-manhole",
      title: "Concrete Catch Basins & Manhole Setup",
      category: "Drainage & Utilities",
      description: "Construction of heavy-duty precast and RCC inspection chambers, catch basins, and junction manholes for stormwater management.",
      features: [
        "Masonry & RCC chamber build",
        "Waterproofing & silt traps",
        "Multi-pipe junction integration",
        "Heavy traffic load covers"
      ],
      specs: "Custom dimensions | Reinforced masonry construction",
      icon: <Compass size={32} className="text-[#F4B400]" />,
      image: "/images/drainage-chamber-work.jpg"
    },
    {
      id: "rock-breaking",
      title: "Hydraulic Rock Breaking",
      category: "Earthmoving",
      description: "Controlled rock breaking and hard strata removal utilizing heavy excavator hydraulic hammers and rock breaker units.",
      features: [
        "Hard rock & granite fracturing",
        "Demolition of reinforced concrete",
        "Low vibration technique option",
        "Mining & quarry site work"
      ],
      specs: "Impact Rate: 400-800 bpm | Breaker Weight: 2,100 kg",
      icon: <Hammer size={32} className="text-[#F4B400]" />,
      image: "/images/sany-excavator-grading.jpg"
    },
    {
      id: "land-grading",
      title: "Land Leveling & Site Preparation",
      category: "Site Prep",
      description: "Complete land clearing, topsoil stripping, grading, and compaction for residential layouts, commercial parks, and highways.",
      features: [
        "Laser-assisted level grading",
        "Compactor roller finishing",
        "Soil stabilization",
        "Berm & embankment forming"
      ],
      specs: "Tolerance: ±10mm | Machinery: Dozers & Rollers",
      icon: <Mountain size={32} className="text-[#F4B400]" />,
      image: "/images/sany-excavator-grading.jpg"
    }
  ];

  const filteredServices = activeCategory === "All" 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12 sm:mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4B400]/10 border border-[#F4B400]/25 text-[#F4B400] text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-6"
        >
          <ShieldCheck size={16} /> Enterprise Earth Moving Solutions
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight"
        >
          Our Specialized <span className="text-[#F4B400]">Services</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed"
        >
          From heavy earth excavation and tipper transportation to underground drainage infrastructure and concrete inspection chambers — we power infrastructure across Telangana & Andhra Pradesh.
        </motion.p>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider min-h-[44px] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400] ${
                activeCategory === cat 
                  ? "bg-[#F4B400] text-black shadow-[0_4px_20px_rgba(244,180,0,0.3)] scale-105" 
                  : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group rounded-2xl overflow-hidden bg-[#141414] border border-white/10 hover:border-[#F4B400]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 xs:h-56 sm:h-60 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/30 to-transparent z-10" />
                    
                    <span className="absolute top-3.5 right-3.5 z-20 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/20 text-[#F4B400] text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {service.category}
                    </span>

                    <div className="absolute bottom-3.5 left-4 sm:left-6 z-20 p-2.5 bg-black/70 backdrop-blur-md rounded-xl border border-white/10">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-[#F4B400] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-5">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle size={14} className="text-[#F4B400] flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-[11px] text-gray-400 font-mono mb-4 truncate">
                      {service.specs}
                    </div>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-6 pt-0">
                  <div className="flex gap-2.5">
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="flex-1 py-3 px-3 bg-white/5 border border-white/10 hover:bg-[#F4B400] hover:text-black active:scale-[0.98] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all text-center min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
                    >
                      View Specs & Details
                    </button>
                    <Link 
                      href="/request-quote" 
                      className="px-4 py-3 bg-[#F4B400] text-black hover:bg-[#d99f00] active:scale-[0.98] text-xs font-bold rounded-xl transition-all flex items-center justify-center min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
                      title="Book Appointment"
                    >
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#141414] border border-white/10 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative my-auto"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-3.5 right-3.5 z-30 p-2 bg-black/70 text-white hover:text-[#F4B400] rounded-full backdrop-blur-md border border-white/10 min-w-[40px] min-h-[40px] flex items-center justify-center"
                aria-label="Close details dialog"
              >
                <X size={20} />
              </button>

              <div className="h-48 sm:h-60 relative">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 sm:left-6 right-12">
                  <span className="px-2.5 py-0.5 bg-[#F4B400] text-black text-[11px] font-bold uppercase tracking-wider rounded-sm">
                    {selectedService.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mt-1.5 leading-snug">
                    {selectedService.title}
                  </h2>
                </div>
              </div>

              <div className="p-5 sm:p-8 space-y-5">
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {selectedService.description}
                </p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#F4B400] mb-2.5">Key Operational Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 bg-white/5 p-2.5 rounded-lg border border-white/5">
                        <CheckCircle size={15} className="text-[#F4B400] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 bg-[#F4B400]/10 border border-[#F4B400]/20 rounded-xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F4B400] block mb-1">Equipment & Technical Spec</span>
                  <span className="text-xs sm:text-sm font-mono text-white leading-tight block">{selectedService.specs}</span>
                </div>

                <div className="flex flex-col xs:flex-row gap-3 pt-2">
                  <Link 
                    href="/request-quote"
                    className="flex-1 text-center py-3.5 bg-[#F4B400] text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-[#d99f00] active:scale-[0.98] transition-colors shadow-lg min-h-[48px] flex items-center justify-center"
                  >
                    Book Appointment
                  </Link>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="px-6 py-3.5 bg-white/10 text-white font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-white/20 active:scale-[0.98] transition-colors min-h-[48px]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
