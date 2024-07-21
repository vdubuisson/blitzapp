// @ts-check
const eslint = require("@eslint/js");
const eslintCompat = require("@eslint/compat");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const eslintUnusedImports = require("eslint-plugin-unused-imports");

const path = require('node:path');
const url = require("node:url");

const gitignorePath = path.resolve(__dirname, ".gitignore");

module.exports = tseslint.config(
  eslintCompat.includeIgnoreFile(gitignorePath),
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      eslintPluginPrettierRecommended
    ],
    plugins: {
      "unused-imports": eslintUnusedImports,
    },
    processor: angular.processInlineTemplates,
    rules: {
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
          "warn",
          {
              "vars": "all",
              "varsIgnorePattern": "^_",
              "args": "after-used",
              "argsIgnorePattern": "^_",
          },
      ],
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "lgmj",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "lgmj",
          style: "kebab-case",
        },
      ],
      "@angular-eslint/component-class-suffix": [
        "error",
        {
          "suffixes": ["Page", "Component"]
        }
      ]
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  },
  {
    files: ["**/*.component.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
      eslintPluginPrettierRecommended
    ],
    rules: {},
  }
);
