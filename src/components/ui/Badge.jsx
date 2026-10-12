import React from "react";

export function Badge({
  children,
  variant = "default",
  size = "md",
  dot = false,
  className = "",
}) {
  const baseStyles = "inline-flex items-center font-medium rounded-full";

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px] gap-1",
    md: "px-2.5 py-1 text-xs gap-1.5",
    lg: "px-3.5 py-1.5 text-sm gap-2",
  };

  const variantStyles = {
    default: "bg-surya-slate-100 text-surya-slate-700 border border-surya-slate-200",
    teal: "bg-surya-teal-50 text-surya-teal-800 border border-surya-teal-200/80",
    navy: "bg-surya-navy-50 text-surya-navy-800 border border-surya-navy-200/80",
    emergency: "bg-surya-emergency-50 text-surya-emergency-700 border border-surya-emergency-200",
    success: "bg-emerald-50 text-emerald-800 border border-emerald-200",
    outline: "bg-transparent text-surya-slate-600 border border-surya-slate-300",
  };

  const dotColor = {
    default: "bg-surya-slate-400",
    teal: "bg-surya-teal-500",
    navy: "bg-surya-navy-600",
    emergency: "bg-surya-emergency-600 animate-pulse",
    success: "bg-emerald-500",
    outline: "bg-surya-slate-400",
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
        variantStyles[variant] || variantStyles.default
      } ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            dotColor[variant] || dotColor.default
          }`}
        />
      )}
      <span>{children}</span>
    </span>
  );
}
