"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "./Button";

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  className,
  maxWidth = "max-w-lg",
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
          aria-describedby={description ? "modal-description" : undefined}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", duration: 0.3 }}
            className={cn(
              "relative z-10 w-full bg-[#141414] border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/80 text-white overflow-hidden my-auto",
              maxWidth,
              className
            )}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                {title && (
                  <h2 id="modal-title" className="text-xl font-bold tracking-tight">
                    {title}
                  </h2>
                )}
                {description && (
                  <p id="modal-description" className="text-xs text-gray-400 mt-1">
                    {description}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="text-gray-400 hover:text-white p-1.5 rounded-lg bg-white/5 border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="mt-2">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
