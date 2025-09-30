import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginImport from 'eslint-plugin-import';

export default defineConfig([
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
  tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    settings: { react: { version: 'detect' } },
    rules: {
      ...(pluginReact.configs.flat.recommended.rules ?? {}),
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
  {
    ...eslintPluginImport.flatConfigs.recommended,
    rules: {
      ...(eslintPluginImport.flatConfigs.recommended.rules ?? {}),
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            ['sibling', 'parent'],
            'index',
          ],
          'newlines-between': 'always',
        },
      ],
      'import/no-unresolved': 'off',
    },
  },
  eslintConfigPrettier,

  globalIgnores([
    'node_modules/**',
    'dist/**',
    'coverage/**',
    '*.d.ts',
    'webpack.config.js',
  ]),
]);
