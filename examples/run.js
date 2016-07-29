const path = require('path');
const runLoaders = require('loader-runner').runLoaders;

runLoaders({
  resource: path.join(__dirname, './index.css'),
  loaders: [
    `${require.resolve('css-loader')}?modules&localIdentName=[path][name]---[local]---[hash:base64:5]`
  ],
  context: {
    // maybe use webpack config to replace the context
    minimize: true,
    options: {}
  }
}, function (err, result) {
  console.log(err, result.result)
});