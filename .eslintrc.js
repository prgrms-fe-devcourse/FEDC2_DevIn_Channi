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
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'no-param-reassign': 'off',
    'dot-notation': 'off',
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
