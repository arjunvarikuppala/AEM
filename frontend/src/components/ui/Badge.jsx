"use client";

import React from "react";
import { cn } from "./Button";

export function Badge({
  variant = "default",
  children,
  className,
  ...props
}) {
  const variants = {
    default: "bg-white/10 text-gray-200 border-white/10",
    yellow: "bg-[#F4B400]/15 text-[#F4B400] border-[#F4B400]/30",
    green: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    blue: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    red: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    purple: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider border transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
