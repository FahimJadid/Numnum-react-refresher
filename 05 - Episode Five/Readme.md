### React Episode Fiver Notes

# React Food Ordering Application :

# Q&A:

- # Q: What is SPA(Single page application)?

  - Ans: A single-page application is an app that works inside a browser and does not require page reloading during use. You are using a single-page application every time you open your email, or check your Facebook, Twitter, or LinkedIn accounts. All these apps can be opened in a browser and do not require page reloading while you are using them.

- # Q: What is the difference between state and props?

  - Ans:

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
