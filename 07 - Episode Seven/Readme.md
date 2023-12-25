### React Episode Seven Notes

# React Food Ordering Application :

# Q&A:

- # Q: How is useEffect is called?

  - Ans: useEffect is called using the following arguments (callback function, dependency array):

    ```javascript
    useEffect(() => {
      // Code to be executed
      console.log("useEffect is called");
    }, [dependencies]);
    ```

    - The dependencies are the variables that are used inside the useEffect function. If any of the dependencies change, the useEffect function is called again.

- # Q: When is useEffect is called?

  - Ans: useEffect is called after every render of that components, every time the component is rendered, the useEffect is called. But if we want to call the useEffect only once, we can pass an empty array which is also called dependency array as the second argument to the useEffect function. This dependency array changes the behavior of it's render. In useEffect, dependencies are not mandatory, only callback function is mandatory.

  But if we don't pass the dependency array, the useEffect will be called after every render of the component.

  But if we use the dependency array, and the array is empty, the useEffect will be called only once, after the first/initial render of the component.

  And if we pass the dependency array with some dependencies, the useEffect will be called after initial render of the component for one time, and then useEffect will only be called when the dependencies changes. If the dependencies don't change, the useEffect will not be called.

- # Q: Best Practices:

- 1. Never use useState or create state variables outside of a component:

  - We should never use useState or create state variables outside of a component, because if we do so, the state variables will be shared among all the components, and if we change the state variable in one component, the state variable will be changed in all the components, and all the components will be re-rendered. So, we should never use useState or create state variables outside of a component.

- 2. Put your state variables at the top of the component:
- 3. Never create state variables inside of a loop or conditional statement:

## Introduction to React Routing:

- # Step 1: Install React Router Dom:

  - npm install react-router-dom

- # Step 2: Adding a Router:

  - In the App.js file, we need to apply routing configuration. We need to import createBrowserRouter from react-router-dom, and we will pass this createBrowserRouter configuration to the appRouter.

    ```javascript
    import { createBrowserRouter } from "react-router-dom";

    const appRouter = createBrowserRouter();
    ```

  - This createBrowserRouter takes a list of paths, and path is nothing but an object. So if my path is `/about` then load the element About component. So, we need to pass a list of paths to the createBrowserRouter function.

  ```javascript
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  ```

  - We Don't have a About component yet, so we need to create a About component. and import it in the App.js file.

  - But just creating the configuration is not enough, we need to use RouterProvider to render these configurations. So, we need to import RouterProvider from react-router-dom.

  ```javascript
  root.render(<RouterProvider router={appRouter} />);
  ```

  ```js
  <!-- App.js -->
  import React from "react";
  import ReactDOM from "react-dom/client";
  import { createBrowserRouter, RouterProvider } from "react-router-dom";
  import Header from "../src/components/Header";
  import Body from "../src/components/Body";
  import About from "./components/About";

  const App = () => {
    return (
      <div className="app">
        <Header />
        <Body />
      </div>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(<RouterProvider router={appRouter} />);
  ```
