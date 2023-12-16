### React Episode One Notes

# Basic "Hello World" App using HTML...

- Create index.html file
- Add basic html structure
- Add div with id of root

```sh
  <body>
        <div id="root">
            <h1>Hello World!</h1>
        </div>
  </body>
```

# Now Basic "Hello World" App using JavaScript...

- Add script tag to bottom of body
- Inside script tag add the following code:

  - Create a variable called heading and set it equal to document.createElement('h1');
  - Add text to the heading variable using
    heading.innerHTML = 'Hello World!';
  - Get the root div using document.getElementById('root'); This root is the reference to the div with the id of root.
  - Append the heading to the root div using root.appendChild(heading); Append child is a JS method/function that takes a single argument and appends it to the end of the element.
  - Now what will happen is the heading will be inserted as a child of the root div.

```sh

  <body>
    <div id="root"></div>

    <script>
      const heading = document.createElement("h1");
      heading.innerHTML = "Hello World from JS!";

      const root = document.getElementById("root");
      root.appendChild(heading);
    </script>
  </body>

```

# Q&A:

- # Q: How to the browser understands what is document, createElement, innerHTML, getElementById, appendChild?
- Ans: The browser has a built in JavaScript engine that understands these commands and executes them.
- # Q: What is the JavaScript engine?
- Ans: A JavaScript engine is a program that executes JavaScript code. All browsers have a built in JavaScript engine. For example, Chrome has V8, Firefox has SpiderMonkey, Safari has JavaScriptCore, and Edge has Chakra.
- # Q: What is the difference between innerHTML & innerTEXT?
- Ans: innerHTML returns the HTML content of an element. innerText returns the text content of an element.
- # Q: Does browser understands React?
- Ans: No, React is a library that we have to include in our project for building user interfaces. And at the end of the day, React is just JavaScript and react code is converted to JavaScript code using a tool called Babel.
- # Q: What is Babel?
- Ans: Babel is a tool that converts modern JavaScript code to a version of JavaScript that is compatible with all browsers. This process is called transpiling.
- # Q: What is CDN (Content Delivery Network)?
- Ans: A CDN is a network of servers that deliver content to users based on their geographic location. For example, if you are in India, you will get the content from a server that is closest to you. This makes the content delivery faster.
- # Q: Why we use CDN?
- Ans: We use CDN to add libraries to our project. For example, we can use a CDN to add React and ReactDOM libraries to our project.
- # Q: What is CORS (Cross-Origin Resource Sharing)?
- Ans: CORS (Cross-Origin Resource Sharing) is a mechanism that allows resources to be requested from a different origin (domain) than the origin they are served from. For example, if you are on https://example.com, you can request resources from https://example.com/api or https://example.com/assets. But you cannot request resources from https://example.org or https://example.net. This is a security feature built into the browser.
  The crossorigin attribute is a CORS (Cross-Origin Resource Sharing) setting that tells the browser to allow loading of resources from a CDN even if the origin of the HTML file is different from the origin of the CDN. This is required because the CDN and the HTML file are hosted on different servers.
- # Q: What is ReactDOM?
- Ans: ReactDOM is a library that we use to render React components in the browser. Just like we use the browser's built in JavaScript engine to execute JavaScript code, we use ReactDOM to render React components in the browser.
- # Q: What is the difference between React and ReactDOM?
- Ans: React is a library that we use to build user interfaces. ReactDOM is a library that we use to render React components in the browser.
- # Q: What is Render?
- Ans: Render means to display something on the screen. For example, we can render a React component in the browser using ReactDOM.render() method.
- # Q: What is the difference between React.createElement() and ReactDOM.render()?
- Ans: React.createElement() method is used to create an element. ReactDOM.render() method is used to render an element in the browser.
- # Q: What is the most costly operation in the browser?
- Ans: DOM manipulation is the most costly operation in the browser. So we should avoid DOM manipulation as much as possible. For example, instead of creating an element and appending it to the DOM, we can create a string of HTML and set it as the innerHTML of an element. This is much faster than creating an element and appending it to the DOM. But we should not do this because it is not a good practice to mix HTML and JavaScript. Instead, we should use a templating engine like JSX or Pug.
- # Q: What is Key prop & Warning: Each child in a list should have a unique “key” prop.?
- Ans: The key prop is used by React to identify each element in the array. This is required when we render an array of elements. If we don't add the key prop, React will throw a warning: Each child in a list should have a unique "key" prop.
- # Q: Where to get your key ?
- Ans: We can use the index of the element as the key. But this is not recommended because it can cause performance issues and it can cause bugs in the application. So we should use a unique identifier as the key. For example, if we are rendering a list of users, we can use the user id as the key.

  - Data from a database: If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.
  - Locally generated data: If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.

- # Q: What are the Rules of keys?
- Ans: Keys Must Only Be Unique Among Siblings. Keys used within arrays should be unique among their siblings. However, they don't need to be globally unique. We can use the same keys when we produce two different arrays. Keys must not change or that defeats their purpose! Don’t generate them while rendering.
- # Q: Why does React need keys?
- Ans: Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.

  Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.

  File names in a folder and JSX keys in an array serve a similar purpose. They let us uniquely identify an item between its siblings. A well-chosen key provides more information than the position within the array. Even if the position changes due to reordering, the key lets React identify the item throughout its lifetime.

- # Q: Why index and random key generator is bad practice?
- Ans: You might be tempted to use an item’s index in the array as its key. In fact, that’s what React will use if you don’t specify a key at all. But the order in which you render items will change over time if an item is inserted, deleted, or if the array gets reordered. Index as a key often leads to subtle and confusing bugs.

