import * as React from 'react';

export type EyebrowTone = 'teal' | 'accent' | 'muted' | 'onDark';

/** Signature TD&H section label — uppercase Space Mono with an orange tick. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. Use `onDark` over the teal band. @default "teal" */
  tone?: EyebrowTone;
  /** Show the leading tick mark. Ignored when `number` is set. @default true */
  tick?: boolean;
  /** Numbered app-surface form — renders zero-padded (`01.`) and drops the tick. */
  number?: number | string | null;
  children?: React.ReactNode;
}

export declare function Eyebrow(props: EyebrowProps): JSX.Element;
