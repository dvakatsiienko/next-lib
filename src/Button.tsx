/* Core */
import React from 'react';
import styled from 'styled-components';

/**
 * A custom Button component. Neat!
 */
export const Button: React.FC<ButtonProps> = (props) => {
    return <SButton type={props.type}>{props.children}</SButton>;
};
Button.defaultProps = {
    children: 'Click',
    type: 'button',
} as ButtonProps;

/* Styles */
const SButton = styled.button`
    width: 120px;
    height: 32px;
    border-radius: 4px;
    color: #fff;
    background-color: #1990ff;
    cursor: pointer;
    outline: none;
    border: 0;

    &:hover {
        background-color: #40a9ff;
    }
`;

/* Types */
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset';
    variant: Variant;
}
type Variant = 'primary' | 'secondary';

export const sum = (a: number, b: number) => {
    return a + b;
};

export default Button;
