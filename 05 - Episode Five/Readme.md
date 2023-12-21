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

- # Q: What is render in react hooks?

  - Ans: Whenever a component's state changes, React re-renders the component. This means that React will call the render function of the component. The render function returns a React element, which is a lightweight description of what to render. So what do we mean by re-render! Re-render means when I click a button and the state changes React will call the render function of the component again. because the component's state has changed and React needs to update the UI to reflect the new state. Behind the scenes React will compare the new element with the previous one and only update the parts of the DOM that have changed. React keep track of the DOM changes and only update the parts of the DOM that have changed. This is called the virtual DOM. React uses the virtual DOM to update the DOM efficiently.

- # Q: What is DOM?

  - Ans: The Document Object Model (DOM) is a programming interface for web documents. It represents the HTML structure of a web page, which can be accessed and manipulated by JavaScript. When a web page is loaded, the browser creates a DOM tree that consists of all the HTML elements on the page.

Through the use of JavaScript, the DOM tree can be modified to update the web page. For instance, if you wish to change the text content of a button on a web page, you can select the button element using JavaScript and update its text content through the DOM.

- # Q: What is virtual DOM?

  - Ans: The Virtual DOM is a crucial concept utilized in modern frameworks such as React, which significantly improves the performance of updating the real DOM. When a state change occurs in a React component, instead of updating the actual DOM directly, React creates a lightweight replica of the DOM known as the Virtual DOM.

  React then compares the updated Virtual DOM with the previous one to identify the changes that need to be applied to the real DOM. Once the changes are determined, React updates the real DOM in an optimized and efficient manner, thereby reducing unnecessary re-renders and improving overall performance.

  The reason we do not change the DOM directly Because changing the DOM is an expensive operation. It can be slow and cause performance issues. So, React uses the virtual DOM to update the DOM efficiently.

- # Q: How Virtual DOM works?

  - Ans:

  1. Initial Rendering: When you first load your React application, React performs an initial rendering of your components to create the Virtual DOM.

  2. Render Changes: When a change occurs, such as user input or data update, React re-renders the affected components and generates a new Virtual DOM.
     Diffing Algorithm: React's diffing algorithm compares the previous Virtual DOM with the newly generated one. It identifies the exact changes that need to be made to the actual DOM to reflect the updated UI.
  3. Update the DOM: React applies only the necessary changes to the real DOM, minimizing the number of operations required. This makes the updates fast and efficient.
     Example: Imagine you have a photo gallery component in your React app. If a user clicks on a thumbnail to view a different photo, React will update only the necessary parts of the DOM, like swapping the displayed image and updating captions. It won't reload the entire page or make unnecessary changes.
     Improved Performance: By leveraging the Virtual DOM and performing targeted updates, React optimizes performance. It avoids expensive re-renders of unchanged components and focuses only on what needs to be updated.

- # Q: How virtual DOM is different from DOM?

  - Ans: The virtual DOM is a technology used by React to improve the performance and efficiency of web development and rendering. It is a lightweight and in-memory representation of the real DOM, which is the actual structure and content of a web page. The main difference between the virtual DOM and the real DOM is that updating the virtual DOM is much faster than updating the real DOM, as it requires fewer resources. It essentially syncs the virtual DOM with the real DOM by using a process called reconciliation.
    Below are some additional differences:
    `Application Speed`
    – Updating the actual DOM can be a slow process and may cause performance issues, particularly for complex applications. The Virtual DOM enables React to update the actual DOM in a more efficient and optimized manner, resulting in improved performance and a faster, smoother application.
    Memory Usage
    – The DOM can consume a significant amount of memory, particularly for larger web pages. React employs a lightweight copy of the DOM called the Virtual DOM, which reduces memory usage and enhances performance.
    `State Management`
    – Unlike the Virtual DOM, the DOM lacks built-in state management, necessitating developers to manually manage their application’s state. The Virtual DOM, in contrast, is intended to work seamlessly with React’s state management system, making state management and updates easier.
    `Re usability`
    – The Virtual DOM can be used for multiple components, simplifying the management and updating of the application’s state. In contrast, the DOM is specific to each web page and cannot be reused across different components.

  `Some of the benefits of using the virtual DOM are:`

  - It reduces the number of re-rendering operations, which can be costly and slow down the user experience.
  - It allows for easier manipulation and modification of the web page without affecting other parts of it.
  - It enables code reuse and optimization, as it can be shared across different components and scenarios.

  `Some of the challenges of using the virtual DOM are:`

  - It requires additional logic and complexity to handle data changes and updates.
  - It may not reflect some browser-specific features or behaviors that depend on the real DOM.
  - It may not work well with some third-party libraries or frameworks that rely on direct access to the real DOM.

- # Q: Why react is fast?

  - Ans: React is fast because of its efficient rendering system, which allows for fast and smooth UI updates. This is achieved through the use of virtual DOM and reconciliation, two concepts that are fundamental to understanding how React works.

