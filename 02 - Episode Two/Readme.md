### React Episode Two Notes

# Let's Build: Production Ready React Application

# Q&A:

- # Q: Does React singlehandedly make the application faster & production ready?
- Ans: No, it does not. To make our application faster and production ready, we need to use some other tools like Webpack/parcel/vite, Babel, etc.
- # Q: What is NPM & what it does?
- Ans: NPM is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website. The package manager and the registry are managed by npm, Inc. In simple words, with the help of NPM we can install, update, delete, and manage the packages in our application that were wrote by other developers. We can also use NPM to install the packages locally and globally on our system. We can also use NPM to run scripts also use NPM to install the packages as dev dependencies in our application.

- # Q: What is package.json?
- Ans: The package.json file is core to the Node.js ecosystem and is a fundamental part of understanding and working with Node.js, npm, and even modern JavaScript. This file is used as a manifest, storing information about applications, modules, packages, and more.
- The Essential npm Commands

  - Using `npm init` to initialize a project
  - Using `npm init --yes` to instantly initialize a project
  - Install modules with `npm install`
  - Install modules and save them to your package.json as a dependency & developer dependency
  - Install modules globally on your system

- # Q: What is the difference between dependencies and devDependencies?
- Ans: Dependencies are the packages that are required for the application to run. DevDependencies are the packages that are required for the development of the application. For example, if we are using React in our application, then React is a dependency. But if we are using Babel to convert our ES6 code to ES5, then Babel is a devDependency.

- # Q: What is the difference between local and global packages?
- Ans: Local packages are installed in the node_modules folder of your parent working directory. Global packages are installed in the /user/local directory of your system.

- # Q: What is the difference between npm install and npm ci?
- Ans: npm install reads package.json and installs all dependencies. npm ci is similar to npm install, except it's meant to be used in automated environments such as test platforms, continuous integration, and deployment – or any situation where you want to make sure you're doing a clean install of your dependencies.

- # Q: What is the difference between npm install and npm install --save?
- Ans: npm install installs the packages in the node_modules folder of your parent working directory. npm install --save installs the packages in the node_modules folder of your parent working directory and also adds the packages as a dependency in your package.json file.

- # Q: What is the difference between npm install and npm install --save-dev?
- Ans: npm install installs the packages in the node_modules folder of your parent working directory. npm install --save-dev installs the packages in the node_modules folder of your parent working directory and also adds the packages as a devDependency in your package.json file.

- # Q: What is the main property of package.json?
- Ans: The main property of package.json is used to specify the entry point of the application. For example, if we are using React in our application, then the entry point of our application will be index.js. So, we will specify index.js in the main property of package.json.

- # Q: What is the scripts property of package.json?
- Ans: The scripts property of package.json is used to specify the scripts that we want to run in our application. For example, if we want to run the application, then we will specify the command to run the application in the scripts property of package.json.

- # Q: What is a module?
- Ans: A module is just a piece of code in a file that you can call and use from other files. A modular design is the opposite of having all your project's code in one single file.

  - It's good for dividing concerns and features into different files, which helps visualization and organization of code.
  - Code tends to be easier to maintain and less prone to errors and bugs when it's clearly organized.
  - Modules can be easily used and reused in different files and parts of our project, without needing to rewrite the same code again.

- # Q: What is commonJS and ES6 module?
- Ans: CommonJS is a module format that was created for JavaScript outside the browser. It is still used today for Node.js applications. CommonJS modules are loaded synchronously. This means that the module is loaded and evaluated before the next line of code is executed.

- Ans: ES6 modules are the ECMAScript standard for working with modules. ES6 modules are loaded asynchronously. This means that the module is loaded in the background, and the next line of code is executed while the module is loading.

- # Q: How to use the CommonJS & ES6 module system in Node.js?
- Ans:

# CommonJS

- Export:

- `const function1 = () => {};`

- `const function2 = () => {};`

- `module.exports = {function1, function2};`

- `exports.function3 = () => {};`

- Import:

- `const foo = require('./foo.js');`

- `const axios = require("axios");`

- `foo.function1();`
- `foo.function2();`
- `foo.function3();`

- `const {function1, function2, function3} = require("./foo.js");`

- `function1();`
- `function2();`
- `function3();`

# ES6

To use the ES6 module system in Node.js, we have to add an additional key-value in our package.json which is "type": "module". By, this we specify Node.js to treat all .js files as modules. Any JS file importing other modules becomes the "top-level module" for the imported modules.

- Export:
- `const function1 = () => {};`
- `const function2 = () => {};`

- `export default {function1, function2};`

- `export const function3 = () => {};`

- Import:

