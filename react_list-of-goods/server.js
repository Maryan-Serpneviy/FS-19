const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./config/webpack.base.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(8081, 'localhost', function (err, result) {
  if (err) {
    return console.log(err)
  }

  console.log('Listening at http://localhost:8081/')
})