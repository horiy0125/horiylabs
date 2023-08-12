module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/prop-types': ['off'],
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/order': ['error'],
    'import/no-unresolved': 'off',
    'no-param-reassign': 'off',
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        quoteProps: 'as-needed',
        trailingComma: 'all',
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
