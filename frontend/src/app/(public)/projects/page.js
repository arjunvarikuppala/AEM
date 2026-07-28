"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Drainage & Utilities", "Earthmoving", "Commercial", "Roadways"];

  const projects = [
    {
      id: 1,
      title: "Sub-Surface Drainage & HDPE Pipeline Network",
      category: "Drainage & Utilities",
      location: "Outer Ring Road Sector, Hyderabad",
      client: "Telangana Infrastructure Development",
      scope: "Trenching, HDPE corrugated pipe laying, concrete catch basin & manhole setup",
      image: "/images/trench-pipeline-laying.jpg",
      height: "h-96"
    },
    {
      id: 2,
      title: "Bulk Earth Excavation & Ground Leveling",
      category: "Earthmoving",
      location: "HITEC City Phase III",
      client: "Commercial Park Developer",
      scope: "Cut-and-fill grading, basement excavation using SANY heavy excavator",
      image: "/images/sany-excavator-grading.jpg",
      height: "h-72"
    },
    {
      id: 3,
      title: "Multi-Axle Tipper Earth Haulage Operation",
      category: "Roadways",
      location: "Patancheru Industrial Expressway",
      client: "National Highway Contractors",
      scope: "Soil hauling, gravel dumping, and sub-base transport with 15+ tipper trucks",
      image: "/images/tipper-fleet-dumping.jpg",
      height: "h-80"
    },
    {
      id: 4,
      title: "Concrete Inspection Chamber & Silt Basin Build",
      category: "Drainage & Utilities",
      location: "Gachibowli Infrastructure Hub",
      client: "Urban Utility Board",
      scope: "RCC catch basin, storm water junction chambers, and underground conduits",
      image: "/images/drainage-chamber-work.jpg",
      height: "h-96"
    },
    {
      id: 5,
      title: "Hard Rock Breaking & Demolition",
      category: "Commercial",
      location: "Secunderabad Hill Site",
      client: "Private Real Estate Enterprise",
      scope: "Granite rock fracturing with Volvo hydraulic breakers and site clearance",
      image: "/images/sany-excavator-grading.jpg",
      height: "h-72"
    },
    {
      id: 6,
      title: "Industrial Layout Compaction & Grading",
      category: "Roadways",
      location: "Nalgonda Highway Link",
      client: "State Highway Authority",
      scope: "Compactor finish, roadbed grading, and sub-grade density compliance",
      image: "/images/sany-excavator-grading.jpg",
      height: "h-80"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <section className="container mx-auto px-6 mb-12 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Featured <span className="text-[#F4B400]">Projects</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light"
        >
          Proven track record of landmark excavation, pipeline laying, and earthmoving projects across Telangana.
        </motion.p>
        
        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === filter 
                  ? "bg-[#F4B400] text-black shadow-[0_0_20px_rgba(244,180,0,0.3)] scale-105" 
                  : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Masonry Grid */}
      <section className="container mx-auto px-6">
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="relative group overflow-hidden rounded-2xl break-inside-avoid bg-[#121318] border border-white/10 shadow-xl"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full ${project.height} object-cover group-hover:scale-108 transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#F4B400] text-[10px] font-bold uppercase tracking-widest mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-xs flex items-center gap-1.5 mb-3">
                    <MapPin size={12} className="text-[#F4B400]" /> {project.location}
                  </p>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5 text-xs text-gray-300 mb-4">
                    <span className="text-[#F4B400] font-semibold block mb-0.5">Scope of Work:</span>
                    {project.scope}
                  </div>
                  <Link 
                    href="/request-quote"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F4B400] hover:text-white transition-colors"
                  >
                    Request Similar Project <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
