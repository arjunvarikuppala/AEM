"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, Building2, Tag, X, ExternalLink, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ["All", "Drainage & Utilities", "Earthmoving", "Commercial", "Roadways", "Survey & Leveling"];

  const projects = [
    {
      id: 1,
      title: "Sub-Surface Drainage & HDPE Pipeline Network",
      category: "Drainage & Utilities",
      location: "Outer Ring Road Sector, Hyderabad",
      client: "Telangana Infrastructure Development",
      scope: "Trenching, HDPE corrugated pipe laying, concrete catch basin & manhole setup",
      image: "/images/trench-pipeline-laying.jpg"
    },
    {
      id: 2,
      title: "Bulk Earth Excavation & Ground Leveling",
      category: "Earthmoving",
      location: "HITEC City Phase III",
      client: "Commercial Park Developer",
      scope: "Cut-and-fill grading, basement excavation using SANY heavy excavator",
      image: "/images/sany-excavator-grading.jpg"
    },
    {
      id: 3,
      title: "Multi-Axle Tipper Earth Haulage Operation",
      category: "Roadways",
      location: "Patancheru Industrial Expressway",
      client: "National Highway Contractors",
      scope: "Soil hauling, gravel dumping, and sub-base transport with 15+ tipper trucks",
      image: "/images/tipper-fleet-dumping.jpg"
    },
    {
      id: 4,
      title: "Concrete Inspection Chamber & Silt Basin Build",
      category: "Drainage & Utilities",
      location: "Gachibowli Infrastructure Hub",
      client: "Urban Utility Board",
      scope: "RCC catch basin, storm water junction chambers, and underground conduits",
      image: "/images/drainage-chamber-work.jpg"
    },
    {
      id: 5,
      title: "Topographical Land Survey & Total Station Axis Marking",
      category: "Survey & Leveling",
      location: "Financial District / Kokapet High-Rise Sector",
      client: "Commercial Skyscraper Developers",
      scope: "High-precision Sokkia optical & laser leveling, structural column grid alignment, benchmark setting",
      image: "/images/land-surveying-total-station.jpg"
    },
    {
      id: 6,
      title: "Heavy Asphalt Road Compaction & Sub-Base Finish",
      category: "Roadways",
      location: "Tellapur Luxury Villa Township",
      client: "Premium Gated Community Developers",
      scope: "Ingersoll-Rand heavy vibratory roller compaction of bituminous surface layer and road density testing",
      image: "/images/asphalt-road-compaction.jpg"
    },
    {
      id: 7,
      title: "Bituminous Asphalt Paver Road Laying",
      category: "Roadways",
      location: "Neopolis Expressway Township",
      client: "Urban Infrastructure Authority",
      scope: "Automated hot-mix asphalt paver operations, edge grading, manual joint sealing, and smooth surface leveling",
      image: "/images/asphalt-paver-laying.jpg"
    },
    {
      id: 8,
      title: "Deep Pit Excavation & Rock Anchor Grouting",
      category: "Earthmoving",
      location: "Knowledge City Commercial Complex",
      client: "Enterprise Infrastructure Corp",
      scope: "Pit slope stabilization, rock anchor hole drilling, manual cement grouting, supported by SANY excavators & crane",
      image: "/images/deep-foundation-rock-grouting.jpg"
    },
    {
      id: 9,
      title: "Highway Shoulder Widening & Lane Extension",
      category: "Roadways",
      location: "Outer Ring Road Expansion",
      client: "State Highway Authority",
      scope: "Shoulder widening, sub-base compaction, and bituminous finishing for an arterial trunk route",
      image: "/images/highway-shoulder-widening.jpg"
    },
    {
      id: 10,
      title: "Reinforced Earth Retaining Wall Construction",
      category: "Commercial",
      location: "IT SEZ Campus, Gachibowli",
      client: "Smart City Developers",
      scope: "Retaining wall earth stabilization, backfill compaction, and retaining mesh installation for commercial podium landscaping",
      image: "/images/retaining-wall-construction.jpg"
    },
    {
      id: 11,
      title: "Stormwater Culvert Excavation & Bedding Works",
      category: "Drainage & Utilities",
      location: "Industrial Estate, Miyapur",
      client: "Municipal Drainage Board",
      scope: "Trench excavation, reinforced concrete culvert bedding, and slope protection for flood management",
      image: "/images/stormwater-culvert-excavation.jpg"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const getCategoryCount = (category) => {
    if (category === "All") return projects.length;
    return projects.filter(p => p.category === category).length;
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <section className="container mx-auto px-6 mb-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm md:text-base uppercase tracking-[0.4em] text-[#F4B400] font-semibold mb-4"
        >
          Safety. Quality. Trust.
        </motion.p>
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
          {filters.map(filter => {
            const count = getCategoryCount(filter);
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === filter 
                    ? "bg-[#F4B400] text-black shadow-[0_0_20px_rgba(244,180,0,0.3)] scale-105" 
                    : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{filter}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                  activeFilter === filter ? "bg-black/20 text-black font-extrabold" : "bg-white/10 text-gray-400"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="relative group overflow-hidden rounded-2xl bg-[#121318] border border-white/10 hover:border-[#F4B400]/40 shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative w-full h-56 overflow-hidden bg-black/40">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-[#F4B400] border border-[#F4B400]/30 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F4B400] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    
                    <div className="space-y-1.5 mb-4 text-xs text-gray-400">
                      <p className="flex items-center gap-2">
                        <MapPin size={14} className="text-[#F4B400] shrink-0" />
                        <span>{project.location}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Building2 size={14} className="text-[#F4B400] shrink-0" />
                        <span>Client: <strong className="text-gray-200 font-medium">{project.client}</strong></span>
                      </p>
                    </div>

                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-xs text-gray-300 mb-6">
                      <span className="text-[#F4B400] font-semibold block mb-1">Scope of Work:</span>
                      <p className="line-clamp-2 text-gray-400">{project.scope}</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#F4B400] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                      View Details & Scope <ArrowRight size={14} />
                    </span>
                    <span className="p-1.5 rounded-lg bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-[#F4B400] group-hover:text-black transition-colors">
                      <ExternalLink size={14} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#121318] border border-white/15 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative my-8"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:text-[#F4B400] transition-colors border border-white/10"
              >
                <X size={20} />
              </button>

              {/* Modal Image */}
              <div className="relative w-full h-72 md:h-80 overflow-hidden bg-black">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 bg-[#F4B400] text-black font-bold uppercase rounded-md text-xs tracking-wider">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                  {selectedProject.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-white/5 rounded-xl border border-white/5">
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Location</span>
                    <p className="text-sm font-semibold text-white flex items-center gap-1.5">
                      <MapPin size={16} className="text-[#F4B400]" /> {selectedProject.location}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Client Authority</span>
                    <p className="text-sm font-semibold text-white flex items-center gap-1.5">
                      <Building2 size={16} className="text-[#F4B400]" /> {selectedProject.client}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#F4B400] mb-2 flex items-center gap-2">
                    <CheckCircle2 size={16} /> Detailed Scope of Work
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base bg-white/[0.02] p-4 rounded-xl border border-white/5">
                    {selectedProject.scope}
                  </p>
                </div>

                {/* Modal Footer CTA */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t border-white/10">
                  <span className="text-xs text-gray-400">
                    Need heavy machinery or execution for a similar infrastructure project?
                  </span>
                  <Link
                    href="/request-quote"
                    onClick={() => setSelectedProject(null)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#F4B400] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#ffc61a] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(244,180,0,0.2)]"
                  >
                    Request Similar Project <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


