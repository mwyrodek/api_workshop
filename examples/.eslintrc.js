module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [
    'mocha',
    "cypress",
  ],
  extends: [
    'airbnb-base',
    'plugin:mocha/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'mocha/no-mocha-arrows': 'off',
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "error",
    "cypress/assertion-before-screenshot": "warn",
    "cypress/no-force": "warn",
    "cypress/no-async-tests": "error",
    "cypress/no-pause": "error",
  },
};