- `import {function1, function2, function3} = from "./foo.js";`

- for a package after installing it
  `import chalk from "chalk";`

- now we can use them
  `function1();`
  `function2();`
  `function3();`

- # Q: ES6 vs CommonJS (and why ES6 is better?)?
- Ans: require is a function, hence it can be called anywhere in our code, even inside a code block (like an if statement or a for loop) but the same can't be done with import. We always have to import at the top aka root level of our code.

As we see above, require is just a function, hence it is called at runtime where import is static and checked at parse time rather than runtime. ES6 modules are pre-parsed in order to resolve further imports before the code is executed. CommonJS modules-load dependencies on demand while executing the code. Thus, we'll get all our errors beforehand in parse time (which is the case for import) and not in runtime (which is the case for require).
There are also certain helpful tools for static analysing which greatly benefit in writing error-free code. These tools can be used with import but not with require.
all our imports are hoisted which means that no matter where we put them, they will always be parsed and moved to the top.
all exports from ES6 are static which means we really know what modules we are importing.

- # Q: why are CommonJS modules still around in Node if ES6 modules are better?
- Ans: Because it is super difficult to get rid of the huge codebase in CommonJS all at once that has been supporting modules in Node for all these years. So, we have two first-class module systems in Node and having both CJS and ESM supported means there will be a fragmented community if the authors of packages decide to exclude one part of it by shipping a non-dual ESM package.

- # Q: What is the version property?
- Ans: The version property is a crucial part of a package.json, as it denotes the current version of the module that the package.json file is describing. The version syntax for package.json file is a way of specifying the acceptable range of versions for your package and its dependencies. It is based on the semantic versioning system, which defines three types of updates: major, minor, and patch. A major update changes the API or breaking behavior of your package, a minor update adds new features or enhancements, and a patch update fixes bugs or improves performance.

The version syntax uses caret (^) and tilde (~) symbols to indicate which update types your package can accept from dependencies.

- For example:

- ^1.0.0 means that your package can accept any version that is compatible with 1.0.0, but not higher than 1.0.0.
- ^1.0.x means that your package can accept any version that starts with 1.0.x, but not higher than 1.0.x.
- ~1.0 means that your package can accept any version that is compatible with 1.0, but not higher than 1.0.
- ~1.x means that your package can accept any version that starts with 1.x, but not higher than 1.x.
- ~x means that your package can accept any patch-level update for x.

You can also use other symbols to specify more complex ranges, such as:

- +x means that your package can accept any patch-level update for x.
- -x means that your package can accept any patch-level update for x up to a certain point in time.
- =x means that your package can only accept the exact version x.

# In the context of versioning in a package.json file, the caret (^) and tilde (~) symbols have specific meanings:

^ (Caret): If you write ^1.2.3, it means you want to allow updates that do not modify the left-most non-zero digit in the [major, minor, patch] tuple. In other words, this would allow minor and patch updates for versions 1.2.3 and above, but not 2.0.0.

~ (Tilde): If you write ~1.2.3, it means you want to allow only patch-level changes. For example, if you have version 1.2.3, you would accept any version 1.2.x where x is 3 or greater.

So, the main difference is that ^ allows minor and patch level updates, while ~ allows only patch level updates. This is based on the assumption that your dependencies follow semantic versioning.

- # Q: What is Babel?
- Ans: Babel is a JavaScript compiler. Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Babel can convert JSX syntax, strip out type annotations, and do lots more.

- # Q: What is a Bundler?
- Ans: A bundler is a tool that puts your code and all its dependencies together in one JavaScript file. There are many bundlers available in the market like Webpack, Parcel, Vite, etc. We can use any of them to bundle our code.
- Dividing our code into modules is nice because our codebase will be more organized and it will be easier to reuse our code. But these are advantages only for the development phase of a project. When in production, modules are not the best thing, as forcing the browser to make a request for each JS file might hurt the site's performance. This problem can be easily solved with the use of a module bundler. Simply put, module bundlers are programs that take JS modules as input and combine them into a single file (many module bundlers have many more features but that's their core concept).Thanks to this, as developers we can code our project dividing it into nicely organized pieces, and then run a module bundler to obtain the final code that will be used in production.This step of converting "development code" to "production code" is normally recognized as "build".

