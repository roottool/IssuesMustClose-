const path = require('path')
const { join, resolve } = path

const publicDirPath = resolve(__dirname, join('..', 'public'))
const srcDirPath = resolve(__dirname, join('..', 'src'))
const tsconfigPath = resolve(__dirname, join('..', 'tsconfig.json'))

const storybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    'storybook-addon-designs',
    '@storybook/addon-knobs',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.stories\.tsx?$/],
          include: [srcDirPath],
        },
        loaderOptions: {
          parser: 'typescript',
          prettierConfig: { printWidth: 100 },
        },
      },
    },
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: tsconfigPath,
        },
        include: [srcDirPath],
        transpileManager: true,
      },
    },
  ],
  webpackFinal: (config) => {
    config.resolve.alias['#'] = publicDirPath
    config.resolve.alias['@'] = srcDirPath

    config.resolve.extensions.push('.ts', '.tsx', '.png')
    return config
  },
}

module.exports = storybookConfig
