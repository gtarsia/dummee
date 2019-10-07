module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'plugin:ava/recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: [2, 'never'],
  },
}
