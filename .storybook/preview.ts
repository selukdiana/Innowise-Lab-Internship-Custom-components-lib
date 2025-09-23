import type { Preview } from '@storybook/react-webpack5';
import '!style-loader!css-loader!sass-loader!../src/index.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
