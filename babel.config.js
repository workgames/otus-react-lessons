module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
  plugins: [],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-runtime'],
    },
    production: {
      plugins: [],
    },
    development: {
      plugins: [],
    },
  },
};
