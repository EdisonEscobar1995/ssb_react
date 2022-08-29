const webpack = require("webpack");

module.exports = function override (config, env) {
  console.log('override')
  let loaders = config.resolve
  loaders.fallback = {
      // "fs": false,
      // "tls": false,
      // "net": false,
      // "http": require.resolve("stream-http"),
      // "https": false,
      // "zlib": require.resolve("browserify-zlib") ,
      // "path": require.resolve("path-browserify"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer"),
      "crypto": require.resolve("crypto-browserify")
  };
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
    }),
  ]
  
  return config
}