Similarly, do not generate keys on the fly, e.g. with key={Math.random()}. This will cause keys to never match up between renders, leading to all your components and DOM being recreated every time. Not only is this slow, but it will also lose any user input inside the list items. Instead, use a stable ID based on the data.

Note that your components won’t receive key as a prop. It’s only used as a hint by React itself. If your component needs an ID, you have to pass it as a separate prop: <Profile key={id} userId={id} />.

## Now for the Main Event:

# Now Basic "Hello World" App using React...

- First Add the React and ReactDOM libraries to the project.
- multiple ways to add React and ReactDOM libraries to the project:

  - Download the libraries and add them to the project.
  - Use a CDN (Content Delivery Network) to add the libraries to the project.
  - Use a package manager like npm or yarn to add the libraries to the project.

- let's use CDN to add the libraries to the project:

  - Go to https://reactjs.org/
  - Click on "Copy and Paste" the CDN links to your project.

    ```sh
        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    ```

    - Now we have React and ReactDOM libraries added to our project.

- Now we need to add a script tag to the bottom of the body and inside the script tag add the following code:

  - let's create an "h1" element inside the "root" div using React.createElement() method.
  - Instead of document.createElement() we use React.createElement() method because we are using React to create the element.
  - React.createElement() method takes three arguments:

    - The first argument is the type of the element we want to create. In this case, we want to create an "h1" element.
    - The second argument is the properties of the element. In this case, we don't want to add any properties to the element so we pass null or we can pass empty object.
    - The third argument is the content of the element. In this case, we want to add the text "Hello World from React!" to the element.
    - React.createElement() method returns an object that represents the "h1" element.
    - Now we need to put this element inside the "root" div. To do that, we use ReactDOM.render() method.
    - So we need to create root variable and set it equal to document.getElementById('root'); This root is the reference to the div with the id of root.
    - Creating an element is the job of React. Putting the element inside the root div is the job of ReactDOM. So we use ReactDOM.render() method to put the element inside the root div.
    - ReactDOM.createRoot() method is used to create a root for the React tree. This method returns an object that represents the root of the React tree. We can use this object to render React components in the browser. This method is an experimental method and it is not recommended to use it in production.
    - root is created because inside the root all the React components will be rendered.
    - ReactDOM.render() method takes two arguments:

      - The first argument is the element we want to render. In this case, we want to render the "h1" element.
      - The second argument is the reference to the root div. In this case, we want to render the "h1" element inside the root div.
      - In this case, React.createRoot generates a new root container for rendering components, whereas ReactDOM.render renders components directly to a given DOM element1.
      - In conclusion, the primary distinction between createRoot and ReactDOM.render is that createRoot generates a new root container for rendering components, whereas ReactDOM.render renders components directly to a given DOM element.

    ```sh

        const heading = React.createElement("h1", null, "Hello World from React!");

        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(heading);


    ```

- Now we have a basic React app that renders an "h1" element inside the "root" div. But the problem is that we are writing React code inside the HTML file. We want to write React code in a separate file. So let's create a new file called App.js and move the React code to this file.

  - Now we need to add the App.js file to the project. To do that, we need to add a script tag to the bottom of the body and inside the script tag add the following code:

    ```sh

        <script src="App.js"></script>

    ```

  - Now we need to remove the JavaScript code from the HTML file and add it to the App.js file.

    ```sh

        const heading = React.createElement("h1", null, "Hello World from React!");

        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(heading);

    ```

- Add some CSS to the project to make the heading look better. To do that, we need to add a CSS file to the project. Let's create a new file called index.css and add the following code and connect the CSS file:

  ```sh

  body {
  font-family: sans-serif;
  background-color: #282c34;
  color: white;
  text-align: center;
  }

  #heading {
  font-size: 3rem;
  margin-top: 40px;
  color: red;
  }
  ```

- At the end of the day that React heading element is a normal javaScript object.
- React.createElement() method returns an object and it converts the object to a HTML element during the render process.
- We can use the following code to see the React element in the console:

  ```sh

  console.log(heading);

  ```

# Now Let's create nested React Elements...

```sh
// Nested React parent and child Elements
    <div id="parent">
        <div id="child">
            <h1>Something like this</h1>
        </div>
    </div>


// Nested React child siblings Elements inside parent
    <div id="parent">
        <div id="child">
            <h1>Something like this</h1>
            <p>Something like this</p>
            <h2>Something like this</h2>
        </div>
    </div>
```

- Let's create a parent div and a child div inside the parent div. And inside the child div, let's create an "h1" element.

- Also create sibling elements inside the child div. To put the siblings, let's create an array of elements and pass it as the third argument to the React.createElement() method.

- But this syntax throws a Warning: Each child in a list should have a unique "key" prop. So we need to add a key prop to each element in the array. The key prop is used by React to identify each element in the array.

- After adding the key prop, the warning is gone.

- This is a mess and it is hard to read. So that's where something important comes in that makes developers life easier and makes the code more readable and that is called JSX.

```sh
    <li key={person.id}>...</li>
```

```sh
// Nested React parent and child Elements
    const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement(
      "h1",
      { id: "heading" },
      "Hello World from Child heading"
    )
  )
);

// Nested React child siblings Elements inside parent
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading", key:"1" },
      "Hello World from Child heading"
    ),
    React.createElement(
      "h2",
      { id: "heading",key:"2" },
      "I am 2nd heading & sibling of the child heading"
    ),
    React.createElement(
      "p",
      { id: "paragraph", key:"3" },
      "I am a paragraph & sibling of the child heading"
    ),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


```
