import * as React from 'react';

export type ButtonVariant = 'primary' | 'accent' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * TD&H action button. Teal `primary` is the default for nearly everything;
 * `accent` (orange) is reserved for the one action class a view most wants
 * clicked. `secondary` is deep teal, `outline`/`ghost` for lower emphasis.
 * @startingPoint section="Buttons" subtitle="Teal / orange / outline / ghost button set" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Use `accent` for the single most important CTA. */
  variant?: ButtonVariant;
  /** Size. @default "md" */
  size?: ButtonSize;
  /** Render as a different element (e.g. "a" for links). @default "button" */
  as?: 'button' | 'a';
  /** Icon element placed before the label. */
  iconLeft?: React.ReactNode;
  /** Icon element placed after the label. */
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
