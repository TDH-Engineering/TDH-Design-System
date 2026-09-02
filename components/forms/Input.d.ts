import * as React from 'react';

/**
 * Labeled text input — mono uppercase label, 3px field, teal focus ring.
 * @startingPoint section="Forms" subtitle="Text field with label, hint and error states" viewport="700x140"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Uppercase mono field label. */
  label?: React.ReactNode;
  /** Mark the field required (orange asterisk). @default false */
  required?: boolean;
  /** Helper text beneath the field. */
  hint?: React.ReactNode;
  /** Error message — turns the field red and overrides hint. */
  error?: React.ReactNode;
}

export declare function Input(props: InputProps): JSX.Element;
