module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'generator-star-spacing': 'off',
    'no-empty-pattern': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-new': 'off',
    'object-curly-newline': 'off',
    'no-unused-expressions': 'off',
    'no-trailing-spaces': ["error", { "skipBlankLines": true }],
  }
}
