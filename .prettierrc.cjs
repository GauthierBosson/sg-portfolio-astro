/** @type {import("prettier").Config} */
const config = {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  trailingComma: 'all',
  jsxBracketSameLine: true,
  bracketSpacing: false,
  parser: 'typescript',
  printWidth: 80,
  singleQuote: true,
  tabWidth: 2,
  semi: true,
};

module.exports = config;
