const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Força o Metro a usar o perfil "default" (JSC) em vez de Hermes para web
config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: false,
    engine: 'jsc',           // sobrescreve qualquer herança de Hermes
    hermesParser: false,
  },
});

module.exports = config;