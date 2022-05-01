module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  plugins: [
    'mocha',
  ],
  extends: [
    'airbnb-base',
    'plugin:mocha/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'mocha/no-mocha-arrows': 'off',
  },
};
