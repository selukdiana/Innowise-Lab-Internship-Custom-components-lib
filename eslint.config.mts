import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
  // Base JS/TS setup
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },

  // TypeScript recommended rules
  tseslint.configs.recommended,

  // React recommended rules
  {
    ...pluginReact.configs.flat.recommended,
    settings: { react: { version: 'detect' } },
    rules: {
      ...(pluginReact.configs.flat.recommended.rules ?? {}),
      // Using React 17+ JSX transform, do not require React in scope
      'react/react-in-jsx-scope': 'off',
      // We use TS for types, not prop-types
      'react/prop-types': 'off',
    },
  },

  // Disable formatting conflicts with Prettier
  eslintConfigPrettier,

  // Global ignores
  globalIgnores([
    'node_modules/**',
    'dist/**',
    'coverage/**',
    '*.d.ts',
    'webpack.config.js',
  ]),
]);
