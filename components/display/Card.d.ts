import * as React from 'react';

export type CardAccent = 'left' | 'top';
/**
 * Accent rule color. `teal` is the default. `field` (orange) / `desk` (teal)
 * are the semantic pair — use them ONLY in views that genuinely distinguish
 * field/phone work from desk/in-hub work.
 */
export type CardTone = 'teal' | 'field' | 'desk';

/** Surface container — hairline border, near-square corners, flat at rest. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Accent rule position. `left` is the app-surface default; `top` is the marketing treatment. */
  accent?: CardAccent | null;
  /** Colors the accent rule. @default "teal" */
  tone?: CardTone;
  /** Render as the deep-teal panel (card-sized, not a full-bleed band). @default false */
  dark?: boolean;
  /** Lift + raise shadow on hover. @default false */
  interactive?: boolean;
  /** Opt back into the resting card shadow (marketing surfaces). @default false */
  raised?: boolean;
  /** Apply default body padding. @default true */
  padded?: boolean;
  /** Mono uppercase meta pinned to the footer's right edge (e.g. "FIELD APP"). */
  meta?: React.ReactNode;
  /** Footer content — typically the card's action button. */
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function Card(props: CardProps): JSX.Element;
