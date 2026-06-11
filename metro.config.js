const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);


config.transformer.getTransformOptions = () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: false,
    engine: 'jsc',
    hermesParser: false,
  },
});


config.transformer.assetPlugins = [];

module.exports = config;