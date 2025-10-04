import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
  recommended: true
});

export default [
  ...compat.config({
    extends: ["eslint:recommended"]
  })
];
