import React from "react";

/**
 * SVG progress ring for biometric stats — Sueño, Recuperación, Esfuerzo.
 * Heavy tabular number in the center.
 * @startingPoint section="Data" subtitle="Biometric progress rings (SVG)" viewport="700x200"
 */
export interface ProgressRingProps {
  /** Fill percentage 0–100. @default 0 */
  value?: number;
  /** Diameter in px. @default 120 */
  size?: number;
  /** Stroke width in px. @default 10 */
  stroke?: number;
  /** Arc color. @default var(--accent) */
  color?: string;
  /** Background track color. @default var(--bg-inset) */
  trackColor?: string;
  /** Cyan drop-shadow glow. @default false */
  glow?: boolean;
  /** Custom center node (defaults to `${value}%`). */
  centerValue?: React.ReactNode;
  /** Uppercase label beneath the value. */
  centerLabel?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function ProgressRing(props: ProgressRingProps): JSX.Element;
