import { FC, HTMLAttributes } from 'react';

/**
 * A custom Button component. Neat!
 */
declare const Button: FC<ButtonProps>;
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset';
}

declare const sum: (a: number, b: number) => number;

declare const log: () => void;

export { Button, log, sum };
