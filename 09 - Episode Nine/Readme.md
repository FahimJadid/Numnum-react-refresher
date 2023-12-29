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
