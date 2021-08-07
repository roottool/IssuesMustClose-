const { resolve } = require('path')

const withCSS = require('@zeit/next-css')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  '@adobe/react-spectrum',
  '@spectrum-icons/.*',
  '@react-spectrum/.*',
])

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '#': resolve(__dirname, 'public'),
      '@': resolve(__dirname, 'src'),
    }

    const DEV_TSCONFIG = resolve(__dirname, 'tsconfig.dev.json')
    const PROD_TSCONFIG = resolve(__dirname, 'tsconfig.prod.json')
    const configFile = dev ? DEV_TSCONFIG : PROD_TSCONFIG
    config.plugins = [
      ...config.plugins,
      new ForkTsCheckerWebpackPlugin({
        eslint: {
          files: './src/**/*.{ts,tsx}',
        },
        typescript: {
          configFile,
        },
      }),
    ]

    config.module.rules = [
      ...config.module.rules,
      {
        exclude: [/node_modules/],
        test: /\.tsx$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile,
              transpileOnly: true,
            },
          },
          { loader: 'babel-loader' },
        ],
      },
    ]
    return config
  },
}

module.exports = withPlugins([withCSS, withTM], nextConfig)
