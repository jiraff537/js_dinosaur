// webpack.config.js
// node_modules\.bin\webpack --display-error-details
// npm run build
// npm run watch
module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }
      ]
    }
  };