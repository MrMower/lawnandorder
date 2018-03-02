const path = require('path');
exports.modifyWebpackConfig = ({ config, stage }) => {
  config.loader('svgr/webpack',{
    test: /\.svg$/, 
  });
  return config;
};

