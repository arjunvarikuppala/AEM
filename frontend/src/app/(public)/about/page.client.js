"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Target, 
  Shield, 
  Users, 
  HardHat, 
  Wrench, 
  UserCheck, 
  Award, 
  Compass, 
  ShieldCheck 
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Safety First",
      description: "We adhere strictly to international safety protocols, site risk assessments, and PPE standards to ensure zero accidents across all active projects.",
      icon: <Shield size={32} className="text-[#F4B400]" />
    },
    {
      title: "Engineering Precision",
      description: "Delivering pinpoint earthwork, precision grading, and site levelling guided by experienced civil engineers and advanced surveying tools.",
      icon: <CheckCircle2 size={32} className="text-[#F4B400]" />
    },
    {
      title: "Certified Workforce",
      description: "Our team comprises veteran engineers, licensed heavy machinery operators, and dedicated EHS safety inspectors.",
      icon: <Users size={32} className="text-[#F4B400]" />
    },
    {
      title: "Mission-Driven Execution",
      description: "Committed to completing complex infrastructure, rock breaking, and bulk excavation on schedule, every single time.",
      icon: <Target size={32} className="text-[#F4B400]" />
    }
  ];

  const teamStats = [
    { value: "15+", label: "Senior Civil & Project Engineers" },
    { value: "40+", label: "Certified Equipment Operators" },
    { value: "15+", label: "Site Supervisors & Surveyors" },
    
    { value: "50+", label: "Technical Support Staff" }
  ];

  const engineeringDepartments = [
    {
      icon: <HardHat className="text-[#F4B400]" size={36} />,
      title: "Civil  Engineers",
      description: "Our engineering team specializes in soil compaction analysis, slope stability calculations, rock strata assessment, and volumetric earthwork planning using modern software."
    },
    {
      icon: <UserCheck className="text-[#F4B400]" size={36} />,
      title: "Site Project Managers & Supervisors",
      description: "Experienced site leads orchestrate complex logistics, daily cut-and-fill quotas, shift schedules, and coordinate directly with client engineering teams."
    },
    {
      icon: <Wrench className="text-[#F4B400]" size={36} />,
      title: "Heavy Equipment & Mechanical Engineers",
      description: "In-house mechanical engineers perform rigorous preventive maintenance, hydraulic performance checks, and 24/7 field repairs to ensure max machine uptime."
    },
    {
      icon: <ShieldCheck className="text-[#F4B400]" size={36} />,
      title: "EHS & Safety Inspection Engineers",
      description: "Dedicated Environmental Health & Safety (EHS) officers conduct daily site hazard audits, toolbox talks, noise/vibration monitoring, and safety compliance enforcement."
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-[#0A0A0A] text-white">
      {/* Page Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12 sm:mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-[#F4B400]/10 border border-[#F4B400]/30 text-[#F4B400] text-xs uppercase tracking-widest font-semibold px-3.5 py-1.5 rounded-full mb-4"
        >
          Engineering Excellence & Skilled Workforce
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-white"
        >
          About <span className="text-[#F4B400]">Aadhya Earth Movers</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Powered by experienced civil engineers, master machine operators, and dedicated site supervisors who transform challenging terrains into ready infrastructure.
        </motion.p>
      </section>

      {/* Story & Overview Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-16 sm:mb-20">
        <div className="bg-[#141414] p-6 sm:p-10 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white border-l-4 border-[#F4B400] pl-3.5 leading-snug">
                Our Journey & Expertise
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                Founded in Hyderabad, Telangana, Aadhya Earth Movers has evolved from a targeted excavation unit into a premier earth-moving powerhouse. Over 15 years, we have successfully executed major site levelling, highway cut-and-fill, pipeline trenching, and hard rock breaking projects across southern India.
              </p>
              <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                The backbone of our company is our people. From structural and civil engineers calculating optimal cut volumes to certified operators maneuvering 20+ ton excavators with millimeter precision, every project is executed with technical rigor and safety.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-1">
                <div className="flex items-center gap-2.5 bg-[#0A0A0A] px-3.5 py-2.5 rounded-xl border border-white/10 text-xs sm:text-sm text-gray-300">
                  <Award size={18} className="text-[#F4B400] shrink-0" /> Government & Private Contractor Approved
                </div>
                <div className="flex items-center gap-2.5 bg-[#0A0A0A] px-3.5 py-2.5 rounded-xl border border-white/10 text-xs sm:text-sm text-gray-300">
                  <Compass size={18} className="text-[#F4B400] shrink-0" /> Advanced Site Surveying & GPS Grading
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3.5 sm:gap-6"
            >
              <div className="bg-[#0A0A0A] p-4 sm:p-6 rounded-xl border border-white/10 text-center">
                <h4 className="text-3xl sm:text-4xl font-extrabold text-[#F4B400] mb-1 sm:mb-2">15+</h4>
                <p className="text-[11px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold">Years Experience</p>
              </div>
              <div className="bg-[#0A0A0A] p-4 sm:p-6 rounded-xl border border-white/10 text-center">
                <h4 className="text-3xl sm:text-4xl font-extrabold text-[#F4B400] mb-1 sm:mb-2">55+</h4>
                <p className="text-[11px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold">Projects Completed</p>
              </div>
              <div className="bg-[#0A0A0A] p-4 sm:p-6 rounded-xl border border-white/10 text-center">
                <h4 className="text-3xl sm:text-4xl font-extrabold text-[#F4B400] mb-1 sm:mb-2">100%</h4>
                <p className="text-[11px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold">Safety & On-Time Rate</p>
              </div>
              <div className="bg-[#0A0A0A] p-4 sm:p-6 rounded-xl border border-white/10 text-center">
                <h4 className="text-3xl sm:text-4xl font-extrabold text-[#F4B400] mb-1 sm:mb-2">90+</h4>
                <p className="text-[11px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold">Engineers & Crew</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engineers & Technical Staff Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-16 sm:mb-20">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 text-white">
            Our Engineers & Technical Staff
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            A multidisciplinary team of professionals ensuring every project meets engineering standards, safety regulations, and client deadlines.
          </p>
        </div>

        {/* Engineering Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {engineeringDepartments.map((dept, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-[#141414] p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-[#F4B400]/40 transition-all group flex flex-col sm:flex-row gap-5 items-start"
            >
              <div className="p-3 bg-[#0A0A0A] rounded-xl border border-white/10 group-hover:scale-105 transition-transform shrink-0">
                {dept.icon}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-[#F4B400] transition-colors leading-snug">
                  {dept.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {dept.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Staff & Crew Statistics Banner */}
        <div className="bg-[#141414] p-6 sm:p-8 rounded-2xl border border-[#F4B400]/30">
          <h3 className="text-lg sm:text-xl font-bold mb-6 text-center text-white">
            Staff & Workforce Breakdown
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 text-center">
            {teamStats.map((stat, idx) => (
              <div key={idx} className="p-3.5 sm:p-4 bg-[#0A0A0A] rounded-xl border border-white/10">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#F4B400] mb-1">{stat.value}</div>
                <div className="text-[11px] sm:text-xs text-gray-300 font-medium leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 text-white">Founders</h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">Meet the founders who started Aadhya Earth Movers.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-start">
          <div className="bg-[#141414] p-6 sm:p-8 rounded-2xl border border-white/10 text-center">
            <div className="w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full bg-black/40">
              <img src="/images/pawan-kalyan.jpg" alt="Pawan Kalyan Varikuppala" className="w-full h-full object-cover object-center" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Pawan Kalyan Varikuppala</h3>
            <p className="text-sm text-gray-300 mt-1">Founder</p>
          </div>

          <div className="bg-[#141414] p-6 sm:p-8 rounded-2xl border border-white/10 text-center">
            <div className="w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full bg-black/40">
              <img src="/images/prashanth-varikuppala.jpg" alt="Prashanth Varikuppala" className="w-full h-full object-cover object-center" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Prashanth Varikuppala</h3>
            <p className="text-sm text-gray-300 mt-1">Founder</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#111111] py-12 sm:py-16 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 text-white">Core Principles</h2>
            <p className="text-gray-300 text-sm sm:text-base">The standards that guide our engineers and field crews on every site.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-[#0A0A0A] p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-[#F4B400]/40 transition-colors group"
              >
                <div className="mb-4 transform group-hover:scale-105 transition-transform origin-left">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
