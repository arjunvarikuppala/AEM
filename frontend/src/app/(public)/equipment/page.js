"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldAlert, Cpu, Wrench, X, Filter } from "lucide-react";

export default function EquipmentPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedEq, setSelectedEq] = useState(null);

  const tabs = ["All", "Excavators", "Dump Trucks", "Drainage & Trenching", "Heavy Machinery"];

  const equipments = [
    {
      id: "sany-210",
      name: "SANY SY210C Heavy Excavator",
      type: "Excavators",
      category: "Earth Excavation & Trenching",
      capacity: "1.2 m³ Heavy Duty Bucket",
      weight: "21,500 kg",
      engine: "Isuzu 6BG1TRP Engine (147 HP)",
      applications: "Deep Foundation Excavation, Trenching, Site Leveling & Channel Grading",
      status: "Available for Rent & Project Contracts",
      image: "/images/sany-excavator-grading.jpg"
    },
    {
      id: "tipper-fleet",
      name: "Multi-Axle Tipper Dump Truck Fleet",
      type: "Dump Trucks",
      category: "Material Haulage & Earth Movement",
      capacity: "16 Cubic Meter Box Capacity",
      weight: "28,000 kg (GVW)",
      engine: "High Torque Diesel Engine",
      applications: "Mass Earth Haulage, Gravel & Debris Disposal, Bulk Site Dumping",
      status: "Operational Fleet (15+ Units)",
      image: "/images/tipper-fleet-dumping.jpg"
    },
    {
      id: "trenching-rig",
      name: "HDPE Corrugated Pipe Trenching System",
      type: "Drainage & Trenching",
      category: "Underground Infrastructure",
      capacity: "HDPE / RCC Pipes up to 1200mm Dia",
      weight: "Heavy Utility Trench Equipment",
      engine: "Specialized Infrastructure Rig",
      applications: "Sub-surface Drainage Laying, Stormwater Channels & Duct Trenching",
      status: "Available for Contract Projects",
      image: "/images/trench-pipeline-laying.jpg"
    },
    {
      id: "chamber-unit",
      name: "RCC Catch Basin & Manhole Construction Rig",
      type: "Drainage & Trenching",
      category: "Drainage Infrastructure",
      capacity: "Precast & Cast-in-situ Chambers",
      weight: "Custom Construction Unit",
      engine: "Heavy Hydraulic & Concrete Equipment",
      applications: "Stormwater Junction Chambers, Inspection Manholes & Silt Trap Basins",
      status: "Active Operational Deployment",
      image: "/images/drainage-chamber-work.jpg"
    },
    {
      id: "rock-breaker",
      name: "Volvo EC210D Hydraulic Rock Breaker",
      type: "Heavy Machinery",
      category: "Rock Breaking & Demolition",
      capacity: "High Impact Hydraulic Hammer",
      weight: "21,000 kg",
      engine: "Deutz Turbocharged Engine",
      applications: "Hard Granite Rock Breaking, Concrete Demolition, Trenching in Rock",
      status: "Available for Rent",
      image: "/images/sany-excavator-grading.jpg"
    },
    {
      id: "komatsu-dozer",
      name: "Komatsu D155A Heavy Dozer",
      type: "Heavy Machinery",
      category: "Land Grading & Bulldozing",
      capacity: "9.4 m³ Blade Capacity",
      weight: "39,500 kg",
      engine: "Komatsu SAA6D140E-5 Engine (354 HP)",
      applications: "Heavy Earth Moving, Land Leveling, Bulk Push & Site Shaping",
      status: "Available on Call",
      image: "/images/sany-excavator-grading.jpg"
    }
  ];

  const filteredEquipments = activeTab === "All" 
    ? equipments 
    : equipments.filter(e => e.type === activeTab);

  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="container mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4B400]/10 border border-[#F4B400]/20 text-[#F4B400] text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <Cpu size={16} /> World-Class Machinery Fleet
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Heavy Machinery & <span className="text-[#F4B400]">Equipment</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Explore our heavy-duty fleet featuring SANY excavators, multi-axle tipper trucks, specialized pipe trenching machinery, and concrete chamber construction setups.
        </motion.p>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab 
                  ? "bg-[#F4B400] text-black shadow-[0_0_20px_rgba(244,180,0,0.3)] scale-105" 
                  : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredEquipments.map((eq, idx) => (
              <motion.div
                key={eq.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-[#121318] rounded-2xl overflow-hidden border border-white/10 hover:border-[#F4B400]/50 transition-all duration-500 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={eq.image} 
                      alt={eq.name} 
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-transparent to-transparent" />
                    
                    <span className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md border border-white/20 text-[#F4B400] text-[10px] font-bold uppercase tracking-wider rounded-sm">
                      {eq.type}
                    </span>

                    <span className="absolute top-4 right-4 px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Ready
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#F4B400] transition-colors">
                      {eq.name}
                    </h3>
                    
                    <ul className="space-y-2.5 mb-6 text-xs text-gray-300">
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-gray-400">Capacity:</span> 
                        <span className="font-semibold text-white">{eq.capacity}</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-gray-400">Weight / Specs:</span> 
                        <span className="font-semibold text-white">{eq.weight}</span>
                      </li>
                      <li className="flex justify-between pb-2">
                        <span className="text-gray-400">Best For:</span> 
                        <span className="font-semibold text-white text-right w-1/2">{eq.applications}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedEq(eq)}
                      className="flex-1 text-center py-3 bg-white/5 border border-white/10 hover:bg-white/15 text-white font-bold uppercase tracking-wider text-xs rounded-xl transition-all"
                    >
                      Spec Sheet
                    </button>
                    <Link 
                      href="/request-quote"
                      className="flex-1 text-center py-3 bg-[#F4B400] text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-[#d69f00] transition-all shadow-lg"
                    >
                      Book Rental
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Equipment Detail Modal */}
      <AnimatePresence>
        {selectedEq && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedEq(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#16181F] border border-white/10 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedEq(null)}
                className="absolute top-4 right-4 z-30 p-2 bg-black/60 text-white hover:text-[#F4B400] rounded-full backdrop-blur-md border border-white/10"
              >
                <X size={20} />
              </button>

              <div className="h-64 relative">
                <img 
                  src={selectedEq.image} 
                  alt={selectedEq.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16181F] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 bg-[#F4B400] text-black text-xs font-bold uppercase tracking-wider rounded-sm">
                    {selectedEq.type}
                  </span>
                  <h2 className="text-2xl font-extrabold text-white mt-2">
                    {selectedEq.name}
                  </h2>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4 bg-white/5 p-4 rounded-xl border border-white/5 text-xs">
                  <div>
                    <span className="text-gray-400 block mb-1">Operating Capacity</span>
                    <span className="text-white font-bold">{selectedEq.capacity}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-1">Operating Weight</span>
                    <span className="text-white font-bold">{selectedEq.weight}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-1">Engine / Power</span>
                    <span className="text-white font-bold">{selectedEq.engine}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-1">Status</span>
                    <span className="text-emerald-400 font-bold">{selectedEq.status}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#F4B400] mb-2">Ideal Applications</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{selectedEq.applications}</p>
                </div>

                <div className="flex gap-4 pt-2">
                  <Link 
                    href="/request-quote"
                    className="flex-1 text-center py-3.5 bg-[#F4B400] text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-[#d69f00] transition-colors shadow-lg"
                  >
                    Request Rental Quote
                  </Link>
                  <button 
                    onClick={() => setSelectedEq(null)}
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
