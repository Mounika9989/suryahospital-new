import React from "react";

export function Card({
  children,
  variant = "default",
  className = "",
  as: Component = "div",
  ...props
}) {
  const baseStyles = "rounded-card transition-all duration-200 overflow-hidden";

  const variantStyles = {
    default: "bg-white border border-surya-slate-200/90 shadow-card",
    interactive:
      "bg-white border border-surya-slate-200/90 shadow-card hover:border-surya-teal-300 hover:shadow-card-hover hover:-translate-y-0.5 cursor-pointer",
    highlight:
      "bg-white border-2 border-surya-teal-500/80 shadow-card",
    subtle:
      "bg-surya-slate-50 border border-surya-slate-200 shadow-sm",
    emergency:
      "bg-white border border-surya-emergency-200 shadow-card ring-1 ring-surya-emergency-100",
    navy:
      "bg-surya-navy-900 text-white border border-surya-navy-800 shadow-card",
  };

  return (
    <Component
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.default} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardHeader({ children, className = "" }) {
  return (
    <div className={`p-5 sm:p-6 pb-2 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, as: Component = "h3", className = "" }) {
  return (
    <Component className={`text-lg sm:text-xl font-semibold tracking-tight text-surya-slate-900 ${className}`}>
      {children}
    </Component>
  );
}

export function CardDescription({ children, className = "" }) {
  return (
    <p className={`text-sm text-surya-slate-600 mt-1.5 leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

export function CardBody({ children, className = "" }) {
  return (
    <div className={`p-5 sm:p-6 pt-3 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = "" }) {
  return (
    <div className={`p-5 sm:p-6 pt-0 border-t border-surya-slate-100 mt-2 flex items-center justify-between ${className}`}>
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Body = CardBody;
Card.Footer = CardFooter;
