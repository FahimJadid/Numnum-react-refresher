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

- # Q: Routing in an application?

  - Ans: There are two types of routing in an application.

    1. Client side routing: Client side routing is used in single page applications. In client side routing, whenever we click on a link, the request is not sent to the server, and the page is not reloaded. The client is responsible for routing in client side routing.

    In the single page application just the components are changed without any network calls via client side routing.

    2. Server side routing: Server side routing is used in traditional web applications. In server side routing, whenever we click on a link, the request is sent to the server, and the server sends the response to the client, and the page is reloaded. So, the server is responsible for routing in server side routing.

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

- # Step 5: Creating Restaurant Menu:
  - We want to create a dynamic route to show the data of each restaurant.
- We need to create a RestaurantMenu component.
- Then created a dynamic path for the restaurant menu with resId.

  ```javascript
  {
      path: "/restaurants/:resId",
      element: <RestaurantMenu />,
    },
  ```

- # Step 6: Get the Dynamic Data from the API:
- When the RestaurantMenu component is rendered, we will make an API call using useState hook to get the data of the restaurant.

- We are doing the same thing that we did in the previous episodes in the Body component and RestaurantCard component.

  ```javascript
  import { useState, useEffect } from "react";
  import Shimmer from "./Shimmer.js";

  const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
      fetchMenu();
    }, []);

    const fetchMenu = async () => {
      const data = await fetch(
        "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/aminia-new-market-area/order&location=&isMobile=1"
        // "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/burger-king-new-market-area/info&location=&isMobile=1"
        // "https://link.zomato.com/xqzv/r6vj7tg3?deep_link_value=zomato%3A%2F%2Frestaurant%2F19867842%2Fmenu%3Futm_campaign%3D53a0c7393a376b8c08a06d21ad1bf2f3%26utm_source%3Dmweb%26utm_medium%3DMwebMenuModal"

        //   "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/info&location=&isMobile=1"
        //   "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/restaurants/info&location=&isMobile=1"
        //   "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/restaurants?place_name=College+Street&dishv2_id=30308&location=&isMobile=1"
      );

      const json = await data.json();
      console.log(json);
      setResInfo(json);
    };

    if (resInfo === null) return <Shimmer />;

    const { name, cuisine_string } =
      resInfo?.page_data?.sections?.SECTION_BASIC_INFO;

    const { menus } = resInfo?.page_data?.order?.menuList;

    const { menu } = resInfo?.page_data?.order?.menuList?.menus[0];

    return (
      <div className="menu">
        <h1>{name}</h1>
        <p>{cuisine_string}</p>
        <h2>{menu?.name}</h2>
        <ul>
          {Array.isArray(menus) &&
            menus.map((resMenu) => (
              <li>
                {resMenu?.menu.categories[0].category?.items[0]?.item?.name}
              </li>
            ))}
        </ul>
      </div>
    );
  };

  export default RestaurantMenu;
  ```

  - Here is the above code explanation:

    - We are using useState hook to store the data of the restaurant. Then we are using useEffect hook to make an API call to get the data of the restaurant. After that we are using conditional rendering to show the shimmer effect until the data is fetched. Then we are using destructuring to get the name and cuisine_string of the restaurant. Then we are using destructuring to get the menus of the restaurant. Then we are using destructuring to get the menu of the restaurant. Then we are using conditional rendering to show the menu of the restaurant. Then we are using Array.isArray to check if the menus is an array or not. Then we are using map function to iterate over the menus array and show the menu items of the restaurant. It is a nested array, so we are using multiple destructuring to get the menu items of the restaurant. Because of nesting it is a little bit complex to get out the data.

  - Here is one thing we have noticed that the API is not using dynamic ID, instead they are using restaurant name for the API call. So, we also use dynamically restaurant name for routes.
  - We are using useParams hook to get the dynamic ID from the URL.

  ```javascript
  <div className="res-container">
    {filteredRestaurants?.map((restaurant) => {
      const resId = restaurant?.info?.resId;
      const clickUrl = restaurant?.order?.actionInfo?.clickUrl;
      console.log(clickUrl);

      if (resId && clickUrl) {
        let parts = clickUrl.split("/");
        let restaurantName = parts[2] || "";
        return (
          <Link to={"/restaurants/" + restaurantName}>
            <RestaurantCard key={resId} resData={restaurant} />;
          </Link>
        );
      }
      return null;
    })}
  </div>
  ```

  - Here is the above code explanation:
    - So when user clicks on the restaurant card, the user will be redirected to the RestaurantMenu component. Here we are not using resId but instead we are using restaurant as a dynamic parameter. And we are getting the restaurant name from the clickUrl which is a URL but we don't need the whole URL, we just need the name of the restaurant. And we are using split function to get the restaurant name from the clickUrl. And we are using Link component to link to the RestaurantMenu component. And we are using restaurant name as a dynamic parameter in the URL. We also added a condition to check if the restaurant name is available or not. If the restaurant name is available then we will show the RestaurantCard component, otherwise we will not show the RestaurantCard component. And we are splitting on the basis of "/" and we are getting the second part of the URL which is the restaurant name. And we are using the restaurant name as a dynamic parameter in the URL.
