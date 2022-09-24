/* Core */
import React from 'react';

/**
 * A custom Star component. Neat!
 */
export const Star: React.FC<StarProps> = (props) => {
    return (
        <svg
            width='31'
            height='29'
            viewBox='0 0 31 29'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M15.4994 23.1854L24.5119 28.625L22.1202 18.3729L30.0827 11.475L19.5973 10.5854L15.4994 0.916687L11.4014 10.5854L0.916016 11.475L8.87852 18.3729L6.48685 28.625L15.4994 23.1854Z'
                fill={colors[props.color]}
            />
        </svg>
    );
};

const colors: Record<Color, string> = {
    blue: '#0091EA',
    red: '#ff0000',
};

/* Types */
export interface StarProps extends React.HTMLAttributes<HTMLOrSVGElement> {
    color: Color;
}
type Color = 'blue' | 'red';
