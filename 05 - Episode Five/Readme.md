### React Episode Fiver Notes

# React Food Ordering Application :

# Q&A:

- # Q: What is SPA(Single page application)?

  - Ans: A single-page application is an app that works inside a browser and does not require page reloading during use. You are using a single-page application every time you open your email, or check your Facebook, Twitter, or LinkedIn accounts. All these apps can be opened in a browser and do not require page reloading while you are using them.

- # Q: Can you use named & default export together?

  - Ans: Yes, you can use named & default export together. But you can only have one default export in a file.

- # Q: What are Hooks?

  - Ans: React Hooks are a way to use state and other React features in functional components. They let you write code that is more reusable, testable, and easier to maintain. Here is a simple explanation of React Hooks with an example:

  Imagine you have a component that displays a counter. You want the counter to change when the user clicks a button. To do this, you need to use state, which is a way to store data in your component. However, using state in a class component requires writing a lot of boilerplate code, such as initializing the state, updating it with setState, and handling side effects.

  With React Hooks, you can use the useState Hook to declare a state variable and a function to update it.

- # Q: What are State?

  - Ans: State is a JavaScript object that stores a component's dynamic data and determines the component's behavior. Because state is dynamic, it enables a component to keep track of changing information in between renders and for it to be dynamic and interactive.

- # Q: What is the difference between props and state?

  - Ans: The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component. A component must never update its own props but it can update its state.

- # Q: What is the difference between state and setState?

  - Ans: The setState function is used to update the state. It accepts an object with properties that correspond to the state properties we want to update. The setState function is asynchronous. This means that calling setState will not immediately mutate this.state but create a pending state transition. Accessing this.state after calling this method can potentially return the existing value.

- # Q: why use Hooks and what are the benefits?

  - Ans: React Hooks are a way to use state and other React features in functional components. They let you write code that is more reusable, testable, and easier to maintain. Here are some of the benefits of using React Hooks:

  `Simplified code:` You can use hooks to manage state, effects, context, and other React functionalities without writing classes or using this keyword. This makes your code simpler and more concise.
  `Improved reusability:` You can create custom hooks to encapsulate stateful logic and share it with other components. This reduces code duplication and makes your components more modular and consistent.
  `Easier testing and debugging:` You can use hooks to mock or stub data, simulate user interactions, and isolate dependencies. This makes it easier to test your components in isolation and debug them when something goes wrong.
  `Reduced bundle size:` Hooks eliminate the need for class instances, constructors, bind methods, and other overheads that come with class components. This reduces the size of your bundle and improves performance.

# Building The Application with Hooks:

- # Step 1: Refactor & Clean Up The Project:

  - Before we start building the application, we need to clean up the project and refactor it to make it easier to work with.
  - Currently, we have a lot of components in a single file. `App.js` is clustered with a lot of components. So, we need to refactor it. We need to split them up into separate files for separate components because separation of concerns is important.
  - Let's restructure the project. We will create a new folder called `src` because it's good practice to put all of our source code in that folder.
  - Then we will move App.js into the src folder.
  - After moving the App.js file, we need to update the import statement in the `index.js` file. Otherwise application will crash.
  - Also update the path for `logo` image in the App.js file.
  - Now add a new folder called `components` inside the src folder. This folder will contain all of our components Starting with the `Header` component. App.js is our root level component. It will contain all of our other components. So it won't be inside the components folder.
  - Now create a new file called `Header.js` inside the components folder. Then cut the Header component from the App.js file and paste it into the Header.js file and export it.
  - Change the import statements in the Header & App.js files.
  - `Note: Always use the same name for the component and the file name. It will make it easier to import the component.`
  - Let's Do the same steps for the Body & RestaurantCard components.

```js

export default Header;
export default Body;

import Header from "../src/components/Header";
import Body from "../src/components/Body";

```

- Now we can see that RestaurantCard component is connected to the Body component. We are passing the resList data as props to the RestaurantCard component. So, we need to pass the resList data to the Body component first. Then we can pass it to the RestaurantCard component. That's why we need to move the resList data to the Body component. And also need to import the RestaurantCard component in the Body component.

- Now if we restart the application, we can see that the application is working fine.

