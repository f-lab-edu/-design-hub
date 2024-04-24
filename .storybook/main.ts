import { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import viteTsconfig from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    return mergeConfig(config, { plugins: viteTsconfig(), define: { 'process.env': {} } });
  },
};

export default config;