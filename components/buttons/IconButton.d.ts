import * as React from 'react';

export type IconButtonVariant = 'ghost' | 'outline' | 'solid';
export type IconButtonSize = 'sm' | 'md' | 'lg';

/** Square, icon-only button. Provide an aria-label. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  children?: React.ReactNode;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
