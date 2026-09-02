import * as React from 'react';

export interface SiteFooterLink {
  label: React.ReactNode;
  href?: string;
}

/** The deep-teal brand footer band — inline wordmark over the firm tagline. */
export interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Division shown inline after the wordmark. @default "Engineering" */
  division?: React.ReactNode;
  /** The firm tagline. @default "Services Designed With You In Mind, Since 1965" */
  tagline?: React.ReactNode;
  /** Optional mono uppercase link row on the right. */
  links?: SiteFooterLink[];
}

export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
