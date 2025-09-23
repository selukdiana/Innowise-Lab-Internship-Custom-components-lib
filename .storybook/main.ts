import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-styling-webpack',
    {
      name: '@storybook/addon-styling-webpack',

      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  modules: {
                    auto: true,
                  },
                },
              },
            ],
          },
          {
            test: /\.s[ac]ss$/i,
            exclude: /\.module\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
          },
          {
            test: /\.s[ac]ss$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  modules: true,
                  esModule: false,
                },
              },
              require.resolve('resolve-url-loader'),
              require.resolve('sass-loader'),
            ],
          },
        ],
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
};
export default config;
