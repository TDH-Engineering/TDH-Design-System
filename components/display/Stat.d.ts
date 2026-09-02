import * as React from 'react';

export type StatSize = 'sm' | 'md' | 'lg';

/** Big metric for stat bands — mono numerals with an orange suffix. */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The number, pre-formatted (e.g. "1965", "5", "$24"). */
  value: React.ReactNode;
  /** Small orange suffix (e.g. "+", "%", "yrs"). */
  suffix?: string;
  /** Uppercase mono caption beneath. */
  label?: React.ReactNode;
  size?: StatSize;
  /** Style for the teal band. @default false */
  onDark?: boolean;
}

export declare function Stat(props: StatProps): JSX.Element;
