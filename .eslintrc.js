module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'eslint-plugin-html', 'html'],
  settings: {
    'html/html-extensions': ['.html'],
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'prefer-arrow-callback': 'warn',
    'prettier/prettier': 'error',
    'import/no-cycle': 'warn',
  },
};
