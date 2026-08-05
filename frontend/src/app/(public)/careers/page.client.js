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
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12 sm:mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
        >
          Join Our <span className="text-[#F4B400]">Team</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Build your career with one of the most trusted earth moving and construction companies in India.
        </motion.p>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 gap-5 sm:gap-6">
          {jobs.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-[#141414] border border-white/10 p-5 sm:p-7 rounded-2xl hover:border-[#F4B400]/40 transition-colors group flex flex-col md:flex-row justify-between items-start md:items-center gap-5 sm:gap-6"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-[#F4B400] transition-colors leading-snug">{job.title}</h3>
                <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-300 mb-3.5">
                  <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5"><Briefcase size={15} className="text-[#F4B400]" /> {job.type}</span>
                  <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5"><MapPin size={15} className="text-[#F4B400]" /> {job.location}</span>
                  <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5"><Clock size={15} className="text-[#F4B400]" /> {job.experience}</span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm max-w-2xl leading-relaxed">{job.description}</p>
              </div>
              
              <a
                href={`mailto:careers@aadhyaearthmovers.com?subject=Application for ${encodeURIComponent(job.title)}`}
                className="w-full md:w-auto shrink-0 bg-[#F4B400] text-black px-6 py-3 rounded-xl hover:bg-[#d69f00] active:scale-[0.98] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
              >
                Apply Now <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
