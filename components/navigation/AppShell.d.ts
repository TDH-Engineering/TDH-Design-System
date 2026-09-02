import * as React from 'react';

export interface AppShellNavItem {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
}

/** Persistent app frame — sidebar + gridded content region. */
export interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Division / module subline under the wordmark, e.g. "Construction", "Permitting & Reg". */
  product?: string;
  /** Navy platform rail rendered above the shell — pass a <PlatformBar>. */
  platformBar?: React.ReactNode;
  /** Brand band rendered flush below the content region — pass a <SiteFooter>. */
  contentFooter?: React.ReactNode;
  nav?: AppShellNavItem[];
  /** Id of the active nav item (gets the orange left rule). */
  activeId?: string | null;
  onNavigate?: (id: string) => void;
  /** Primary action pinned to the sidebar bottom — pass a <Button>. */
  cta?: React.ReactNode;
  /** Mono meta lines under the CTA, e.g. "TDH AI Platform / CMT Module · Internal use". */
  sidebarMeta?: React.ReactNode;
  /** Pass a <Breadcrumb> for the top bar. */
  breadcrumb?: React.ReactNode;
  /** Mono status text with a green dot, e.g. "10 tools · 5 field · 5 desk". */
  status?: React.ReactNode;
  /** Avatar initials. @default "TD" */
  initials?: string;
  /** Show the sidebar collapse toggle. @default true */
  collapsible?: boolean;
  /** Render the coarse blueprint grid on the content region. @default true */
  grid?: boolean;
  children?: React.ReactNode;
}

export declare function AppShell(props: AppShellProps): JSX.Element;
