module.exports = {
  ignorePatterns: ['.env'],
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'consistent-return': 'off',
    'no-return-await': 'off',
    'no-underscore-dangle': 'off',
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
