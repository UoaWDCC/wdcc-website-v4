import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.config({
        ignorePatterns: ["node_modules/", ".next/", "public/", "payload-types.ts", "(payload)/"],
        extends: ["next", "prettier"],
    }),
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    eslintConfigPrettier,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            "unused-imports": unusedImports,
        },
        rules: {
            // Custom overrides
            "@typescript-eslint/no-unused-vars": ["error"],
            "unused-imports/no-unused-imports": "error",
            "@typescript-eslint/consistent-type-definitions": ["error", "type"],
            "@typescript-eslint/no-confusing-void-expression": "off",
            "@typescript-eslint/restrict-template-expressions": [
                "error",
                {
                    allowNumber: true,
                    allowBoolean: true,
                    allowNullish: true,
                    allowAny: false,
                },
            ],
            "@typescript-eslint/no-empty-function": [
                "error",
                {
                    allow: ["arrowFunctions"], // Allow for function typing
                },
            ],

            // For migration
            "@typescript-eslint/no-unnecessary-condition": "off",
        },
    },
];

export default eslintConfig;
