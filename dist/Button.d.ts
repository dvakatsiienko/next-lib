import { FC, HTMLAttributes } from 'react';

/**
 * A custom Button component. Neat!
 */
declare const Button: FC<ButtonProps>;
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset';
}
declare const sum: (a: number, b: number) => number;

export { Button, ButtonProps, Button as default, sum };
