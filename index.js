module.exports = {
  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint'],

  extends: ['typescript', 'manpacker'],

  rules: {
    '@typescript-eslint/indent': 'off'
  }
}
