import js from '@eslint/js';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
    js.configs.recommended,
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                browser: true,
                node: true,
            },
        },
        plugins: {
            'react-refresh': reactRefresh,
        },
        rules: {
            // Example rules
            'no-unused-vars': 'warn',
            'react-refresh/only-export-components': 'warn',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
