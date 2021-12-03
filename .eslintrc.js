module.exports = {
  ignorePatterns: ['!.eslintrc.js', '!.babelrc.js', '!.storybook/**/*.(js|ts)'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  plugins: [
    'prettier',
    'react',
    'react-hooks',
    'tailwindcss',
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
}
