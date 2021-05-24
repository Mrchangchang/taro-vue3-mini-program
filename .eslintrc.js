/*
 * @Author: Mr Chang
 * @Date: 2021-05-01 00:54:05
 * @LastEditTime: 2021-05-23 10:27:19
 * @LastEditors: Mr Chang
 * @Description:
 * @FilePath: \basis-mini-program\.eslintrc.js
 */
// ESLint 检查 .vue 文件需要单独配置编辑器：
// https://eslint.vuejs.org/user-guide/#editor-integrations
const { defineConfig } = require('eslint-define-config')
module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    "taro/vue3",
    'plugin:vue/vue3-essential',
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    "@typescript-eslint/member-delimiter-style": [2 ,{
      multiline: {
        delimiter: 'none',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: true,
      },
      overrides: {
        interface: {
          multiline: {
            delimiter: 'none',
            requireLast: true,
          },
        },
      },
    }],
    'no-use-before-define': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires':'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
};
