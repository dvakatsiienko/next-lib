export const ButtonSimple = (props: ButtonSimpleProps) => {
    return (
        <button disabled = { props.disabled } type = { props.type } onClick = { props.onClick }>
            {props.children}
        </button>
    );
};

/* Types */
interface ButtonSimpleProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant: Variant;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick: () => void;
}
type Variant = 'primary' | 'secondary';
