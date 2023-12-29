const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    es2023: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '*.cjs',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: [
        '*.ts',
        '*.tsx',
      ],
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
  ignorePatterns: [
    'dist/**/*',
    '.eslintrc.cjs',
    'src\shared\i18n\**\*',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'import-newlines',
    'react-refresh',
    'react',
    'unused-imports',
  ],
  rules: {
    '@typescript-eslint/lines-between-class-members': [ 'warn', 'always'],
    '@typescript-eslint/member-delimiter-style': 'warn',
    '@typescript-eslint/member-ordering': 'warn',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-misused-promises': [
      'warn', {
        'checksVoidReturn': false
      }
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unused-vars': [
      'off', {
        'argsIgnorePattern': '_',
        'varsIgnorePattern': '_',
      }
    ],
    '@typescript-eslint/object-curly-spacing': [ 'warn', 'always' ],
    'react/display-name': 'off',
    'react/jsx-closing-bracket-location': [ 'warn', 'tag-aligned' ],
    'react/jsx-closing-tag-location': 'warn',
    'react/jsx-first-prop-new-line': [ 'warn', 'multiprop' ],
    'react/jsx-max-props-per-line': [
      'warn', {
        maximum: 1,
        when: 'always',
      }
    ],
    'react/jsx-tag-spacing': [
      'warn', {
        afterOpening: 'never',
        beforeClosing: 'allow',
        beforeSelfClosing: 'always',
        closingSlash: 'never',
      },
    ],
    'react/jsx-sort-props': [
      'warn', {
        callbacksLast: true,
        multiline: 'first',
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
      },
    ],
    'comma-dangle': [
      'warn', {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'import-newlines/enforce': [
      'warn', {
        'items': 1,
        'max-len': 120,
        'forceSingleLine': true,
      },
    ],
    'indent': [ 'warn', 2 ],
    'jsx-quotes': [ 'warn', 'prefer-double' ],
    'linebreak-style': [ 'warn', 'unix' ],
    'lines-between-class-members': 'off',
    'max-len': [ 'warn', 120 ],
    'no-console': 'warn',
    'no-multiple-empty-lines': [
      'warn', {
        max: 1,
        maxEOF: 1,
      },
    ],
    'object-curly-newline': [
      'warn', {
        minProperties: 2,
        multiline: true,
      },
    ],
    'object-curly-spacing': 'off',
    'object-property-newline': 'warn',
    'quotes': [ 'warn', 'single' ],
    'semi': [ 'warn', 'never' ],
    'sort-imports': 'warn',
    'sort-keys': 'warn',
    'unused-imports/no-unused-imports': 'warn',
  },
  settings: { react: { version: 'detect' } },
})
