import * as React from 'react';

export interface BreadcrumbItem {
  label: React.ReactNode;
  href?: string;
}

/** Mono uppercase breadcrumb with chevron separators. */
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /** Trail items — strings or { label, href }. The last is rendered as current. */
  items?: (BreadcrumbItem | string)[];
}

export declare function Breadcrumb(props: BreadcrumbProps): JSX.Element;
