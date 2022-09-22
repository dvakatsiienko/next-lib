/* Core */
import { type FC, type HTMLAttributes } from 'react';

/**
 * A custom Button component. Neat!
 */
export const Button: FC<ButtonProps> = props => {
  return <button type={props.type}>{props.children}</button>;
};
Button.defaultProps = {
  children: 'Click',
  type: 'button',
} as ButtonProps;

/* Types */
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
}

export const sum = (a: number, b: number) => {
  return a + b;
};

export default Button;
