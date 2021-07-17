module.exports = {
  presets: [['@babel/preset-env', { targets: 'defaults' }], '@babel/preset-typescript'],
  plugins: [],
  env: {
    production: {
      plugins: [],
    },
    development: {
      plugins: [],
    },
  },
};
