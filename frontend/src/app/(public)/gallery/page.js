"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, MapPin, Tag, Play, Film } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const categories = ["All", "Excavation & Grading", "Tipper Fleet", "Drainage & Utilities", "Videos"];

  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: "/images/fleet-excavator-haulage-site.jpg",
      title: "Heavy SANY Excavator & Tipper Fleet Line-Up",
      category: "Excavation & Grading",
      location: "Outer Ring Road Project Site, Telangana",
      description: "Massive fleet of SANY heavy excavators and multi-axle tippers lined up on active cut-and-fill excavation site.",
      aspect: "aspect-[16/9]"
    },
    {
      id: 2,
      type: "image",
      src: "/images/rock-loading-sany-excavator.jpg",
      title: "Heavy Rock Excavation & Tipper Loading",
      category: "Excavation & Grading",
      location: "Quarry & Foundation Pit Site",
      description: "SANY heavy excavator loading massive granite boulders into multi-axle tipper dump truck.",
      aspect: "aspect-[3/4]"
    },
    {
      id: 3,
      type: "image",
      src: "/images/tractor-dozer-road-grading.jpg",
      title: "Tractor Dozer Sub-Base Road Grading",
      category: "Excavation & Grading",
      location: "Township Sub-Base Roadway Site",
      description: "Heavy tractor with front leveller dozer blade shaping and grading gravel sub-base for roadway construction.",
      aspect: "aspect-[16/9]"
    },
    {
      id: 4,
      type: "image",
      src: "/images/pneumatic-rock-drilling.jpg",
      title: "Pneumatic Rock Drilling & Hard Strata Excavation",
      category: "Excavation & Grading",
      location: "Hill Cutting Site, Telangana",
      description: "Pneumatic jackhammer rock drilling powered by tractor compressor unit for controlled rock fracturing.",
      aspect: "aspect-[16/9]"
    },
    {
      id: 5,
      type: "image",
      src: "/images/sany-excavator-grading.jpg",
      title: "Heavy SANY Excavator Ground Leveling",
      category: "Excavation & Grading",
      location: "Commercial Development Site, Hyderabad",
      description: "Deep earth excavation and cut-and-fill level preparation using SANY SY210C heavy excavator.",
      aspect: "aspect-[4/3]"
    },
    {
      id: 6,
      type: "image",
      src: "/images/tipper-fleet-dumping.jpg",
      title: "Multi-Axle Tipper Fleet Unloading Operations",
      category: "Tipper Fleet",
      location: "Patancheru Haulage Corridor",
      description: "Fleet of heavy tipper dump trucks discharging earth fill for roadbed foundation formation.",
      aspect: "aspect-[16/9]"
    },
    {
      id: 7,
      type: "image",
      src: "/images/drainage-chamber-work.jpg",
      title: "Concrete Catch Basin & Manhole Assembly",
      category: "Drainage & Utilities",
      location: "Gachibowli Utility Hub",
      description: "Construction of RCC inspection chambers and stormwater catch basins connected with corrugated pipes.",
      aspect: "aspect-[3/4]"
    },
    {
      id: 8,
      type: "image",
      src: "/images/trench-pipeline-laying.jpg",
      title: "HDPE Corrugated Pipe Trench Laying",
      category: "Drainage & Utilities",
      location: "Sub-Surface Utility Trench, Hyderabad",
      description: "Dual corrugated drainage pipeline alignment with brick supports and concrete anchor bedding.",
      aspect: "aspect-[3/4]"
    },
    {
      id: 9,
      type: "image",
      src: "/images/asphalt-road-compaction.jpg",
      title: "Asphalt Road Compaction & Finishing",
      category: "Tipper Fleet",
      location: "Tellapur Villa Township Expressway",
      description: "Ingersoll-Rand heavy vibratory roller compaction of bituminous surface layer.",
      aspect: "aspect-[16/9]"
    },
    {
      id: 10,
      type: "image",
      src: "/images/land-surveying-total-station.jpg",
      title: "Precision Total Station Laser Surveying",
      category: "Drainage & Utilities",
      location: "Financial District High-Rise Sector",
      description: "High-precision optical & laser leveling, structural column grid alignment, and benchmark setting.",
      aspect: "aspect-[4/3]"
    },
    {
      id: 11,
      type: "image",
      src: "/images/deep-foundation-rock-grouting.jpg",
      title: "Deep Pit Excavation & Rock Anchor Grouting",
      category: "Excavation & Grading",
      location: "Knowledge City Commercial Complex",
      description: "Pit slope stabilization, rock anchor hole drilling, and cement grouting supported by heavy excavators.",
      aspect: "aspect-[4/3]"
    },
    {
      id: 12,
      type: "image",
      src: "/images/asphalt-paver-laying.jpg",
      title: "Bituminous Asphalt Paver Operations",
      category: "Tipper Fleet",
      location: "Neopolis Expressway Link",
      description: "Automated hot-mix asphalt paver operations, edge grading, and smooth surface leveling.",
      aspect: "aspect-[16/9]"
    },
    {
      id: 13,
      type: "video",
      src: "/videos/site-operations-demo.mp4",
      poster: "/images/fleet-excavator-haulage-site.jpg",
      title: "Heavy Machinery & Fleet Operations Video Reel",
      category: "Videos",
      location: "Outer Ring Road Sector, Hyderabad",
      description: "On-site video capturing heavy excavation, tipper fleet haulage, and ground grading operations in real time.",
      aspect: "aspect-[16/9]"
    },
    {
      id: 14,
      type: "video",
      src: "/videos/whatsapp-video-2026-07-28-at-5.03.06-pm.mp4",
      poster: "/images/rock-loading-sany-excavator.jpg",
      title: "Heavy Rock Loading Action Recording",
      category: "Videos",
      location: "Quarry & Foundation Excavation Site",
      description: "Action video recording of SANY excavator loading heavy granite boulders into multi-axle dump trucks.",
      aspect: "aspect-[4/3]"
    },
    {
      id: 15,
      type: "video",
      src: "/videos/road-grading-demo.mp4",
      poster: "/images/tractor-dozer-road-grading.jpg",
      title: "Sub-Base Roadway Leveling Sequence",
      category: "Videos",
      location: "Township Sub-Base Roadway Site",
      description: "Field video footage showing tractor blade leveller shaping sub-base gravel for road construction.",
      aspect: "aspect-[16/9]"
    }
  ];

  const filteredImages = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handlePrev = (e) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
    }
  };

  const selectedImageObj = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <section className="container mx-auto px-6 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Project <span className="text-[#F4B400]">Gallery</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light"
        >
          Authentic photography & video reels from our active sites — showcasing earthmoving, pipeline installation, and heavy fleet operations.
        </motion.p>

        {/* Filter Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          {categories.map((cat) => {
            const count = cat === "All" ? galleryItems.length : galleryItems.filter(i => i.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedIndex(null);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === cat 
                    ? "bg-[#F4B400] text-black shadow-[0_0_20px_rgba(244,180,0,0.3)] scale-105" 
                    : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{cat}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                  activeCategory === cat ? "bg-black/20 text-black font-extrabold" : "bg-white/10 text-gray-400"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl break-inside-avoid bg-[#121318] border border-white/10 cursor-pointer ${img.aspect}`}
              onClick={() => setSelectedIndex(idx)}
            >
              {img.type === "image" ? (
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full relative overflow-hidden bg-black">
                  <img 
                    src={img.poster || img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-colors" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="inline-block text-[#F4B400] text-[10px] font-bold uppercase tracking-widest mb-1">
                  {img.category}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{img.title}</h3>
                <p className="text-gray-300 text-xs flex items-center gap-1.5">
                  <MapPin size={12} className="text-[#F4B400]" /> {img.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox / Video Modal */}
      <AnimatePresence>
        {selectedImageObj && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-between p-4 md:p-8 backdrop-blur-md"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Top Bar */}
            <div className="w-full max-w-6xl flex justify-between items-center z-20">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#F4B400] text-black text-xs font-bold uppercase rounded-sm">
                  {selectedImageObj.category}
                </span>
                <span className="text-xs text-gray-400">
                  {selectedIndex + 1} of {filteredImages.length}
                </span>
              </div>
              <button 
                className="p-2.5 rounded-full bg-white/10 text-white hover:text-[#F4B400] transition-colors border border-white/10"
                onClick={() => setSelectedIndex(null)}
              >
                <X size={24} />
              </button>
            </div>

            {/* Main Content with Nav */}
            <div className="relative w-full max-w-5xl h-[65vh] flex items-center justify-center my-auto">
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-6 z-20 p-3 rounded-full bg-black/60 text-white hover:text-[#F4B400] hover:bg-black transition-all border border-white/10"
              >
                <ChevronLeft size={28} />
              </button>

              {selectedImageObj.type === "image" ? (
                <motion.img 
                  key={selectedImageObj.id}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  src={selectedImageObj.src} 
                  alt={selectedImageObj.title} 
                  className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10"
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <motion.div
                  key={selectedImageObj.id}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="relative max-w-4xl w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <video
                    src={selectedImageObj.src}
                    poster={selectedImageObj.poster}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain relative z-10"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.parentElement.querySelector('.video-fallback');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="video-fallback hidden absolute inset-0 flex-col items-center justify-center bg-black/90 p-6 text-center">
                    <img 
                      src={selectedImageObj.poster} 
                      alt={selectedImageObj.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-25 blur-sm" 
                    />
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-[#F4B400]/20 border border-[#F4B400] text-[#F4B400] flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(244,180,0,0.4)]">
                        <Play size={32} className="fill-[#F4B400] ml-1" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{selectedImageObj.title}</h4>
                      <p className="text-xs text-gray-300 max-w-md mb-4">{selectedImageObj.description}</p>
                      <span className="px-3.5 py-1.5 bg-[#F4B400]/10 border border-[#F4B400]/40 text-[#F4B400] text-xs font-semibold rounded-full flex items-center gap-2">
                        <Film size={14} /> Site Video Recording • {selectedImageObj.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              <button
                onClick={handleNext}
                className="absolute right-2 md:right-6 z-20 p-3 rounded-full bg-black/60 text-white hover:text-[#F4B400] hover:bg-black transition-all border border-white/10"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Bottom Caption Box */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-[#121318] border border-white/10 rounded-xl p-5 text-center shadow-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-1">{selectedImageObj.title}</h3>
              <p className="text-xs text-[#F4B400] mb-2 flex items-center justify-center gap-1">
                <MapPin size={12} /> {selectedImageObj.location}
              </p>
              <p className="text-gray-300 text-sm">{selectedImageObj.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

