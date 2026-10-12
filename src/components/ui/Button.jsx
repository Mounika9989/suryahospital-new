import React from "react";

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  fullWidth = false,
  className = "",
  disabled = false,
  type = "button",
  onClick,
  href,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs rounded-lg gap-1.5",
    md: "px-4 py-2.5 text-sm rounded-lg gap-2",
    lg: "px-6 py-3 text-base rounded-xl gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-surya-navy-900 text-white hover:bg-surya-navy-800 active:bg-surya-navy-950 focus:ring-surya-navy-600 shadow-sm",
    accent:
      "bg-surya-teal-600 text-white hover:bg-surya-teal-700 active:bg-surya-teal-800 focus:ring-surya-teal-500 shadow-sm",
    emergency:
      "bg-surya-emergency-600 text-white hover:bg-surya-emergency-700 active:bg-surya-emergency-800 focus:ring-surya-emergency-400 shadow-emergency font-semibold",
    secondary:
      "bg-surya-slate-100 text-surya-slate-800 hover:bg-surya-slate-200 active:bg-surya-slate-300 focus:ring-surya-slate-400",
    outline:
      "border border-surya-slate-300 bg-white text-surya-slate-800 hover:bg-surya-slate-50 active:bg-surya-slate-100 focus:ring-surya-navy-500",
    ghost:
      "text-surya-slate-600 hover:text-surya-navy-900 hover:bg-surya-slate-100 active:bg-surya-slate-200 focus:ring-surya-slate-300",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${fullWidth ? "w-full" : ""} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className={size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className={size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"} />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
