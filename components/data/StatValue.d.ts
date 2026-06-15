import React from "react";

/**
 * Large numeric figure with privacy masking + delta — net worth / patrimonio.
 */
export interface StatValueProps {
  /** Pre-formatted value string, e.g. "€48.250". */
  value?: React.ReactNode;
  /** Replace value with •••••• when true. @default false */
  hidden?: boolean;
  /** @default "lg" */
  size?: "sm" | "md" | "lg" | "hero";
  /** Change indicator, e.g. "+2,4%". */
  delta?: React.ReactNode;
  /** @default "up" */
  deltaDirection?: "up" | "down" | "flat";
  /** Uppercase label above the figure. */
  label?: React.ReactNode;
  /** @default "left" */
  align?: "left" | "center";
  /** White→electric-blue text gradient (hero figures). @default false */
  gradient?: boolean;
  style?: React.CSSProperties;
}

export declare function StatValue(props: StatValueProps): JSX.Element;
