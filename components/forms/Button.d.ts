import React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

/**
 * Primary action control for the mi-dashboard dark canvas.
 * @startingPoint section="Forms" subtitle="Action buttons — primary, glass, ghost, danger" viewport="700x160"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: ButtonVariant;
  /** @default "md" */
  size?: ButtonSize;
  /** Stretch to container width. @default false */
  fullWidth?: boolean;
  disabled?: boolean;
  /** Element rendered before the label (e.g. a Lucide icon). */
  iconLeft?: React.ReactNode;
  /** Element rendered after the label. */
  iconRight?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): JSX.Element;
