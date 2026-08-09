"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, ChevronLeft, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import api from "@/lib/axios";

export default function BookAppointmentPage() {
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
      const errorMessage = error.response?.data?.error || error.response?.data?.message || "Failed to submit request. Please try again later.";
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-10 sm:mb-12 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
        >
          Book an <span className="text-[#F4B400]">Appointment</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Tell us about your project and preferred schedule — we will contact you to confirm the appointment.
        </motion.p>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="bg-[#141414] border border-white/10 rounded-2xl p-5 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
          
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
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold z-10 transition-colors duration-300 ${
                        step >= num ? "bg-[#F4B400] text-black shadow-md" : "bg-[#222222] text-gray-400"
                      }`}
                    >
                      {num}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  {submitError && (
                    <div className="bg-rose-500/20 border border-rose-500 text-rose-400 px-4 py-3 rounded-xl mb-6 text-left text-xs sm:text-sm font-medium">
                      {submitError}
                    </div>
                  )}

                  {/* Step 1: Personal Info */}
                  {step === 1 && (
                    <motion.div 
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -30, opacity: 0 }}
                      className="space-y-5 text-left"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white border-b border-white/10 pb-3 leading-snug">Personal Details</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">Full Name *</label>
                          <input type="text" {...register("name", { required: "Name is required" })} className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/30 transition-all min-h-[44px]" />
                          {errors.name && <p className="text-rose-400 text-xs mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">Email Address *</label>
                          <input type="email" {...register("email", { required: "Email is required" })} className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/30 transition-all min-h-[44px]" />
                          {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email.message}</p>}
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">Phone Number *</label>
                        <input type="tel" {...register("phone", { required: "Phone is required" })} className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/30 transition-all min-h-[44px]" />
                        {errors.phone && <p className="text-rose-400 text-xs mt-1">{errors.phone.message}</p>}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Project Details */}
                  {step === 2 && (
                    <motion.div 
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -30, opacity: 0 }}
                      className="space-y-5 text-left"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white border-b border-white/10 pb-3 leading-snug">Project Information</h3>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">Project Location *</label>
                        <input type="text" {...register("location", { required: "Location is required" })} className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/30 transition-all min-h-[44px]" />
                        {errors.location && <p className="text-rose-400 text-xs mt-1">{errors.location.message}</p>}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">Project Type</label>
                          <select {...register("projectType", { required: true })} className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/30 transition-all min-h-[44px]">
                            <option value="Earth Excavation">Earth Excavation</option>
                            <option value="Rock Breaking">Rock Breaking</option>
                            <option value="Road Construction">Road Construction</option>
                            <option value="Equipment Rental">Equipment Rental</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">Estimated Budget (₹)</label>
                          <select {...register("budget", { required: true })} className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/30 transition-all min-h-[44px]">
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
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -30, opacity: 0 }}
                      className="space-y-5 text-left"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white border-b border-white/10 pb-3 leading-snug">Final Details</h3>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">Project Description</label>
                        <textarea rows="4" {...register("message")} className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/30 transition-all resize-none" placeholder="Briefly describe your project requirements..."></textarea>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">Expected Timeline</label>
                        <select {...register("timeline")} className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/30 transition-all min-h-[44px]">
                          <option value="Immediate">Immediate</option>
                          <option value="Within 1 Month">Within 1 Month</option>
                          <option value="1-3 Months">1-3 Months</option>
                          <option value="More than 3 Months">More than 3 Months</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  <div className="flex items-center justify-between mt-8 pt-5 border-t border-white/10">
                    <button 
                      type="button"
                      onClick={prevStep}
                      className={`px-4 sm:px-6 py-3 font-semibold text-xs uppercase tracking-wider text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 min-h-[44px] ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    >
                      <ChevronLeft size={18} /> Back
                    </button>
                    
                    {step < 3 ? (
                      <button 
                        type="button"
                        onClick={nextStep}
                        className="bg-[#F4B400] text-black px-6 sm:px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#d69f00] active:scale-[0.98] transition-all flex items-center gap-2 min-h-[48px] shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
                      >
                        Next Step <ChevronRight size={18} />
                      </button>
                    ) : (
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#16A34A] text-white px-6 sm:px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 active:scale-[0.98] transition-all flex items-center gap-2 shadow-[0_4px_20px_rgba(22,163,74,0.4)] disabled:opacity-50 min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                      >
                        {isSubmitting ? "Booking..." : "Book Appointment"} <CheckCircle2 size={18} />
                      </button>
                    )}
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 sm:py-16"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 10, stiffness: 100 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 bg-[#16A34A]/20 border border-[#16A34A]/40 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 size={42} className="text-emerald-400" />
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">Appointment Booked!</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
                  Thank you — your appointment request has been received. Our team will contact you shortly to confirm the booking.
                </p>
                <button 
                  onClick={() => { setIsSubmitted(false); setStep(1); }}
                  className="text-[#F4B400] font-semibold border border-[#F4B400]/40 px-6 py-3 hover:bg-[#F4B400] hover:text-black active:scale-[0.98] transition-colors rounded-xl text-xs uppercase tracking-wider min-h-[44px]"
                >
                  Book Another Appointment
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
