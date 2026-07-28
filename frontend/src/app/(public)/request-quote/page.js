"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, ChevronLeft, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import api from "@/lib/axios";

export default function RequestQuotePage() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const { register, handleSubmit, formState: { errors }, reset, trigger } = useForm();

  const nextStep = async () => {
    let isValid = false;
    if (step === 1) isValid = await trigger(["name", "email", "phone"]);
    if (step === 2) isValid = await trigger(["location", "projectType", "budget"]);
    if (isValid) setStep(prev => Math.min(prev + 1, 3));
  };
  
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      await api.post("/quotes", data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError("Failed to submit request. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <section className="container mx-auto px-6 mb-12 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Request a <span className="text-[#F4B400]">Quote</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Tell us about your project and we'll provide a comprehensive estimate tailored to your needs.
        </motion.p>
      </section>

      <section className="container mx-auto px-6 max-w-3xl">
        <div className="bg-[#111111] border border-white/5 rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Progress Bar */}
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-white/10 z-0"></div>
                  <div 
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#F4B400] z-0 transition-all duration-500"
                    style={{ width: `${((step - 1) / 2) * 100}%` }}
                  ></div>
                  
                  {[1, 2, 3].map((num) => (
                    <div 
                      key={num}
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 transition-colors duration-300 ${
                        step >= num ? "bg-[#F4B400] text-black" : "bg-[#222222] text-gray-500"
                      }`}
                    >
                      {num}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  {submitError && (
                    <div className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded mb-6 text-left">
                      {submitError}
                    </div>
                  )}

                  {/* Step 1: Personal Info */}
                  {step === 1 && (
                    <motion.div 
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      className="space-y-6 text-left"
                    >
                      <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">Personal Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                          <input type="text" {...register("name", { required: "Name is required" })} className="w-full bg-[#0A0A0A] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#F4B400] transition-colors" />
                          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                          <input type="email" {...register("email", { required: "Email is required" })} className="w-full bg-[#0A0A0A] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#F4B400] transition-colors" />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                        <input type="tel" {...register("phone", { required: "Phone is required" })} className="w-full bg-[#0A0A0A] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#F4B400] transition-colors" />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Project Details */}
                  {step === 2 && (
                    <motion.div 
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      className="space-y-6 text-left"
                    >
                      <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">Project Information</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Project Location</label>
                        <input type="text" {...register("location", { required: "Location is required" })} className="w-full bg-[#0A0A0A] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#F4B400] transition-colors" />
                        {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Project Type</label>
                          <select {...register("projectType", { required: true })} className="w-full bg-[#0A0A0A] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#F4B400] transition-colors appearance-none">
                            <option value="Earth Excavation">Earth Excavation</option>
                            <option value="Rock Breaking">Rock Breaking</option>
                            <option value="Road Construction">Road Construction</option>
                            <option value="Equipment Rental">Equipment Rental</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Estimated Budget (₹)</label>
                          <select {...register("budget", { required: true })} className="w-full bg-[#0A0A0A] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#F4B400] transition-colors appearance-none">
                            <option value="Less than 10 Lakhs">Less than 10 Lakhs</option>
                            <option value="10 Lakhs - 50 Lakhs">10 Lakhs - 50 Lakhs</option>
                            <option value="50 Lakhs - 1 Crore">50 Lakhs - 1 Crore</option>
                            <option value="More than 1 Crore">More than 1 Crore</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Additional Details */}
                  {step === 3 && (
                    <motion.div 
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      className="space-y-6 text-left"
                    >
                      <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">Final Details</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Project Description</label>
                        <textarea rows="4" {...register("message")} className="w-full bg-[#0A0A0A] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#F4B400] transition-colors resize-none" placeholder="Briefly describe your project requirements..."></textarea>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Expected Timeline</label>
                        <select {...register("timeline")} className="w-full bg-[#0A0A0A] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#F4B400] transition-colors appearance-none">
                          <option value="Immediate">Immediate</option>
                          <option value="Within 1 Month">Within 1 Month</option>
                          <option value="1-3 Months">1-3 Months</option>
                          <option value="More than 3 Months">More than 3 Months</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  <div className="flex justify-between mt-10 pt-6 border-t border-white/10">
                    <button 
                      type="button"
                      onClick={prevStep}
                      className={`px-6 py-3 font-semibold text-gray-400 hover:text-white transition-colors flex items-center gap-2 ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    >
                      <ChevronLeft size={20} /> Back
                    </button>
                    
                    {step < 3 ? (
                      <button 
                        type="button"
                        onClick={nextStep}
                        className="bg-[#F4B400] text-black px-8 py-3 rounded font-bold hover:bg-[#d69f00] transition-colors flex items-center gap-2"
                      >
                        Next Step <ChevronRight size={20} />
                      </button>
                    ) : (
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#16A34A] text-white px-8 py-3 rounded font-bold hover:bg-green-700 transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(22,163,74,0.5)] disabled:opacity-50"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Request"} <CheckCircle2 size={20} />
                      </button>
                    )}
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 10, stiffness: 100 }}
                  className="w-24 h-24 bg-[#16A34A]/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 size={48} className="text-[#16A34A]" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4">Request Received!</h3>
                <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                  Thank you for considering Aadhya Earth Movers. Our team will review your requirements and get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => { setIsSubmitted(false); setStep(1); }}
                  className="text-[#F4B400] font-semibold border border-[#F4B400] px-6 py-2 hover:bg-[#F4B400] hover:text-black transition-colors rounded"
                >
                  Submit Another Request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
