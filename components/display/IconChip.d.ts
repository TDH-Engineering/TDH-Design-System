import * as React from 'react';

/** Tint tone. `teal` is the default; `field` (orange) only for field-vs-desk views. */
export type IconChipTone = 'teal' | 'field' | 'desk' | 'onDark';
export type IconChipSize = 'sm' | 'md' | 'lg';

/** Small tinted square holding a Lucide icon. */
export interface IconChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "teal" */
  tone?: IconChipTone;
  /** `md` (28px) for app cards, `lg` (46px) for marketing tiles. @default "md" */
  size?: IconChipSize;
  children?: React.ReactNode;
}

export declare function IconChip(props: IconChipProps): JSX.Element;
