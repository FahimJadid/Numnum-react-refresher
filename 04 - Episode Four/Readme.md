### React Episode Four Notes

# React Food Ordering Application

# Q&A:

- # Q:
  - Ans:

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

- CSS implementation for Header component:

```css
.header {
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
}

.logo {
  width: 100px;
  padding: 0px 20px;
}

.nav-items > ul {
  display: flex;
  font-size: 20px;
  list-style-type: none;
  padding: 0px 20px;
}

.nav-items > ul > li {
  padding: 10px;
  margin: 10px;
}
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
      <h3>Koyla Ghor</h3>
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
