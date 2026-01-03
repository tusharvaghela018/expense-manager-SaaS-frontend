import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),

  /* ================= FRONTEND (React) ================= */
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': 'error',

      // Relaxed rules
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',

      'no-console': 'off',
      'no-debugger': 'warn',
      'no-undef': 'error',
      'no-duplicate-imports': 'error',
      'prefer-const': 'error',
    },
  },

  /* ================= NODE / CONFIG FILES ================= */
  {
    files: ['vite.config.*', '**/*.config.*'],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'no-undef': 'off',
    },
  },
]);
