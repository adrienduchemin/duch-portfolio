const path = require('path');

const importsRules = {
  // Those rules are already checked by TS itself: https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md//eslint-plugin-import
  'import/default': 0,
  'import/extensions': [
    'warn',
    'ignorePackages',
    { js: 'never', ts: 'never', tsx: 'never' },
  ],
  'import/named': 0,
  'import/namespace': 0,
  'import/newline-after-import': 'warn',
  'import/no-anonymous-default-export': 0,
  // Also disable computationally expensive rules that don't matter much
  'import/no-cycle': 0,
  'import/no-deprecated': 'warn',
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: ['**/*.d.ts', '**/*.js'],
    },
  ],
  'import/no-named-as-default': 0,
  'import/no-named-as-default-member': 0,
  'import/no-unresolved': 'error',
  'import/no-useless-path-segments': 'warn',
  'import/order': [
    'warn',
    {
      alphabetize: {
        caseInsensitive: true,
        order: 'asc',
      },
      groups: [
        ['builtin', 'external'],
        ['internal'],
        ['parent', 'sibling', 'index'],
      ],
      'newlines-between': 'always',
      pathGroups: [
        {
          group: 'internal',
          pattern: '#{*,*/**}',
        },
      ],
    },
  ],
  'import/prefer-default-export': 0,
  // until import/order sort keys in import (https://github.com/benmosher/eslint-plugin-import/issues/1670)
  // we can enable the memberSort of sort-imports but disable the rest
  // 'sort-imports': 0,
  'sort-imports': [
    'warn',
    {
      allowSeparatedGroups: true,
      ignoreCase: true,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    },
  ],
};

const typescriptRules = {
  '@typescript-eslint/no-non-null-assertion': 0,
  '@typescript-eslint/consistent-type-assertions': 'warn',
  '@typescript-eslint/no-array-constructor': 'warn',
  '@typescript-eslint/no-redeclare': 'warn',
  '@typescript-eslint/no-shadow': 2,
  '@typescript-eslint/no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTaggedTemplates: true,
      allowTernary: true,
    },
  ],
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      args: 'none',
      ignoreRestSiblings: true,
    },
  ],
  '@typescript-eslint/no-use-before-define': [
    'warn',
    {
      classes: false,
      functions: false,
      typedefs: false,
      variables: false,
    },
  ],
  '@typescript-eslint/no-unsafe-assignment': 0,
  '@typescript-eslint/no-useless-constructor': 'warn',
  '@typescript-eslint/prefer-nullish-coalescing': 'warn',
  '@typescript-eslint/prefer-optional-chain': 'warn',
  '@typescript-eslint/sort-type-union-intersection-members': 'warn',
  'no-array-constructor': 'off',
  'no-redeclare': 'off',
  'no-shadow': 0,
  'no-unused-expressions': 'off',
  'no-unused-vars': 'off',
  'no-use-before-define': 'off',
  'no-useless-constructor': 'off',
};

const baseRules = {
  'arrow-body-style': ['warn', 'as-needed'],
  'class-methods-use-this': 0,
  'consistent-return': 0,
  // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
  'default-case': 'off',
  'no-console': 0,
  // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
  'no-dupe-class-members': 'off',
  'no-extra-boolean-cast': 'error',
  'no-nested-ternary': 0,
  'no-plusplus': 0,
  'no-restricted-syntax': 0,
  // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
  'no-undef': 'off',
  'no-underscore-dangle': 0,
  'no-unsafe-optional-chaining': [
    'error',
    { disallowArithmeticOperators: true },
  ],
  'no-void': 0,
  'object-shorthand': ['warn', 'always'],
};

