import React from "react";

/**
 * iOS-style toggle. Off = recessed zinc track, On = electric-blue with glow.
 */
export interface SwitchProps {
  /** @default false */
  checked?: boolean;
  /** Called with the next boolean state. */
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  /** @default "md" */
  size?: "sm" | "md";
  ariaLabel?: string;
  style?: React.CSSProperties;
}

export declare function Switch(props: SwitchProps): JSX.Element;
