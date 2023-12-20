### React Episode Four Notes

# React Food Ordering Application

# Q&A:

- # Q: What is Props?

  - Ans: Props is a way to pass data from one component to another component and makes the components dynamic. Props are immutable and passed in the same way as arguments are passed in functions. Props are usually passed from parent component to child component. Props are passed as attributes in JSX. Props are accessed in the child component using props object. Props are used to make components reusable. React wraps all the props in a single object called props and passes it to the component.

- # Q: Benefits of using props?

  - Ans:
    - Makes the code more readable
    - Makes the code more maintainable
    - Makes the code more reusable
    - Makes the code more testable
    - Makes the code more scalable

- # Q: What is Config-driven UI?

  - Ans: Config-driven UI is a technique that allows you to create dynamic and customizable UIs without hard coding them. It uses a configuration file to define the layout and content of the UI components. This way, you can easily change the appearance and behavior of your UI without modifying the source code. Config-driven UI can be implemented using various frameworks and libraries, such as ReactJS, Angular, Vue, etc.

  One of the benefits of config-driven UI is that it makes your code more maintainable and reusable. You can easily update or add new features to your UI by editing the configuration file instead of changing multiple files in your codebase. You can also reuse the same configuration file for different scenarios or environments. For example, A food delivery app can have different configurations for different cities or countries. This way, you can easily customize the UI for each location without having to write separate code for each location or without hard coding the UI.

# Let's Build The Application plan:

- # Step 1 : Basic UI Structure

  - Header

    - Logo
    - Links - Home, About, Cart

  - Body

    - Search Bar
    - Restaurants Cards - Img, Title, Cuisines, Rating, Delivery Time,

  - Footer
    - Links - Home, Address, Contact, Copyrights

- # Step 2 : Components of the Application

  - Header
    - Logo
    - Nav items
  - Body
    - Search
    - RestaurantContainer
      - RestaurantCards
        - RestaurantImg
        - RestaurantName
        - RestaurantCuisines
        - RestaurantRating
        - RestaurantDeliveryTime
  - Footer
    - Copyrights
    - Links
    - Address
    - Contact

## Implementation:

# Step 1 : Let's create an App component for layout

- Create a file called App.js
- Create a functional component called App
- Render the App component because it is the root level component
- code:

```js
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div className="app">
      <h1>App Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
```

# Step 2 : Let's create a Header component

- Create a functional component called Header
- Header will have a logo and nav items
- So create a div for logo and put an logo image inside it
- Import the logo image
- Add Header component to the Root level App component
- Let's Add some styles with CSS for Header component

- code:

```js
import logo from "./Logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
```

- After implementation code looks like this:

```js
import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./Logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
```

# Step 3 : Let's create a Body component

- Create a functional component called Body
- Body will have a search bar and restaurant cards
- So create a div for search bar and restaurant container
- Inside restaurant container we will have restaurant cards
- So we want to reuse the restaurant cards so we will create a component for restaurant cards as well
- Create RestaurantCard component
- Add RestaurantCards component to the Body component
- Add some CSS for Body & RestaurantCard component

- code:

```js
const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/be66rnc0tj2jgdadiviu"
        alt="restaurant"
      />

      <h3>Koyla House</h3>
      <h4>Biriyani, Kabab</h4>
      <h4>4.5 stars</h4>
      <h4>30 minutes</h4>
    </div>
  );
};
```

```js
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};
```

# Step 4 : Let's Use props to make the RestaurantCard component dynamic

- We will pass the restaurant details as props from the Body component to the RestaurantCard component.
- React automatically passes the props(restaurant details) as an object.
- We will destructure the props object in the RestaurantCard component. Some developers prefer to destructure the props object in the function parameters itself.

- Benefits of destructuring the props object:

  - Makes the code more readable
  - Makes the code more maintainable

- code:
- Passing props from Body component to RestaurantCard component:

```js
<div className="res-container">
  <RestaurantCard
    resName="Domino's"
    cuisine="Pizza, Fast Food"
    rating="4.3"
    deliveryTime="40"
  />
  <RestaurantCard
    resName="KFC"
    cuisine="Burger, Chicken Fry, Fast food"
    rating="4.4"
    deliveryTime="30"
  />
</div>
```

- Destructuring the props object in the RestaurantCard component:
- Console logging to see the props objects in the browser console

- code:

```js
const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/be66rnc0tj2jgdadiviu"
        alt="restaurant"
      />

      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating} stars</h4>
      <h4>{props.deliveryTime} minutes</h4>
    </div>
  );
};
```

- Destructuring the props object on the fly in the RestaurantCard component:

- code:

```js
// const RestaurantCard = (props) => {
//   const { resName, cuisine, rating, deliveryTime } = props;
// or same thing can be written as
const RestaurantCard = ({ resName, cuisine, rating, deliveryTime }) => {
  return (
    <div className="res-card">
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
```
