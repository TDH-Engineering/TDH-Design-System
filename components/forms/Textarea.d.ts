import * as React from 'react';

/** Labeled multi-line text input. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  required?: boolean;
  hint?: React.ReactNode;
}

export declare function Textarea(props: TextareaProps): JSX.Element;
