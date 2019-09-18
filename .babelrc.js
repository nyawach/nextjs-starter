module.exports = {
  "presets": [
    "next/babel",
    "@emotion/babel-preset-css-prop",
    "@babel/preset-env",
    "@babel/preset-react",
  ],
  "plugins": [
    [
      "module-resolver", {
        "alias": {
          "~": "./src"
        }
      }
    ]
  ],
}
