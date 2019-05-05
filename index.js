module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true
  },

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint'],

  extends: ['typescript', 'manpacker'],

  rules: {
    '@typescript-eslint/indent': 'off'
  }
}