- # Q: What is the Diffing Algorithm in React?

  - Ans: The diffing algorithm, also known as the reconciliation process, is the algorithm that React uses to update the user interface. When a user interacts with a React application, the state of the application changes, and React must update the UI to reflect these changes. The diffing algorithm determines which parts of the UI need to be updated and how to update them efficiently.

  React uses a virtual DOM to represent the UI. The virtual DOM is a lightweight copy of the real DOM, which allows React to compare the current state of the UI with the previous state and determine the minimal set of changes needed to update the UI. The diffing algorithm compares the virtual DOM trees of the previous and current states of the UI and identifies the differences between them. Once the differences are identified, React updates the real DOM only where necessary, resulting in a more efficient and faster UI update.

  Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique." If you don't specify a key, React will use the index of the element as the key. This can lead to unexpected behavior if the list is reordered or if new items are added to the list.

- # Q: How Does Reconciliation Work in React?

  - Ans: Reconciliation is the process by which React updates the real DOM based on the changes in the virtual DOM. The reconciliation process is the heart of the diffing algorithm in React.

  Reconciliation is a recursive process that starts at the root of the virtual DOM tree and compares each node in the previous and current virtual DOM trees. If a node has changed, React updates the corresponding element in the real DOM. If a node has been removed, React removes the corresponding element from the real DOM. If a node has been added, React creates a new element in the real DOM.

  `Reconciliation has three phases:`

  - `The Mounting Phase:` This is the phase where React creates the initial tree of the real DOM based on the virtual DOM.
  - `The Updating Phase:` This is the phase where React compares the previous virtual DOM tree with the current one and determines the minimal set of changes needed to update the real DOM.
  - `The Unmounting Phase:` This is the phase where React removes any elements that are no longer present in the new virtual DOM tree.

  `Benefits of Reconciliation in React`

  `Reconciliation provides several benefits for React applications:`

  `Efficiency:` Reconciliation allows React to update the real DOM efficiently, resulting in a faster and smoother user experience.
  `Simplicity:` Reconciliation simplifies the development process by allowing developers to work with a lightweight representation of the real DOM.
  `Flexibility:` Reconciliation allows React to work with different UI libraries and frameworks, making it a versatile tool for building user interfaces.
  Limitations of Reconciliation in React

  `Reconciliation has some limitations that developers should be aware of:`

  `Complexity:` Reconciliation adds complexity to the codebase, making it harder to debug and maintain.
  `Performance:` Reconciliation can be resource-intensive, especially for large and complex UIs.
  `State Management:` Reconciliation requires careful state management to avoid unnecessary updates and prevent performance issues.

- # Q: How Does Virtual DOM Work in React?

  - Ans:Virtual DOM is a lightweight representation of the real DOM. The virtual DOM is a JavaScript object that contains all the properties of the real DOM, such as element type, attributes, and event handlers. However, instead of rendering the virtual DOM directly to the browser, React uses the virtual DOM to compute the minimum number of changes needed to update the real DOM efficiently.

  When a component in a React application updates, React generates a new virtual DOM tree representing the updated component. React then compares the new virtual DOM tree with the previous one and determines the minimal set of changes needed to update the real DOM. This process of comparing the virtual DOM trees is called diffing.

- # Q: What is Fiber?

  - Ans: Fiber is a new reconciliation algorithm introduced in React 16.0 that aims to improve the performance of React applications by making the reconciliation process more efficient.

  It does that by allowing the reconciliation process to be broken down into smaller chunks and scheduled over multiple frames rather than being completed in a single frame.

  For example, suppose a component has many elements that need to be updated. In that case, the reconciliation process can take a long time and cause the UI to become unresponsive – This is where Fiber comes in.

  Fiber divides the reconciliation work into smaller units called “fibers“.

- # Q: How Fiber works?

  - Ans: Each Fiber represents a single element in the VDOM tree, and the reconciliation process is performed on each Fiber individually.

  This allows React to prioritize the reconciliation of certain fibers over others, depending on the importance of the updates.

  For example, suppose a component has many elements that need to be updated. In that case, React can prioritize the reconciliation of the elements that are visible to the user while deferring the reconciliation of the other elements until later.

  This helps ensure that the UI remains responsive even when there are a large number of updates.

  `Fiber in Asynchronous Programming`
  Fiber also introduces a new concept called “suspense”. Suspense allows React components to “wait” for a specific condition to be met before rendering.

  This can improve the performance of applications that rely on asynchronous data, such as fetching data from a server.

  Fiber works by maintaining a linked list of fibers called the “fiber tree“.

  Each Fiber in the tree represents a single element in the VDOM tree and contains information about the element, such as its type, props, and state.

  When a component’s state changes, React begins the reconciliation process by creating a new fiber tree based on the current state of the component. It then compares the new fiber tree to the previous fiber tree to determine the minimum number of changes required to update the actual DOM.

  During the reconciliation process, React traverses the fiber tree and updates each Fiber individually. It does this by starting at the root fiber and working its way down the tree, updating each Fiber in a depth-first order.

  As it traverses the fiber tree, React can pause the reconciliation process at any point and schedule the remaining work for the next frame. This allows React to prioritize the reconciliation of certain fibers over others and ensure that the UI remains responsive.

