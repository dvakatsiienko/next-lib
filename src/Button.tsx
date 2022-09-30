/* Core */
import React, { type PropsWithChildren } from 'react';
import styled from 'styled-components';

/**
 * A custom Button component. Neat!
 */
export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <SButton
            $variant = { props.variant }
            disabled = { props.disabled }
            type = { props.type }
            onClick = { props.onClick }
        >
            {props.children}
        </SButton>
    );
};
Button.defaultProps = {
    children: 'Click',
    type:     'button',
    disabled: false,
    onClick:  () => null,
} as Partial<ButtonProps>;

/* Styles */
const SButton = styled.button<SButtonPRops>`
    width: 120px;
    height: 32px;
    border-radius: 4px;
    color: #fff;
    background-color: #1990ff;
    outline: none;
    border: 1px solid currentColor;
    cursor: pointer;

    &:hover {
        background-color: #40a9ff;
    }

    &:disabled {
        background-color: #808080;
        cursor: not-allowed;
    }

    ${(props) => props.$variant === 'secondary'
        && `
        background-color: #4f19ff;

        &:hover {
            background-color: #6b40f8;
        }
    `}
`;

/* Types */
interface ButtonPropsBase extends React.HTMLAttributes<HTMLButtonElement> {
    variant: Variant;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick: () => void;
}
type Variant = 'primary' | 'secondary';
interface SButtonPRops {
    $variant: Variant;
}

export type ButtonProps = PropsWithChildren<ButtonPropsBase>

export const sum = (a: number, b: number) => {
    return a + b;
};

export default Button;
