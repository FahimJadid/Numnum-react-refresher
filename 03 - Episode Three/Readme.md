### React Episode Three Notes

# Let's Build: Production Ready React Application

# Q&A:

- # Q: What is the difference between `npm run` and `npx run`?

  - Ans: `npm run` is used to run a script defined in the `package.json` file. `npx run` is used to run a script defined in the `package.json` file of a package that is not installed locally.

- # Q: What is React Element?

  - Ans: React Element is a plain object that represents a DOM element. It is not an actual DOM element. It is a lightweight description of what to render. It is cheap to create and React can create and throw away React Elements without much overhead. React Elements are immutable. Once you create an element, you can't change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time. React DOM takes care of updating the DOM to match the React Elements. React Elements are what components are "made of". Elements are the smallest building blocks of React apps.

- # Q: What is JSX?

  - Ans: JSX is a syntax extension to JavaScript. It is not a requirement to use JSX. But JSX makes it easier to write React applications. JSX converts HTML tags into react elements. JSX is an expression too. After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects. This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions. You can also use JSX inside of `if` statements and `for` loops, assign it to variables, accept it as arguments, and return it from functions. JSX is closer to JavaScript than to HTML since React DOM creates and updates the DOM tree based on JSX. JSX is a syntactic sugar for `React.createElement()` method. JSX is faster because it performs optimization while compiling code to JavaScript. It is also type-safe and most of the errors can be caught during compilation.
    `JSX Syntax: `
    `const element = <h1>Hello, world!</h1>;`

- # Q: Why use JSX?

  - Ans: React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display. Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called "components" that contain both. React doesn't require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

- # Q: Does browser understand JSX?

  - Ans: No. Browser only understands JavaScript. We are using parcel to convert JSX into JavaScript. Parcel is a bundler. It takes all of our code and bundles it into a single file. It also converts JSX into JavaScript. `Transpiling is the process of converting one programming language to another.` So parcel is transpiling our JSX into JavaScript. Then JS engine of the browser understands the JavaScript code and renders it on the screen.

- # Q: So Does parcel transpiling itself?

  - Ans: No. Parcel uses Babel to transpile JSX into JavaScript.

- # Q: What is Babel?

  - Ans: Babel is a JavaScript compiler. Babel converts JSX into JavaScript. Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

  here's a comparison table showing a JSX code snippet and its transpiled version using Babel:

  | JSX Code (Before Transpilation)         | JavaScript Code (After Transpilation) |
  | --------------------------------------- | ------------------------------------- |
  | ```jsx                                  | ```javascript                         |
  | const element = <h1>Hello, world!</h1>; | const element = React.createElement(  |
  |                                         | 'h1',                                 |
  |                                         | null,                                 |
  |                                         | 'Hello, world!'                       |
  |                                         | );                                    |

This table shows that JSX code is more readable and easier to write, while the transpiled JavaScript code is what actually runs in the browser. The Babel transpiler converts JSX into `React.createElement()` calls. Please note that this is a simplified example and actual transpiled code may vary based on the configuration and plugins used with Babel.

- # Q: What is Component?

  - Ans: A Component is one of the core building blocks of React. In other words, we can say that every application you will develop in React will be made up of pieces called components. Components make the task of building UIs much easier. You can see a UI broken down into multiple individual pieces called components and work on them independently and merge them all in a parent component which will be your final UI. Components in React basically return a piece of JSX code that tells what should be rendered on the screen. In simple terms, React components are like LEGO bricks. They are the individual building blocks that come together to create a full-fledged user interface. A component can be a button, a form, a header, or any other part of the webpage that you can think of.

  Think of components as reusable templates that you can place throughout your web application to construct a complete user experience.

- # Q: Why are Components important in React?
- Ans:

  - Modularity and Reusability
  - Ease of maintenance
  - Ease of collaboration
  - Composable with other components
  - Encapsulation
  - Ease of deployment
  - Ease of testing, debugging
  - Ease of development

- # Q: Types of Components in React JS :

  - Ans: There are two types of components in React JS:

    1. Functional Components
    2. Class Components

    Here's a table comparing the syntax of Functional components and Class components in React:

    | Component Type | Syntax                                                                              |
    | -------------- | ----------------------------------------------------------------------------------- |
    | Functional     | `const Component = (props) => {return <div>{props.children}</div>;`                 |
    | Class          | `class Component extends React.Component {return <div>{this.props.children}</div>;` |

This table provides a comparison of the basic syntax. Remember that functional components can use Hooks to add state and lifecycle methods, which were previously only available in class components. Both types of components are commonly used in React applications. The choice between them depends on your specific needs and preferences.

