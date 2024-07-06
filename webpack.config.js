module.exports = {
  // other configurations...
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: /node_modules\/stylis-plugin-rtl/, // Ignore stylis-plugin-rtl
      },
    ],
  },
  // other configurations...
};
