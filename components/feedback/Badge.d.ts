import React from "react";

/**
 * Small status pill / tag mapped to the semantic palette.
 */
export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "neutral" */
  tone?: "neutral" | "blue" | "green" | "amber" | "danger";
  /** Show a leading status dot. @default false */
  dot?: boolean;
  /** Solid filled style instead of tinted. @default false */
  solid?: boolean;
  /** @default "md" */
  size?: "sm" | "md";
  style?: React.CSSProperties;
}

export declare function Badge(props: BadgeProps): JSX.Element;
