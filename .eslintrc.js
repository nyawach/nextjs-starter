module.exports = {
  "extends": ["airbnb", "plugin:prettier/recommended"],
  "plugins": ["@typescript-eslint", "react-hooks"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "rules": {
    "arrow-parens": [2, "as-needed"],
    "curly": [1, "all"],
    "no-unused-vars": 0,
    "@typescript-eslint/explicit-member-accessibility": 2,
    "@typescript-eslint/no-unnecessary-type-assertion": 2,
    "@typescript-eslint/no-explicit-any": 2,
    "@typescript-eslint/no-unused-vars": 2,
    "prefer-arrow/prefer-arrow-functions": 0,
    "react/jsx-filename-extension": [
      1,
      { "extensions": [".js", ".jsx", ".tsx"] }
    ],
    "react-hooks/rules-of-hooks": 2,
    "import/no-duplicates": 0,
    "import/no-unresolved": 0,
    "no-undef": 1,
    "react/no-array-index-key": 0,
    "prettier/prettier": 1,
    "jsx-a11y/label-has-associated-control": 1,
    "jsx-a11y/label-has-for": 1,
    "import/prefer-default-export": 1,
    "import/no-extraneous-dependencies": 1,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-indent-props": 1,
    "react/jsx-closing-bracket-location": 1,
    "react/jsx-closing-tag-location": 1,
    "react/jsx-indent" : 1,
    "react/prop-types": 0,
    "no-shadow": 1,
    "no-param-reassign" : 1
  },
  "globals": {
    "window": true,
    "document": true
  },
  "env": {
    "jest": true
  }
}
