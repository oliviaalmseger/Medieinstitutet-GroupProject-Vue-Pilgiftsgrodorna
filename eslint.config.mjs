import globals from 'globals'
import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */

export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    eslintConfigPrettier, // Load first to avoid rule overrides
    {
        languageOptions: { globals: globals.browser },
        rules: {
            camelcase: 'error',
            'comma-dangle': ['error', 'always-multiline'],
            curly: ['error', 'all'],
            'no-console': 'warn',
            quotes: ['error', 'single'], // Enforce single quotes
        },
    },
    pluginJs.configs.recommended,
]