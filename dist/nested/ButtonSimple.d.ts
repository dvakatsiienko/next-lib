/// <reference types="react" />
export declare const ButtonSimple: (props: ButtonSimpleProps) => JSX.Element;
interface ButtonSimpleProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant: Variant;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick: () => void;
}
declare type Variant = 'primary' | 'secondary';
export {};
