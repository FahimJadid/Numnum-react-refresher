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

- # Q: why we don't use anchor tags in react?

  - Ans: We don't use anchor tags in react because anchor tags are used to navigate to different pages, and react is a single page application, if we use anchor tags, the page will be reloaded, and the state of the application will be lost. So, we don't use anchor tags in react.

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

- # Step 3: Adding an Error element to appRouter:

  - We need to add an error element to the appRouter, so that if the user enters a path that is not defined in the appRouter, then we can show an error message to the user.

  ```javascript
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  ```

- React router dom gives us an access to a hook called UseRouteError. Using this hook can get detailed errors that occurred.

  ```javascript
  import { useRouteError } from "react-router-dom";

  const Error = () => {
    const { error } = useRouteError();
  };
  ```

## Special Bug Fix:

- While working found a bug for the top Rated Restaurants.
  The issue lies in how we were handling the filtering mechanism. In the code, we have two states: listOfRestaurants and filteredRestaurants. When we click the "Top Rated Restaurants" button, we were updating listOfRestaurants and not filteredRestaurants. As a result, the subsequent searches were being performed on the modified listOfRestaurants, which may not contain the original data.

To fix this issue, we should update the filteredRestaurants state when applying filters or searches. Instead of updating the listOfRestaurants state, we should update the filteredRestaurants state. Here's an updated version of the code:

```javascript
setListOfRestaurants(filteredResList); // Wrong

setFilteredRestaurants(filteredResList); // Correct
```

- The above code was causing the bug.

- # Step 4: Let's make our app consistent throughout all routes:

- We need to add a Header component to the appRouter, so that the Header component is visible in all the routes.

- In this method we need to add a children property to the appRouter, and inside the children property we need to add a path and element property.

  ```javascript
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
      errorElement: <Error />,
    },
  ]);
  ```

- We are putting the about and contact routes as children of the root route which is App component.
  So now /about and /contact are children of the root route which is App component.

- Now we want to configure the App component to display according to conditions. If the path is /about, then display the About component, if the path is /contact, then display the Contact component, and if the path is /, then display the Body component.

- Now we need to use Outlet component from react-router-dom. Outlet component is used to display the components according to the conditions. Whenever there is a change in the path, the Outlet will be filled with children according to the path.

  ```javascript
  import { Outlet } from "react-router-dom";

  const App = () => {
    return (
      <div className="app">
        <Header />
        <Outlet />
      </div>
    );
  };
  ```

- # Step 5: Linking pages:

  - We need to import Link component from react-router-dom.
  - We need to use Link component instead of anchor tags. It works like anchor tags but doesn't reload the page.
  - We need to use `to` property to specify the path to which we want to navigate.

  ```javascript
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
  ```
