import * as React from 'react';

export type WordmarkSize = 'sm' | 'md' | 'lg';

/**
 * The TD&H typographic wordmark — Archivo extrabold with the orange ampersand.
 * @startingPoint section="Brand" subtitle="TD&H wordmark with division sublines" viewport="700x210"
 */
export interface WordmarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Division / module label, e.g. "Engineering", "Permitting & Reg", "AI Hub". */
  subline?: React.ReactNode;
  /** Set the subline on the wordmark's baseline instead of stacking it beneath. @default false */
  inline?: boolean;
  /** @default "sm" */
  size?: WordmarkSize;
  /** Invert for the navy or teal surfaces. @default false */
  onDark?: boolean;
}

export declare function Wordmark(props: WordmarkProps): JSX.Element;
