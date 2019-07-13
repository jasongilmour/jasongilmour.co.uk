const fs = require('fs');

const prettierOptions = JSON.parse(fs.readFileSync('./.prettierrc', 'utf8'));

module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:eslint-comments/recommended',
  ],
  parser: 'babel-eslint',
  plugins: [
    'react',
    'prettier',
    'jsx-a11y',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src', '.'],
      },
      'babel-module': {
        alias: {
          storybook: './.storybook',
        },
      },
    },
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': ['warn', prettierOptions],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'max-len': [
      'error',
      {
        code: 200,
        ignoreRegExpLiterals: true,
        tabWidth: 4,
      },
    ],
    'no-console': [1],
    'linebreak-style': 'off',
  },
};