` Benefits of Fiber`

`Improved Performance`
As mentioned earlier, Fiber allows the reconciliation process to be broken down into smaller chunks and scheduled over multiple frames, which helps improve React applications’ performance, especially when a large number of elements need to be updated.

`Better user experience`
By prioritizing the reconciliation of certain fibers over others, Fiber helps ensure that the UI remains responsive, even when there are a large number of updates. This leads to a better user experience.

`Asynchronous rendering`
The introduction of Suspense in Fiber allows React components to “wait” for a specific condition to be met before rendering, which can be used to improve the performance of applications that rely on asynchronous data.

`Better concurrency`
Fiber allows React to interrupt the reconciliation process at any point and schedule the remaining work for the next frame. This helps improve the concurrency of React applications, as it allows React to perform updates in parallel with other tasks.

- # Q: Reconciliation versus rendering?

  - Ans: The DOM is just one of the rendering environments React can render to, the other major targets being native iOS and Android views via React Native. (This is why "virtual DOM" is a bit of a misnomer.)

The reason it can support so many targets is because React is designed so that reconciliation and rendering are separate phases. The reconciler does the work of computing which parts of a tree have changed; the renderer then uses that information to actually update the rendered app.

This separation means that React DOM and React Native can use their own renderers while sharing the same reconciler, provided by React core.

Fiber reimplements the reconciler. It is not principally concerned with rendering, though renderers will need to change to support (and take advantage of) the new architecture.

- # Q: Scheduling?

  `scheduling: `the process of determining when work should be performed.
  `work:`any computations that must be performed. Work is usually the result of an update (e.g. setState).
  React's Design Principles document is so good on this subject that I'll just quote it here:

  In its current implementation React walks the tree recursively and calls render functions of the whole updated tree during a single tick. However in the future it might start delaying some updates to avoid dropping frames.

  This is a common theme in React design. Some popular libraries implement the "push" approach where computations are performed when the new data is available. React, however, sticks to the "pull" approach where computations can be delayed until necessary.

  React is not a generic data processing library. It is a library for building user interfaces. We think that it is uniquely positioned in an app to know which computations are relevant right now and which are not.

  If something is offscreen, we can delay any logic related to it. If data is arriving faster than the frame rate, we can coalesce and batch updates. We can prioritize work coming from user interactions (such as an animation caused by a button click) over less important background work (such as rendering new content just loaded from the network) to avoid dropping frames.

  `The key points are:`

  In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
  Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
  A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.
  React doesn't currently take advantage of scheduling in a significant way; an update results in the entire subtree being re-rendered immediately. Overhauling React's core algorithm to take advantage of scheduling is the driving idea behind Fiber.

  Primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

  - `pause work and come back to it later.`
  - `assign priority to different types of work.`
  - `reuse previously completed work.`
  - `abort work if it's no longer needed.`
    In order to do any of this, we first need a way to break work down into units. In one sense, that's what a fiber is. A fiber represents a unit of work.

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

- # Step 3: Now Let's think how we can apply this logic

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

- # Step 4 : Updating the state of the application:

- Now it's time for UI update because we want the UI to change automatically when the user clicks on the button. Normal variables can not keep track of the changes. So, we need to use the `useState` hook to keep track of the changes. We need to import the `useState` hook from the react library.

- useState is a function that takes an initial value as an argument and returns an array with two elements. The first element is the state variable and the second element is the function that we use to update the state variable. We can name these elements anything we want. But it's a good practice to name them in a way that makes sense. So, we will name the first element `listOfRestaurants` and the second element `setListOfRestaurants`. And we will set the initial value of the state variable to the resList array. So, the initial value of the state variable will be the resList array. And we will use the `setListOfRestaurants` function to update the state variable. So, when the user clicks on the button, we will update the state variable with the filtered array. And when the state variable is updated, the UI will be updated automatically.

```js
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "./../Utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const filteredResList = listOfRestaurants.filter((res) => {
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

- Now if we click on the button, we can see that the UI is updating automatically. Because we are updating the state of the application. And when the state of the application changes, React will re-render the component. And when the component re-renders, the UI updates automatically.
- In fact react is really important to create synchronization between the data layer and the UI layer. So, we don't have to worry about updating the UI manually. React will take care of it for us.

- Easter Egg:

```js
// Method 1 : Mostly used
const [listOfRestaurants, setListOfRestaurants] = useState(resList);

// Method 2 : also works fine
const restaurantArr = useState(resList);
const [listOfRestaurants, setListOfRestaurants] = restaurantArr;
```
