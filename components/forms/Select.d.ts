import * as React from 'react';

/** Labeled native select with a custom caret. Pass <option>s as children. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function Select(props: SelectProps): JSX.Element;
