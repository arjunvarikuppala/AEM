"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Shield, Users } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Safety First",
      description: "We adhere strictly to safety protocols to ensure zero accidents on site.",
      icon: <Shield size={32} className="text-[#F4B400]" />
    },
    {
      title: "Quality Assurance",
      description: "Delivering top-tier results with our modern fleet and experienced operators.",
      icon: <CheckCircle2 size={32} className="text-[#F4B400]" />
    },
    {
      title: "Expert Team",
      description: "Our workforce consists of highly trained engineers and operators.",
      icon: <Users size={32} className="text-[#F4B400]" />
    },
    {
      title: "Mission Driven",
      description: "To build the infrastructure of tomorrow with precision and reliability.",
      icon: <Target size={32} className="text-[#F4B400]" />
    }
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Page Header */}
      <section className="container mx-auto px-6 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          About <span className="text-[#F4B400]">Us</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          We are the driving force behind some of the most complex earth moving and construction projects in India.
        </motion.p>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="border-gradient p-1 rounded-xl overflow-hidden">
              <img 
                src="/images/founder.jpg" 
                alt="Aadhya Earth Movers Leadership" 
                className="w-full max-h-[500px] object-cover object-top rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Founded in Hyderabad, Telangana, Aadhya Earth Movers began with a single excavator and a vision to transform the landscape of infrastructure in India. Over the last two decades, we have grown into a premier earth-moving enterprise.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Our journey is defined by our relentless pursuit of excellence, state-of-the-art machinery, and a commitment to completing projects on time, every time.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border-l-4 border-[#F4B400] pl-4">
                <h4 className="text-3xl font-bold text-white">20+</h4>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Years Exp.</p>
              </div>
              <div className="border-l-4 border-[#F4B400] pl-4">
                <h4 className="text-3xl font-bold text-white">100%</h4>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Commitment</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#111111] py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-gray-400">The principles that guide our every action.</p>
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
