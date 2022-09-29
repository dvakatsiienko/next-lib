import React from 'react';
/**
 * A custom Button component. Neat!
 */
export declare const Button: React.FC<ButtonProps>;
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant: Variant;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick: () => void;
}
declare type Variant = 'primary' | 'secondary';
export declare const sum: (a: number, b: number) => number;
export default Button;
