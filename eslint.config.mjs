import eslint from '@eslint/js';
import tseslint from 'typescript-eslint'
import globals from 'globals';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended});

export default tseslint.config(
  {
    languageOptions: { globals: {...globals.browser, ...globals.node} },
    files: ["src/**/*.tsx", "src/**/*.jsx", "src/**/*.ts", "src/**/*.js"],
    ignores: [".next/**.*", "node_modules/**.*"],
    plugins: pluginReactConfig,
    rules: {
      "quotes": ["error", "single"],
      "semi": "off",
      "@typescript-eslint/semi": "error",
      "comma-dangle": "off",
      "@typescript-eslint/comma-dangle": ["error", "always"],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "error",
    }
  },
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
);