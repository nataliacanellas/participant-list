module.exports = {
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  rules: {
    semi: 'off',
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['.ts', '.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'import/no-duplicates': ['error', { considerQueryString: true }],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-alert': 'off',
        curly: 'off',
        'react-native/no-inline-styles': 'off',
      },
    },
    {
      files: ['*/.test.js', '*/.test.jsx', 'jest.*.js'],
      env: {
        jest: true,
      },
    },
  ],
}
