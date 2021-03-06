module.exports = {
  ignorePatterns: ['.env'],
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'no-console': 'off',
    'no-return-await': 'off',
    'no-underscore-dangle': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'no-param-reassign': 'off',
    'dot-notation': 'off',
    'react/jsx-boolean-value': 'off',
    'react/forbid-prop-types': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'either',
        depth: 25,
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/forbid-prop-types': 'off',
    'no-unused-expressions': 'off',
    'array-callback-return': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
