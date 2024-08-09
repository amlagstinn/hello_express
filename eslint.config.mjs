import globals from "globals";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
    
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "semi": "error",
      "indent": [
        "error",
        2,
      ],
      "quote": ["error", "double"]
    }
  }
  ];