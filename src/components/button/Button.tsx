import React from "react";
import "./Button.scss";

interface ButtonProps {
  label: string;
  type?: "primary" | "secondary" | "success" | "danger" | "warning" | "focus";
  variant?: "contained" | "outlined" | "text";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  ariaPressed?: boolean;
  ariaExpanded?: boolean;
  as?: "button" | "a";
  href?: string;
  iconClass?: string;
  iconPosition?: "left" | "right";
  iconOnly?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = "primary",
  variant = "contained",
  size = "md",
  disabled = false,
  onClick,
  ariaLabel,
  ariaPressed,
  ariaExpanded,
  as = "button",
  href,
  iconClass,
  iconPosition = "left",
  iconOnly = false,
}) => {
  const classNames = [
    "btn",
    `btn-${type}`,
    `btn-${variant}`,
    `btn-size-${size}`,
    disabled ? "btn-disabled" : "",
    iconOnly ? "btn-icon-only" : "",
    iconPosition == "right" ? "btn-icon-right" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const commonProps = {
    className: classNames,
    "aria-label": ariaLabel,
    "aria-pressed": ariaPressed,
    "aria-expanded": ariaExpanded,
    "aria-disabled": disabled ? true : undefined,
    onClick,
  };

  const icon = iconClass ? <i className={`icon ${iconClass}`}></i> : null;

  return as === "a" ? (
    // link
    <a {...commonProps} href={href} role="button">
      {icon}
      <span className="btn-label">{label}</span>
    </a>
  ) : (
    // button
    <button type="button" {...commonProps} disabled={disabled}>
      {icon}
      <span className="btn-label">{label}</span>
    </button>
  );
};

// Button.displayName = "Button";
export default Button;
