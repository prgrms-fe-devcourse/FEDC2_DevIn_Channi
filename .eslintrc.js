module.exports = {
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['react-hooks'],
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 0,
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'consistent-return': 'off',
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
