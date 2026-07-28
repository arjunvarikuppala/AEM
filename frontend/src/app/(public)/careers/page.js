"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

export default function CareersPage() {
  const jobs = [
    {
      id: 1,
      title: "Senior Excavator Operator",
      type: "Full-Time",
      location: "Hyderabad, TS",
      experience: "5+ Years",
      description: "We are looking for an experienced excavator operator for large-scale commercial projects."
    },
    {
      id: 2,
      title: "Site Supervisor",
      type: "Full-Time",
      location: "Hyderabad, TS",
      experience: "8+ Years",
      description: "Seeking a dedicated site supervisor to oversee road construction and earth-moving activities."
    },
    {
      id: 3,
      title: "Heavy Equipment Mechanic",
      type: "Full-Time",
      location: "Workshop - Secunderabad",
      experience: "3+ Years",
      description: "Maintenance and repair of our fleet including dozers, rollers, and excavators."
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <section className="container mx-auto px-6 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Join Our <span className="text-[#F4B400]">Team</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Build your career with one of the most trusted earth moving and construction companies in India.
        </motion.p>
      </section>

      <section className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 gap-6">
          {jobs.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#111111] border border-white/5 p-8 rounded-xl hover:border-[#F4B400]/50 transition-colors group flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#F4B400] transition-colors">{job.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1"><Briefcase size={16} className="text-[#F4B400]" /> {job.type}</span>
                  <span className="flex items-center gap-1"><MapPin size={16} className="text-[#F4B400]" /> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock size={16} className="text-[#F4B400]" /> {job.experience}</span>
                </div>
                <p className="text-gray-400 max-w-2xl">{job.description}</p>
              </div>
              
              <button className="shrink-0 bg-transparent border border-[#F4B400] text-[#F4B400] px-6 py-3 rounded hover:bg-[#F4B400] hover:text-black font-semibold transition-colors flex items-center gap-2">
                Apply Now <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
