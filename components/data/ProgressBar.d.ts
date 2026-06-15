import React from "react";

/**
 * Ultra-thin (4px) pill progress bar with an accent fill. The workhorse
 * metric indicator across Overview, Gym, Salud and Finanzas.
 */
export interface ProgressBarProps {
  /** Fill percentage 0–100. @default 0 */
  value?: number;
  /** Fill color (any CSS color or token). @default var(--accent) */
  color?: string;
  /** Track color. @default var(--bg-inset) */
  trackColor?: string;
  /** Track height. @default var(--bar-h) (4px) */
  height?: string;
  /** Add the electric glow to the fill. @default false */
  glow?: boolean;
  /** Optional left-side caption above the bar. */
  label?: React.ReactNode;
  /** Optional right-side value above the bar. */
  valueLabel?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