- # Q: Benefits of a Bundler and what are the cons?
- Ans:
  Benefits:

  - Dev Server and Local Server
  - Code Splitting - splitting code into smaller chunks
  - Tree Shaking - dead code elimination, unused code
  - File Watcher - watching for file changes
  - Bundling - combining multiple files into one
  - Minification - removing unnecessary characters from code
  - Hot reloading - reloading the page without losing the state
  - Image Optimization - compressing images
  - Code Transformation - transpiling code from ES6 to ES5
  - Reliable caching - caching files for better performance & faster load times
  - Transpilation - converting code from one language to another
  - Compression - compressing files for better performance
  - Consistent hashing - hashing files for better performance
  - Source maps - mapping code to the original source
  - Differential bundling - supporting multiple older browsers, creates fallbacks
  - Diagonistic reporting - reporting errors and warnings
  - Error Handling - handling errors
  - HTTPS - serving files over HTTPS

  Cons:

  - Complexity
  - Debugging
  - Build Time
  - Learning Curve
  - Configuration
  - Performance
  - Maintenance

- # Q: Difference between package.json and package-lock.json files
- Ans: why package.lock.json is necessary when you have package.json in your project application. package.lock.json is created for locking the dependency with the installed version. It will install the exact latest version of that package in your application and save it in package.json. Let’s say if the current version of the package is 1.3.2 then it will save the version with (^) sign. Here caret(^) means, it will support any higher version with major version 1 for eg. 1.2.2.

Without package.lock.json, there might be some differences in installed versions in different environments. To overcome this problem, package.lock.json is created to have the same results in every environment. It should be in source control with the package.json file because if any other user will clone the project and install dependencies then it will install the exact same dependencies as in package.lock.json to avoid differences.

| `package.json`                                                                       | `package-lock.json`                                                                                             |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| It contains basic information about the project.                                     | It describes the exact tree that was generated to allow subsequent installs to have the identical tree.         |
| It is mandatory for every project.                                                   | It is automatically generated for those operations where npm modifies either node_modules tree or package.json. |
| It records important metadata about the project.                                     | It allows future devs to install the same dependencies in the project.                                          |
| It contains information such as name, description, author, script, and dependencies. | It contains the name, dependencies, and locked version of the project.                                          |

More info:
Bear in mind that package.json contains only the direct dependencies, not the dependencies of your dependencies (sometimes called `nested or transitive dependencies`). This means with the standard package.json you can't control the versions of those nested dependencies, referencing them directly or as peer dependencies won't help as you also don't control the version tolerance that your direct dependencies define for these nested dependencies.

Even if you lock down the versions of your direct dependencies you cannot 100% guarantee that your full dependency tree will be identical every time. Secondly you might want to allow non-breaking changes (based on semantic versioning) of your direct dependencies which gives you even less control of nested dependencies plus you again can't guarantee that your direct dependencies won't at some point break semantic versioning rules themselves.

The solution to all this is the package-lock.json file which as described above locks in the versions of the full dependency tree. This allows you to guarantee your dependency tree for other developers or for releases whilst still allowing testing of new dependency versions (direct or indirect) using your standard package.json.

- # Q: What is the purpose of the 'node_modules' folder??
- Ans: You can think of the node_modules folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Node.js is trained to look for them there when you import them (without a specific path). I refer to it as a cache because the node_modules folder can be entirely recreated from scratch at any time by just reinstalling all the dependent modules (that should be listed in your project folders).

- # Q: What is the purpose of the '.gitignore' file?
- Ans: The .gitignore file is a text file that tells Git which files or folders to ignore in a project. A local .gitignore file is usually placed in the root directory of a project. ... gitignore file is committed into the Git repository, the rules would be applied to every user of that repository. Files like .env and node_modules folder are not committed to the repository. So, we have to add them in the .gitignore file.
  example:

```sh
    /node_modules
    /dist
    /.parcel-cache
```

### Build time : Building a web app with Parcel

# Installation

- First let's initialize a new npm project inside it:
- Now install a bundler, for example parcel:
- Parcel has a development server built in, which will automatically rebuild your app as you make changes. To start it, run the parcel CLI command : `npx parcel index.html`
- So far, we’ve been running the parcel CLI directly, but it can be useful to create some scripts in your package.json file to make this easier. We'll also setup a script to build your app for production using the parcel build command.
- Now let's add a script for build and development to our package.json to run parcel:
- Now we can run `npm run start` to start the development server, and `npm run build` to build your app for production.
- Install React and ReactDOM & remove the CDN links from index.html
- Now we can import React and ReactDOM in our App.js file and use them to render our app, otherwise it will throw an error that React is not defined.
- Add these imports to App.js:
  `import React from "react";`
  `import ReactDOM from "react-dom/client";`
- Also Add the type="module" attribute to the `<script>` tag in index.html.

```sh
- npm init or npm init --yes
- npm install parcel --save-dev or npm i -D parcel
- npx parcel index.html

- "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  },

- npm run start
- npm run build
- npm i react react-dom

- import React from "react";
- import ReactDOM from "react-dom/client";

```
