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
    <div className="pt-32 pb-20 bg-[#0A0A0A] text-white">
      {/* Page Header */}
      <section className="container mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-[#F4B400]/10 border border-[#F4B400]/30 text-[#F4B400] text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full mb-4"
        >
          Engineering Excellence & Skilled Workforce
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
        >
          About <span className="text-[#F4B400]">Aadhya Earth Movers</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          Powered by experienced civil engineers, master machine operators, and dedicated site supervisors who transform challenging terrains into ready infrastructure.
        </motion.p>
      </section>

      {/* Story & Overview Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="bg-[#111111] p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-[#F4B400] pl-4">
                Our Journey & Expertise
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Founded in Hyderabad, Telangana, Aadhya Earth Movers has evolved from a targeted excavation unit into a premier earth-moving powerhouse. Over 15 years, we have successfully executed major site levelling, highway cut-and-fill, pipeline trenching, and hard rock breaking projects across southern India.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The backbone of our company is our people. From structural and civil engineers calculating optimal cut volumes to certified operators maneuvering 20+ ton excavators with millimeter precision, every project is executed with technical rigor and safety.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 bg-[#0A0A0A] px-4 py-2 rounded-lg border border-white/10 text-sm text-gray-300">
                  <Award size={18} className="text-[#F4B400]" /> Government & Private Contractor Approved
                </div>
                <div className="flex items-center gap-2 bg-[#0A0A0A] px-4 py-2 rounded-lg border border-white/10 text-sm text-gray-300">
                  <Compass size={18} className="text-[#F4B400]" /> Advanced Site Surveying & GPS Grading
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-[#0A0A0A] p-6 rounded-xl border border-white/5 text-center">
                <h4 className="text-4xl font-extrabold text-[#F4B400] mb-2">15+</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Years of Industry Leadership</p>
              </div>
              <div className="bg-[#0A0A0A] p-6 rounded-xl border border-white/5 text-center">
                <h4 className="text-4xl font-extrabold text-[#F4B400] mb-2">250+</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Projects Completed</p>
              </div>
              <div className="bg-[#0A0A0A] p-6 rounded-xl border border-white/5 text-center">
                <h4 className="text-4xl font-extrabold text-[#F4B400] mb-2">100%</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Safety & On-Time Rate</p>
              </div>
              <div className="bg-[#0A0A0A] p-6 rounded-xl border border-white/5 text-center">
                <h4 className="text-4xl font-extrabold text-[#F4B400] mb-2">90+</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Engineers & Staff Crew</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engineers & Technical Staff Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Engineers & Technical Staff
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A multidisciplinary team of professionals ensuring every project meets engineering standards, safety regulations, and client deadlines.
          </p>
        </div>

        {/* Engineering Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {engineeringDepartments.map((dept, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#111111] p-8 rounded-xl border border-white/5 hover:border-[#F4B400]/40 transition-all group flex gap-6 items-start"
            >
              <div className="p-3 bg-[#0A0A0A] rounded-lg border border-white/10 group-hover:scale-105 transition-transform shrink-0">
                {dept.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#F4B400] transition-colors">
                  {dept.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {dept.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Leadership Profiles */}
        {/* Staff & Crew Statistics Banner */}
        <div className="bg-[#111111] p-8 rounded-2xl border border-[#F4B400]/20">
          <h3 className="text-xl font-bold mb-6 text-center text-white">
            Staff & Workforce Breakdown
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {teamStats.map((stat, idx) => (
              <div key={idx} className="p-4 bg-[#0A0A0A] rounded-xl border border-white/5">
                <div className="text-3xl font-extrabold text-[#F4B400] mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#111111] py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Principles</h2>
            <p className="text-gray-400">The standards that guide our engineers and field crews on every site.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#0A0A0A] p-8 rounded-xl border border-white/5 hover:border-[#F4B400]/50 transition-colors group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform origin-left">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
