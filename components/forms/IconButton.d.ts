import React from "react";

export type IconButtonVariant = "glass" | "solid" | "accent" | "ghost";
export type IconButtonSize = "sm" | "md" | "lg";

/**
 * Square/round icon-only touch target (≥44px) for the dark canvas.
 */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /** @default "glass" */
  variant?: IconButtonVariant;
  /** @default "md" (44px) */
  size?: IconButtonSize;
  /** Apply the electric-blue active glow. @default false */
  active?: boolean;
  /** Fully circular instead of rounded-square. @default false */
  round?: boolean;
  disabled?: boolean;
  /** Accessible label (icon-only buttons need one). */
  ariaLabel?: string;
  style?: React.CSSProperties;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