- # Q: What are Functional Components?

  - Ans: Functional components are basic JavaScript functions. These are typically arrow functions but can also be created with the regular function keyword. These functions take in an optional input which we call props (short for properties) and return a React element that describes how a section of the UI (User Interface) should appear.

- # Q: What are Class Components?

  - Ans: Class components are ES6 classes. They extend from React.Component and can have state and lifecycle methods. We can use lifecycle methods to control what happens when each instance of a component is created, updated, or destroyed. We can also use lifecycle methods to perform actions like fetching data when a component is created or send an alert when a component is destroyed. We can also use lifecycle methods to perform actions like fetching data when a component is created or send an alert when a component is destroyed. We can also use lifecycle methods to perform actions like fetching data when a component is created or send an alert when a component is destroyed.

# Let's start building our React application:

```sh

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hello World");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

```

# Let's rewind what happening behind the scene:

- We are creating a React Element using `React.createElement()` method. React Element is an object and after render it becomes a HTML Element. This method takes three arguments. The first argument is the type of the element. The second argument is the props: attributes/ids/classes etc of the element. The third argument is the children of the element. The `React.createElement()` method returns a React Element.So heading is a React Element that we have created. If you console heading you'll find out heading is an object behind the scenes. And when we do `root.render` this powerful library ReactDOM takes this object and converts it into a HTML element and renders it on the screen.

- But this type of code is clumsy and hard to read. So we use JSX to write React code.

- Let's create a JSX heading:

```sh

const heading = <h1 id="heading">Hello World from JSX</h1>;

```

- So this JSX code is equivalent to the previous code. But this code is much easier to read and understand.

```sh
// Readable code with JSX which is also a react element
const heading = <h1 id="heading">Hello World from JSX</h1>;

// Clumsy code with Core react and without JSX
const heading = React.createElement("h1", { id: "heading" }, "Hello World");
```

- So we can say that JSX is a syntactic sugar for `React.createElement()` method.

- From now on we'll use JSX to write React code:

- The Rules of JSX :

  1. Return a single root element:

  - We can't return multiple elements. We can only return a single root element. So we have to wrap all the elements inside a single root element. We can use `<React.Fragment>` to wrap all the elements inside a single root element. `<React.Fragment>` is a built-in component of React. We can also use empty tags `<>` to wrap all the elements inside a single root element. But we can't use empty tags `<>` to pass props to the root element. We can only use `<React.Fragment>` to pass props to the root element.

  2. Close all the tags:

  - We have to close all the tags. We can't use self closing tags. We have to close all the tags even if they don't have any children.

  3. Use camelCase for html attributes:

  | HTML Attribute         | React Attribute        |
  | ---------------------- | ---------------------- |
  | `class`                | `className`            |
  | `for`                  | `htmlFor`              |
  | `tabindex`             | `tabIndex`             |
  | `onclick`              | `onClick`              |
  | `onchange`             | `onChange`             |
  | `onsubmit`             | `onSubmit`             |
  | `oninput`              | `onInput`              |
  | `onfocus`              | `onFocus`              |
  | `onblur`               | `onBlur`               |
  | `onkeydown`            | `onKeyDown`            |
  | `onkeyup`              | `onKeyUp`              |
  | `onkeypress`           | `onKeyPress`           |
  | `ondblclick`           | `onDoubleClick`        |
  | `oncontextmenu`        | `onContextMenu`        |
  | `onwheel`              | `onWheel`              |
  | `oncopy`               | `onCopy`               |
  | `oncut`                | `onCut`                |
  | `onpaste`              | `onPaste`              |
  | `oncompositionstart`   | `onCompositionStart`   |
  | `oncompositionupdate`  | `onCompositionUpdate`  |
  | `oncompositionend`     | `onCompositionEnd`     |
  | `onanimationstart`     | `onAnimationStart`     |
  | `onanimationiteration` | `onAnimationIteration` |
  | `onanimationend`       | `onAnimationEnd`       |
  | `ontransitionstart`    | `onTransitionStart`    |
  | `ontransitionend`      | `onTransitionEnd`      |
  | `ontransitioncancel`   | `onTransitionCancel`   |
  | `oninvalid`            | `onInvalid`            |

This table shows the equivalent React attributes for HTML attributes. In React, we use camelCase for HTML attributes and event handlers. This is because React is JavaScript, and in JavaScript, DOM properties and methods are camelCase.

- Let's create a React functional component:

```sh

const HeadingComponent = () => {
  return (
    <div>
      <h1>Hello I am functional Component</h1>
    </div>
  );
};

```

```sh

import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 id="heading">Hello World from Component</h1>;

const HeadingComponent = () => {
  return (
    <div>
      {heading}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);


```
