const { defineConfig } = require('eslint/config');
const tsParser = require('@typescript-eslint/parser');
const eslintJs = require('@eslint/js');
const eslintTs = require('typescript-eslint');
const globals = require('globals');

const tsFiles = ['**/*.ts'];

module.exports = defineConfig([
  { ignores: ['.eslintrc.js'] },
  eslintJs.configs.recommended,
  ...eslintTs.configs.recommended.map((config) => ({
    ...config,
    files: tsFiles,
  })),
  ...eslintTs.configs.stylistic.map((config) => ({
    ...config,
    files: tsFiles,
  })),
  {
    files: tsFiles,
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': ['error', { allow: ['warn', 'error'] }],
    },
  },
]);
