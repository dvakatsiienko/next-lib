/* Core */
import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import '../theme/global.css';

const darkTheme = {};

const lightTheme = {};

// addDecorator((Story) => {
//     // <StyledEngineProvider theme={lightTheme}>
//     //     <MUIThemeProvider theme={lightTheme}>{story()}</MUIThemeProvider>
//     // </StyledEngineProvider>
//     return (
//         <ThemeProvider theme={lightTheme}>
//             <Story />
//         </ThemeProvider>
//     );
// });

const withTheme = (Story, context) => {
    const { theme } = context.parameters;

    const storyTheme = theme === 'dark' ? darkTheme : lightTheme;

    // <GlobalStyle />

    return (
        <ThemeProvider theme={storyTheme}>
            <Story />
        </ThemeProvider>
    );
};

export const parameters = {
    actions: { argTypesRegex: '^on.*' },
};

export const decorators = [withTheme];
