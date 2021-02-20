module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential"],
  rules: {
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': 0,
    'comma-dangle': 0,
    'semi': 0,
    'object-curly-spacing': 0,
    'space-before-function-paren': 0,
    'no-sequences': 0,
    'arrow-spacing':0,
    'one-var':0,
    'spaced-comment':0,
    'eol-last': 0,
    'quotes': 0,
    'no-unused-vars': 0,
    'no-unused-expressions': 0,
    'comma-spacing': 0,
    'eqeqeq': 0
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
