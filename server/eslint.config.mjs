import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  {
    files: ['./src/**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: [
      'js/recommended',
      tseslint.configs.recommended,
      eslintConfigPrettier,
    ],
    languageOptions: { globals: globals.browser },
    rules: {
      'no-unused-vars': ['off'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
]);
