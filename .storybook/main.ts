import type { StorybookConfig } from '@storybook/react-vite';
<<<<<<< HEAD
import svgr from 'vite-plugin-svgr';
=======
>>>>>>> todari

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
<<<<<<< HEAD
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      plugins: [
        svgr({
          svgrOptions: {
            icon: true,
          },
        }),
      ],
      optimizeDeps: {
        include: ['**/*.svg'],
      },
    });
  },
};

=======
};
>>>>>>> todari
export default config;