const jsxRules = {
  'jsx-a11y/alt-text': 'warn',
  'jsx-a11y/anchor-has-content': 'warn',
  'jsx-a11y/anchor-is-valid': [
    'warn',
    {
      aspects: ['noHref', 'invalidHref'],
    },
  ],
  'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
  'jsx-a11y/aria-props': 'warn',
  'jsx-a11y/aria-role': ['warn', { ignoreNonDOM: true }],
  'jsx-a11y/aria-unsupported-elements': 'warn',
  'jsx-a11y/heading-has-content': 'warn',
  'jsx-a11y/iframe-has-title': 'warn',
  'jsx-a11y/img-redundant-alt': 'warn',
  'jsx-a11y/no-access-key': 'warn',
  'jsx-a11y/no-distracting-elements': 'warn',
  'jsx-a11y/no-redundant-roles': 'warn',
  'jsx-a11y/role-has-required-aria-props': 'warn',
  'jsx-a11y/role-supports-aria-props': 'warn',
  'jsx-a11y/scope': 'warn',
};

const reactRules = {
  // TODO: enable this rule again when false positives will have disappeared
  'react/destructuring-assignment': 0,
  'react/display-name': 0,
  'react/jsx-filename-extension': [
    'warn',
    {
      extensions: ['.tsx'],
    },
  ],
  'react/jsx-no-duplicate-props': 'warn',
  'react/jsx-no-target-blank': 'warn',
  'react/jsx-no-undef': 'error',
  'react/jsx-pascal-case': [
    'warn',
    {
      allowAllCaps: true,
      ignore: [],
    },
  ],
  // Enable spreading props into a component, like `<Component {...props} />`
  'react/jsx-props-no-spreading': 0,
  'react/jsx-uses-react': 'warn',
  'react/jsx-uses-vars': 'warn',
  'react/no-array-index-key': 0,
  'react/no-unescaped-entities': 0,
  // This rule reports too much false positives in SFCs/HOCs/with destructuring
  // See for instance :
  // - https://github.com/yannickcr/eslint-plugin-react/issues/816
  // - https://github.com/yannickcr/eslint-plugin-react/issues/885
  'react/no-unused-prop-types': 0,
  // Disable this for now, since the back and forth transition done when
  // needing/not needing lifecycles anymore can really be a PITA
  'react/prefer-stateless-function': 0,
  'react/prop-types': 0,
  'react/react-in-jsx-scope': 0,
  // For now, it's supposed to be OK not to provide `defaultProps` for React
  // components whose props are optional, since they resolve as `undefined`
  'react/require-default-props': 0,
  // This rule is too restrictive and not really adapted to our needs
  'react/sort-comp': 0,
  // Let state be initialized outside of a class constructor
  'react/state-in-constructor': 0,
  // Enable definition of static class properties
  'react/static-property-placement': 0,
};

const reactHooksRules = {
  'react-hooks/exhaustive-deps': [
    'warn',
    { enableDangerousAutofixThisMayCauseInfiniteLoops: true },
  ],
  'react-hooks/rules-of-hooks': 'error',
};

module.exports = {
  overrides: [
    {
      env: {
        es2021: true,
        node: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'airbnb',
        'prettier',
      ],
      files: ['*.js'],
      plugins: ['import'],
      rules: {
        ...baseRules,
        ...importsRules,
      },
    },
    {
      env: {
        browser: true,
        es2021: true,
      },
      extends: [
        'next',
        'next/core-web-vitals',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'airbnb',
        'prettier',
      ],
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2021,
        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser//configuration
        project: 'tsconfig.json',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: [
        '@typescript-eslint',
        'import',
        'jsx-a11y',
        'react',
        'react-hooks',
      ],
      rules: {
        ...baseRules,
        ...importsRules,
        ...typescriptRules,
        ...reactRules,
        ...reactHooksRules,
        ...jsxRules,
      },
      settings: {
        // https://github.com/alexgorbatchev/eslint-import-resolver-typescript//configuration
        // https://github.com/benmosher/eslint-plugin-import//resolvers
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: path.resolve(__dirname, 'tsconfig.json'),
          },
        },
        react: {
          version: 'detect',
        },
      },
    },
  ],
  root: true,
};
