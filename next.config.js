const { join } = require('path')

const withCSS = require('@zeit/next-css')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const DEV_TSCONFIG = 'tsconfig.json'
const PROD_TSCONFIG = 'tsconfig.prod.json'

module.exports = withCSS({
  webpack: (config, { dev }) => {
    const configFile = dev ? DEV_TSCONFIG : PROD_TSCONFIG
    config.module.rules = [
      ...config.module.rules,
      {
        loader: 'file-loader',
        test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf)$/i,
      },
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
          {
            loader: '@linaria/webpack-loader',
            options: {
              sourceMap: dev,
            },
          },
        ],
      },
    ]

    config.resolve.alias['~'] = join(__dirname, 'public')
    config.resolve.alias['@'] = join(__dirname, 'src')

    config.plugins = [
      ...config.plugins,
      new ForkTsCheckerWebpackPlugin({
        eslint: {
          // required - same as command
          // `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
          files: './src/**/*.{ts,tsx,js,jsx}',
        },
      }),
    ]

    return config
  },
})
