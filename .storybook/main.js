module.exports = {
    stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    typescript: { check: true },
    features: { storyStoreV7: true },
    core: {
        // builder: 'webpack5',
        builder: '@storybook/builder-vite',
    },
};
