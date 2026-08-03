"use client";

import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const Button = React.forwardRef(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

    const variants = {
      primary:
        "bg-[#F4B400] text-black hover:bg-[#D69F00] shadow-[0_2px_10px_rgba(244,180,0,0.25)] hover:shadow-[0_4px_20px_rgba(244,180,0,0.4)] border border-transparent font-semibold",
      secondary:
        "bg-white/10 text-white hover:bg-white/15 border border-white/10 hover:border-white/20 backdrop-blur-md",
      outline:
        "bg-transparent text-white border border-white/20 hover:border-[#F4B400] hover:text-[#F4B400] hover:bg-[#F4B400]/5",
      ghost: "bg-transparent text-gray-300 hover:text-white hover:bg-white/5",
      danger:
        "bg-rose-600 text-white hover:bg-rose-700 shadow-[0_2px_10px_rgba(225,29,72,0.25)] border border-transparent",
    };

    const sizes = {
      sm: "text-xs px-3 py-1.5 rounded-md gap-1.5 h-8",
      md: "text-sm px-5 py-2.5 rounded-lg gap-2 h-10",
      lg: "text-base px-7 py-3.5 rounded-xl gap-2.5 h-12 font-semibold",
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
