"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import api from "@/lib/axios";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      await api.post("/contact", data);
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-6 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Contact <span className="text-[#F4B400]">Us</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Get in touch with our team for inquiries, support, or to discuss your next big project.
        </motion.p>
      </section>

      <section className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="bg-[#111111] p-8 rounded-xl border border-white/5">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F4B400]/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-[#F4B400]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Head Office</h4>
                    <p className="text-gray-400 text-sm">Aadhya Earth Movers,<br/>Shankar Nagar PLOT NO 95/P, Hayatnagar, Hyderabad,<br/>Telangana, India 501505</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F4B400]/10 flex items-center justify-center shrink-0">
                    <Phone className="text-[#F4B400]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-gray-400 text-sm">+91 8179675631</p>
                    <p className="text-gray-400 text-sm">+91 8008543529</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F4B400]/10 flex items-center justify-center shrink-0">
                    <Mail className="text-[#F4B400]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-400 text-sm">prashanthvk@gmail.com</p>
                    <p className="text-gray-400 text-sm">sales@aadhyaearthmovers.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F4B400]/10 flex items-center justify-center shrink-0">
                    <Clock className="text-[#F4B400]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Working Hours</h4>
                    <p className="text-gray-400 text-sm">Mon - Sat: 6:00 AM - 10:00 PM</p>
                    <p className="text-gray-400 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-2/3"
          >
            <div className="bg-[#111111] p-8 md:p-12 rounded-xl border border-white/5 relative">
              <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
              
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-[#16A34A]/20 border border-[#16A34A] text-[#16A34A] px-4 py-3 rounded mb-6 flex items-center gap-2"
                  >
                    <CheckCircle2 size={20} /> Message sent successfully!
                  </motion.div>
                )}
                {submitError && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded mb-6"
                  >
                    {submitError}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      {...register("name")}
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#F4B400] transition-colors"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      {...register("email")}
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#F4B400] transition-colors"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    {...register("phone")}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#F4B400] transition-colors"
                    placeholder="+91 XXXXXXXXXX"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea 
                    rows="5"
                    {...register("message")}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#F4B400] transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#F4B400] text-black font-bold uppercase tracking-wider text-sm px-8 py-4 rounded hover:bg-[#d69f00] transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                  <Send size={18} /> {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="container mx-auto px-6 mt-20">
        <div className="h-[400px] rounded-xl overflow-hidden border border-white/5 bg-gray-900 relative">
          <iframe 
            src="https://www.google.com/maps?q=17.333122,78.616183&z=17&output=embed" 
            className="absolute inset-0 w-full h-full border-0" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
