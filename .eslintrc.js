module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/prettier',
    'eslint-config-prettier',
    'plugin:vuetify/base'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'error',
    'no-undef': 'off', // invalid
    'no-irregular-whitespace': 'off',
    'no-useless-escape': 'off', // invalid
    'vue/no-mutating-props': 'error', // invalid
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'error',
    'prettier/prettier':
      process.env.NODE_ENV === 'production' ? 'off' : 'error',
    'vue/require-explicit-emits':
      process.env.NODE_ENV === 'production' ? 'off' : 'error',
    'vue/order-in-components':
      process.env.NODE_ENV === 'production' ? 'off' : 'error'
  }
}
