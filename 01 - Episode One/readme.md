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
