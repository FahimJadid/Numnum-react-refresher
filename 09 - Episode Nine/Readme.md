### React Episode Nine Notes

# React Food Ordering Application :

# Q&A:

- # Q: What is Single responsibility principle?

  - Ans: A component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.

- # Q: What is Custom Hooks?

  - Ans: Custom Hooks are JavaScript functions whose names are prefixed with the word use. Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.

- # Q: What is Modularity & what are the advantages?

  - Ans: Modularity is the degree to which a system's components may be separated and recombined. The advantages of modularity are:

    - Simplicity: The complexity of a system is reduced by separating it into smaller modules.
    - Flexibility: Modifications can be made to modules without affecting other parts of the program.
    - Maintainability: Ease of locating and fixing errors, bugs, and other issues.
    - Reusability: The ability to reuse components in other systems.

## Optimizations & Cleaning Up & Custom Hooks & Single responsibility principle and Modularity:

# Custom Hooks:

- We will create custom hooks to make our code more modular and reusable.
- We will use custom hooks in our RestaurantMenu component. Using custom hooks in RestaurantMenu because
  there are two major responsibilities in RestaurantMenu component.

  - 1. Fetching data from the server.
  - 2. Displaying data in the UI.

- But RestaurantMenu component should only be responsible for displaying data in the UI. It should not be responsible for fetching data from the server. So we will create a custom hook to fetch data from the server.

- Currently our RestaurantMenu component code looks like this:

```js
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { restaurantName } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const encodedName = encodeURIComponent(
      restaurantName.replace(/\s+/g, "-").toLowerCase()
    );
    const data = await fetch(
      `https://www.zomato.com/webroutes/getPage?page_url=/kolkata/${encodedName}/order&location=`
    );

    const json = await data.json();
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
            <li
              key={resMenu?.menu?.categories[0]?.category?.items[0]?.item?.id}
            >
              {resMenu?.menu?.categories[0]?.category?.items[0]?.item?.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
```

- So we will create a custom hook like `useRestaurantMenu()` which handles the responsibility of fetching data from the server which was previously handled by RestaurantMenu component under useEffect hook and fetchMenu function.
- So it kind of seems like that we are taking out the fetchMenu logic from RestaurantMenu component and putting it inside a custom hook. So now it solves the problem of single responsibility principle and the RestaurantMenu component is only responsible for displaying data in the UI. As it does not care about how the data is fetched from the server.

- Now let's implement the custom hook `useRestaurantMenu()`.

- These custom hooks are noting but normal helper/utility functions which we can use in our components. So we will create a file in our existing Utils folder and name it as `useRestaurantMenu.js`. And a good convention is to always keep a separate file for each custom hook. And always prefix the name of the custom hook with the word `use` and keep the name same as the file name.

- Now let's see what we have to do inside this custom hook. Our useRestaurantMenu custom hook will be a function which will return an object. And this object will take `restaurantName` as an argument and it's job is to return restaurant information and menu information.
  So it will return `resInfo` object which we were using in our RestaurantMenu component.

- We will fetch data exactly the same way as we were doing in our RestaurantMenu component. So we will copy the fetchMenu function from RestaurantMenu component and paste it inside our custom hook. And we will also copy the `useEffect` hook from RestaurantMenu component and paste it inside our custom hook.

```js
import { useEffect, useState } from "react";

const useRestaurantMenu = (restaurantName) => {
  const [resInfo, setResInfo] = useState(null);

  // fetch data
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const encodedName = encodeURIComponent(
      restaurantName.replace(/\s+/g, "-").toLowerCase()
    );
    const data = await fetch(
      `https://www.zomato.com/webroutes/getPage?page_url=/kolkata/${encodedName}/order&location=`
    );

    const json = await data.json();
    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
```

- Let's summarize what we have done so far. We have created a custom hook called `useRestaurantMenu` which takes `restaurantName` as an argument and returns `resInfo` object which contains restaurant information and menu information. And we have also copied the `useEffect` hook and `fetchMenu` function from RestaurantMenu component and pasted it inside our custom hook.

- Now let's use this custom hook in our RestaurantMenu component. So we will import this custom hook in our RestaurantMenu component and call it inside the component. And we will pass the `restaurantName` as an argument to this custom hook. And remove the `useEffect` hook and `fetchMenu` function from RestaurantMenu component.

```js
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restaurantName } = useParams();

  const resInfo = useRestaurantMenu(restaurantName);

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
            <li
              key={resMenu?.menu?.categories[0]?.category?.items[0]?.item?.id}
            >
              {resMenu?.menu?.categories[0]?.category?.items[0]?.item?.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
```

- Awesome! Our code works exactly the same way as it was working before. But now our code is more modular and reusable. And we have also followed the single responsibility principle. And we have also followed the modularity principle. So now our RestaurantMenu component is only responsible for displaying data in the UI. And it does not care about how the data is fetched from the server. And we have also created a custom hook which is responsible for fetching data from the server. So now our code is more modular and reusable.

- Now let's create another feature using custom hooks called online/offline feature. Almost like weather the user's internet is online or offline. So the feature is like this: Suppose the user is online and he is browsing the website. And suddenly the user's internet connection goes offline. So we will show a message to the user that he is offline. And when the user's internet connection comes back online, we will show a message to the user that he is online.

- Let's create another custom hook file called `useOnlineStatus.js` inside our Utils folder. To create a custom hook we need to find out what should be the input & output of the custom hook. So the input of the custom hook will be nothing. And the output of the custom hook will be a boolean value which will tell us whether the user is online or offline. So we will create a function called `useOnlineStatus` which will return a boolean value. So we will use `Window: online event` object and we will use the online event listener to listen to the `online` event.

- So these event listeners will keep track off our online and offline status. We will use this event listener for once and that is why we will use useEffect hook with empty dependency array. So we want to put my event listeners for once in my web page.

```js
import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  // Check if Online
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  });

  // Boolean
  return onlineStatus;
};

export default useOnlineStatus;
```

- We are using `window.addEventListener` to listen to the `online` and `offline` events. And we are setting the `onlineStatus` to `false` when the user is offline. And we are setting the `onlineStatus` to `true` when the user is online. And we are returning the `onlineStatus` boolean value from our custom hook.

- Now let's use this custom hook in our App component. So we will import this custom hook in our App component and call it inside the component. And we will store the return value of this custom hook in a variable called `onlineStatus`.

```js
const onlineStatus = useOnlineStatus();
if (onlineStatus === false)
  return (
    <h1>Looks like you're offline! Please check your internet connection...</h1>
  );
```

- So if the `onlineStatus` is false then we will show a message to the user that he is offline. And if the `onlineStatus` is true then we will show the normal UI to the user.
