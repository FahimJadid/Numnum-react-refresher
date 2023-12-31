### React Episode Ten Notes

# React Food Ordering Application :

# Q&A:

- # Q: What is SAAS and SCSS ?

  - Ans: SAAS is a CSS preprocessor that allows us to use variables, nested rules, mixins, inline imports, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.

  SCSS is a special type of file for SASS, a program written in Ruby that assembles CSS style sheets for a browser. SASS adds lots of additional functionality to CSS like variables, nesting and more which can make writing CSS easier and faster.

- # Q: What is Tailwind CSS ?

  - Ans: Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.

- # Q: What is PostCSS in Tailwind CSS ?

  - Ans: PostCSS is a tool for transforming CSS with JavaScript. It is a tool for transforming CSS with JavaScript plugins. These plugins can support variables and mixins, transpile future CSS syntax, inline images, and more.

- # Q: What is postcssrc in Tailwind CSS ?

  - Ans: PostCSS Config Helpers. PostCSS Config Helpers is a collection of helper functions for working with PostCSS configuration objects. It is used by cosmiconfig to normalize configuration files before they are passed to PostCSS. Bundlers uses postcssrc to understand how to process TailwindCSS files.

## Time to add Tailwind CSS to our application:

- # Step 1: Tailwind CSS Configuration:

  - Install Tailwind CSS
    `npm install -D tailwindcss postcss`
  - Install tailwindcss and its peer dependencies via npm, and then run the init command to generate tailwind.config.js.
    `npx tailwindcss init`
  - Configure PostCSS
    Create a .postcssrc file in your project root, and enable the tailwindcss plugin.
    ```js
    {
      "plugins": {
        "tailwindcss": {},
        "autoprefixer": {}
      }
    }
    ```
  - Configure your template paths
    Add the paths to all of your template files in your tailwind.config.js file.

    ```js
    /** @type {import('tailwindcss').Config} */

    module.exports = {
      content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
      theme: {
        extend: {},
      },
      plugins: [],
    };
    ```

  - Add the Tailwind directives to your CSS
    Create a ./src/index.css file and add the @tailwind directives for each of Tailwind’s layers:

    ```js
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
