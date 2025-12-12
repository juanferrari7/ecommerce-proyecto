import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    ignores: ["dist"],
  },

  js.configs.recommended,
  {
    ...react.configs.recommended,

  },

  {
    files: ["**/*.{js,jsx}"],
        languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,   // ⬅️ HABILITA JSX
        },
      },
      
    },
    global: {
      document: "readonly",
      window: "readonly"
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // ❗️DESACTIVAR ESTA REGLA VIEJA
      "react/jsx-uses-react": "off",     // ❗️DESACTIVAR ESTA TAMBIÉN
    },
  },
];
