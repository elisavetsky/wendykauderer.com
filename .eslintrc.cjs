module.exports = {
   // ...
   // parser: "@typescript-eslint/parser",
   // plugins: ["@typescript-eslint"],
   root: true,
   extends: [
      // ...
      "plugin:astro/recommended",
      "plugin:astro/jsx-a11y-strict",
      "plugin:mdx/recommended",
      // "plugin:@typescript-eslint/recommended",
   ],
   // ...
   overrides: [
      {
         // Define the configuration for `.astro` file.
         files: ["*.astro"],
         // Allows Astro components to be parsed.
         parser: "astro-eslint-parser",
         // Parse the script in `.astro` as TypeScript by adding the following configuration.
         // It's the setting you need when using TypeScript.
         // parserOptions: {
         // parser: "@typescript-eslint/parser",
         // extraFileExtensions: [".astro"],
         // },
         rules: {
            // override/add rules settings here, such as:
            // "astro/no-set-html-directive": "error"
         },
      },
      {
         files: ["astro.config.mjs"],
         env: {
            node: true,
            "astro/astro": true, // I'm not sure about this
            es2020: true,
         },
         parserOptions: {
            sourceType: "module",
         },
      },
      {
         files: ["*.mdx"],
         extends: "plugin:mdx/recommended",
      },
      // ...
   ],
};
