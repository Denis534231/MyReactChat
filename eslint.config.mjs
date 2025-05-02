import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      js,
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {

    },
  },
]);
