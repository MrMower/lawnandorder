exports.modifyWebpackConfig = ({ config, stage }) => {
  config.removeLoader('url-loader');
  config.loader(`url-loader`, {
    test: /\.(svg|jpg|jpeg|png|gif|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    loader: `url`,
    exclude: new RegExp('./img/svg-component'),
    query: {
      name: `static/[name].[hash:8].[ext]`
    }
  });
  // only use svgr's loader for svgs in 'dir' if specified
  config.loader('svgr', {
    test: /\.svg$/,
    include: new RegExp('./img/svg-component'),
    loaders: [
      'babel-loader',
      `svgr/webpack`,
    ],
  });

  return config;
};
