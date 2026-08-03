"use client";

import React, { useId } from "react";
import { cn } from "./Button";

export const Input = React.forwardRef(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      className,
      id: customId,
      required,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = customId || generatedId;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-semibold uppercase tracking-wider text-gray-300 flex items-center justify-between"
          >
            <span>
              {label} {required && <span className="text-[#F4B400]">*</span>}
            </span>
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <span className="absolute left-3 text-gray-400 pointer-events-none shrink-0">
              {leftIcon}
            </span>
          )}
          <input
            id={inputId}
            ref={ref}
            required={required}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={
              error
                ? `${inputId}-error`
                : helperText
                ? `${inputId}-helper`
                : undefined
            }
            className={cn(
              "w-full bg-[#181818] border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/30 disabled:opacity-50 disabled:cursor-not-allowed",
              leftIcon ? "pl-10" : "px-4",
              rightIcon ? "pr-10" : "px-4",
              "py-2.5",
              error && "border-rose-500 focus:border-rose-500 focus:ring-rose-500/30",
              className
            )}
            {...props}
          />
          {rightIcon && (
            <span className="absolute right-3 text-gray-400 shrink-0">
              {rightIcon}
            </span>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="text-xs text-rose-400 mt-0.5">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={`${inputId}-helper`} className="text-xs text-gray-500 mt-0.5">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
