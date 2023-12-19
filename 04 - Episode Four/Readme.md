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
- code:

```js

```
