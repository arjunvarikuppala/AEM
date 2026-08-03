"use client";

import React from "react";
import { cn } from "./Button";

export function Card({ className, children, hoverEffect = true, ...props }) {
  return (
    <div
      className={cn(
        "bg-[#141414] border border-white/10 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden",
        hoverEffect && "hover:border-[#F4B400]/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={cn("mb-4 flex flex-col gap-1", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3
      className={cn("text-xl font-bold text-white tracking-tight leading-snug", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({ className, children, ...props }) {
  return (
    <p className={cn("text-sm text-gray-400 leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ className, children, ...props }) {
  return <div className={cn("relative z-10", className)} {...props}>{children}</div>;
}

export function CardFooter({ className, children, ...props }) {
  return (
    <div
      className={cn("mt-6 pt-4 border-t border-white/5 flex items-center justify-between", className)}
      {...props}
    >
      {children}
    </div>
  );
}