- There is one important thing to mention here. We are using hard coded data in a component. But it is not a good practice, in industry best practices we put hard coded or mock data inside a separate file. Standard practice is to put these files inside a folder called `Utils / config or Common`. So, let's create a new folder called `Utils` inside the src folder. Then create a new file called `mockData.js` inside the Utils folder. Then cut the resList data from the Body component and paste it into the mockData.js file. Then export it. We keep it in lowercase because it is not a component. Then import it in the Body component.

- In one file you can only have one default export. But you can have multiple named exports. So, if you want to export multiple things from a file, you need to use named exports. But if you want to export only one thing from a file, you need to use default export.

```js
export default resList;

import resList from "../Utils/mockData";
```

- # Step 2: Making The Application Interactive:

  - Right now the app is static & read only. We can't interact with it. So, we need to make it interactive. We need to add some state to the application. So, we can change the state of the application based on user interaction.

  - Let's add a button to filter top rated restaurants. Restaurants with a rating of 4.2 or higher are considered top rated. So, we need to add a button to filter the top rated restaurants.

  - Let's slightly change the search div into a filter div. We will add a button inside the filter div.

  ```js
  <div className="filter">
    <button className="filter-btn">Top Rated Restaurants</button>
  </div>
  ```

  - Then we'll add functionality to it. We will add a click handler to the button. So When the user clicks on the button, we will filter the restaurants based on their rating. In this `filter-btn` we will pass an attribute called `onClick`. And this takes a callback function. So upon click this callback function will be called. Inside the function we will write the logic to filter the restaurants.

  ```js
  <button
    onClick={() => {
      console.log("Clicked");
    }}
    className="filter-btn"
  >
    Top Rated Restaurants
  </button>
  ```

  - Now Let's think how we can apply this logic.

- code:

  ```js
  <div className="filter">
    <button
      onClick={() => {
        const filteredResList = resList.filter((res) => {
          return Number(res.info.rating.aggregate_rating) >= 4.2;
        });
        console.log(filteredResList);
      }}
      className="filter-btn"
    >
      Top Rated Restaurants
    </button>
  </div>
  ```

  - From the code you can see that we have a resList array from the mockData. And we are filtering the resList array based on the rating. we are only returning the restaurants that have a rating of 4.2 or higher.
  - Here is a catch, the data type of the rating is a string. So, we need to convert it into a number to compare with the 4.2 Otherwise it will not work. So, we need to use the `Number()` method to convert the string into a number.
  - And then we are storing the filtered array in the filteredResList variable. And we are logging the filteredResList variable to the console. So, if we click on the button, we can see that we are getting the list of filtered restaurant array in the console. But we are not seeing the filtered array in the UI. Because we are not updating the state of the application. We are only updating the resList variable. So, we need to update the state of the application. We need to use the `useState` hook to update the state of the application.

```js
const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const filteredResList = resList.filter((res) => {
              return Number(res.info.rating.aggregate_rating) >= 4.2;
            });
            console.log(filteredResList);
          }}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
```

- Now it's time for UI update because we want the UI to change automatically when the user clicks on the button. Normal variables can not keep track of the changes. So, we need to use the `useState` hook to keep track of the changes. We need to import the `useState` hook from the react library.

- useState is a function that takes an initial value as an argument and returns an array with two elements. The first element is the state variable and the second element is the function that we use to update the state variable. We can name these elements anything we want. But it's a good practice to name them in a way that makes sense. So, we will name the first element `listOfRestaurants` and the second element `setListOfRestaurants`. And we will set the initial value of the state variable to the resList array.

- Then we need to update the `resList` variable with the `listOfRestaurants` variable. Then we will pass the `listOfRestaurants` variable to the `RestaurantCard` component. And we will map through the `listOfRestaurants` variable instead of the `resList` variable. After that we will update the `listOfRestaurants` variable with the `filteredResList` variable using the `setListOfRestaurants` function. So, when the user clicks on the button, the `listOfRestaurants` variable will be updated with the `filteredResList` variable. And when the `listOfRestaurants` variable is updated, the UI will be updated automatically.

```js
import RestaurantCard from "./RestaurantCard";
import resList from "./../Utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const filteredResList = resList.filter((res) => {
              return Number(res.info.rating.aggregate_rating) >= 4.2;
            });
            setListOfRestaurants(filteredResList);
          }}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
```

- Now if we click on the button, we can see that the UI is updating automatically. Because we are updating the state of the application. And when the state of the application changes, the UI updates automatically.
