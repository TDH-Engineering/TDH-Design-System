import * as React from 'react';

export type BadgeVariant = 'teal' | 'tealDark' | 'orange' | 'outline' | 'success' | 'warning' | 'danger';

/**
 * Small status / category tag in Space Mono. Default to `outline` or `teal`;
 * `orange` only where the badge is genuinely the most important mark on the
 * view. `success` / `warning` / `danger` are for real state, not decoration.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "outline" */
  variant?: BadgeVariant;
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): JSX.Element;
