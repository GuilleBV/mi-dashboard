import React from "react";

/**
 * The foundational dashboard surface — top-lit gradient tile with hairline
 * border and large radius. Compose every dashboard module inside one.
 * @startingPoint section="Layout" subtitle="Bento surface card with header + glow" viewport="700x240"
 */
export interface BentoCardProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Card title (rendered in the header row). */
  title?: React.ReactNode;
  /** Uppercase micro-label above the title. */
  eyebrow?: React.ReactNode;
  /** Right-aligned header slot (button, toggle, chevron). */
  action?: React.ReactNode;
  /** Accent glow. @default "none" */
  glow?: "none" | "blue" | "green" | "danger";
  /** Use translucent glass background + backdrop blur. @default false */
  glass?: boolean;
  /** Flat zinc fill instead of the lit gradient. @default false */
  flat?: boolean;
  /** Override padding. @default var(--pad-card) */
  padding?: string;
  /** Pointer cursor + hover affordance. @default false */
  interactive?: boolean;
  style?: React.CSSProperties;
}

export declare function BentoCard(props: BentoCardProps): JSX.Element;
