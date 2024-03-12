module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'no-console': 'warn',
        'brace-style': ['error', 'stroustrup'],
        'react/jsx-no-useless-fragment': 'warn',
        'no-unused-expressions': 'error',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': [
            'error',
            { indentMode: 4, ignoreTernaryOperator: true },
        ],
        indent: ['error', 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'prettier/prettier': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
    },
};
