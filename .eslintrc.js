module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort'
  ],
  rules: {
    eqeqeq: 'error',
    'no-eval': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'sort-imports': 'off',
    'no-unused-vars': 'off',
    'no-unused-expressions': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx'
        ]
      }
    ],
    'import/prefer-default-export': 'off',
    'jsx-quotes': [
      'error',
      'prefer-single'
    ],
    camelcase: 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'import/order': 'off',
    'simple-import-sort/sort': 'error'
  }
}
