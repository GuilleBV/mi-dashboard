import React from "react";

export interface TabBarItem {
  id: string;
  label: string;
  /** Icon node (Lucide recommended). */
  icon?: React.ReactNode;
}

/**
 * Fixed bottom navigation for the PWA shell — glass bar with an
 * electric-blue glowing active tab.
 * @startingPoint section="Navigation" subtitle="Glass bottom tab bar" viewport="700x140"
 */
export interface TabBarProps {
  /** Tab definitions. */
  items?: TabBarItem[];
  /** id of the active tab. */
  active?: string;
  /** Called with the next tab id. */
  onChange?: (id: string) => void;
  /** Floating rounded pill vs edge-to-edge bar. @default true */
  floating?: boolean;
  style?: React.CSSProperties;
}

export declare function TabBar(props: TabBarProps): JSX.Element;
