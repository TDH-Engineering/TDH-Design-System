import * as React from 'react';

/** Accent tone for the leading icon. `teal` default; `field` (orange) is opt-in. */
export type SectionHeaderTone = 'teal' | 'field' | 'desk';

/** App-surface section header — icon + title + inline mono meta on one line. */
export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Leading Lucide icon, colored by `tone`. */
  icon?: React.ReactNode;
  title: React.ReactNode;
  /** Mono uppercase meta segments, joined with a middot. */
  meta?: React.ReactNode[] | React.ReactNode;
  /** @default "teal" */
  tone?: SectionHeaderTone;
}

export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;
