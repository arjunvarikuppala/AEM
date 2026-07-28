"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mountain, Pickaxe, Hammer, Truck, Map, Compass, Pipelines, CheckCircle, ShieldCheck, X } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedService, setSelectedService] = useState(null);

  const categories = ["All", "Earthmoving", "Drainage & Utilities", "Fleet Rental", "Site Prep"];

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
      icon: <Pickaxe size={36} className="text-[#F4B400]" />,
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
      icon: <Truck size={36} className="text-[#F4B400]" />,
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
      icon: <Map size={36} className="text-[#F4B400]" />,
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
      icon: <Compass size={36} className="text-[#F4B400]" />,
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
      icon: <Hammer size={36} className="text-[#F4B400]" />,
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
      icon: <Mountain size={36} className="text-[#F4B400]" />,
      image: "/images/sany-excavator-grading.jpg"
    }
  ];

  const filteredServices = activeCategory === "All" 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="container mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4B400]/10 border border-[#F4B400]/20 text-[#F4B400] text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <ShieldCheck size={16} /> Enterprise Earth Moving Solutions
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
        >
          Our Specialized <span className="text-[#F4B400]">Services</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed"
        >
          From heavy earth excavation and tipper transportation to underground drainage infrastructure and concrete inspection chambers — we power infrastructure across Telangana & Andhra Pradesh.
        </motion.p>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-[#F4B400] text-black shadow-[0_0_20px_rgba(244,180,0,0.3)] scale-105" 
                  : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group rounded-2xl overflow-hidden bg-[#121318] border border-white/10 hover:border-[#F4B400]/60 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-black/30 to-transparent z-10" />
                    
                    <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/70 backdrop-blur-md border border-white/20 text-[#F4B400] text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {service.category}
                    </span>

                    <div className="absolute bottom-4 left-6 z-20 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="p-7">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#F4B400] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                          <CheckCircle size={14} className="text-[#F4B400] flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-[11px] text-gray-400 font-mono mb-6">
                      {service.specs}
                    </div>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-0">
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="flex-1 py-3 bg-white/5 border border-white/10 hover:bg-[#F4B400] hover:text-black text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all text-center"
                    >
                      View Specs & Details
                    </button>
                    <Link 
                      href="/request-quote" 
                      className="px-4 py-3 bg-[#F4B400] text-black hover:bg-[#d99f00] text-xs font-bold rounded-lg transition-all flex items-center justify-center"
                      title="Request Quote"
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
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#16181F] border border-white/10 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-30 p-2 bg-black/60 text-white hover:text-[#F4B400] rounded-full backdrop-blur-md border border-white/10"
              >
                <X size={20} />
              </button>

              <div className="h-64 relative">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16181F] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 bg-[#F4B400] text-black text-xs font-bold uppercase tracking-wider rounded-sm">
                    {selectedService.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2">
                    {selectedService.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {selectedService.description}
                </p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#F4B400] mb-3">Key Operational Highlights</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedService.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5">
                        <CheckCircle size={16} className="text-[#F4B400]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-[#F4B400]/10 border border-[#F4B400]/20 rounded-xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F4B400] block mb-1">Equipment & Technical Spec</span>
                  <span className="text-sm font-mono text-white">{selectedService.specs}</span>
                </div>

                <div className="flex gap-4 pt-2">
                  <Link 
                    href="/request-quote"
                    className="flex-1 text-center py-3.5 bg-[#F4B400] text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-[#d69f00] transition-colors shadow-lg"
                  >
                    Book Service Now
                  </Link>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="px-6 py-3.5 bg-white/10 text-white font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-white/20 transition-colors"
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
