import * as React from 'react';

/**
 * The deep-navy platform rail above the app shell — the one place navy appears.
 */
export interface PlatformBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small mono uppercase label above the title. @default "TDH AI" */
  eyebrow?: React.ReactNode;
  /** Platform name, e.g. "TDH AI Platform". */
  title?: React.ReactNode;
  /** Optional right-aligned content (account, environment tag). */
  right?: React.ReactNode;
}

export declare function PlatformBar(props: PlatformBarProps): JSX.Element;
