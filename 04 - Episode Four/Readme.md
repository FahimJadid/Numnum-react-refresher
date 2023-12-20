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

- # Q: What is Map method and Join method?

  - Ans: The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
    example:
    `const cuisine = [
    {
      name: "Pizza",
    },
    {
      name: "Sandwich",
    },
    {
      name: "Pasta",
    },
    {
      name: "Burger",
    },
    {
      name: "Shake",
    },
  ]
`
    `<h4>{resData.info.cuisine.map(({ name }) => name).join(", ")}</h4>` - In the above example we are using map method to iterate over the cuisines array because it's an array of objects. The ({ name }) => name part is using destructuring to extract the name property from each object. and then we are using the join method to join the cuisines array with a comma.

- # Q: What is Destructuring?

  - Ans: Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. That is, we can extract data from arrays and objects and assign them to variables. Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays. It can be used in locations that receive data (such as the left-hand side of an assignment). Destructuring can also be used to pass an object as a parameter to a function that expects individual named parameters. Destructuring is fail-soft, similar to standard object lookup foo["bar"], producing undefined values when not found.

- # Q: What is Optional Chaining?
  - Ans: Optional chaining is a new feature in JavaScript that allows you to access nested objects without worrying if the property exists or not. It is denoted by a question mark (?.) and stops the evaluation if the object is null or undefined.

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

# Step 5 : Let's integrate Live API data to our application

- We will use the Zomato API to get the restaurant data.
- Right now we will use the static data from the API.
- Later we will use the dynamic data from the API with data fetching.
- We created a resObj object with the restaurant data from the API.
- We will pass the resObj object as props(resData) from the Body component to the RestaurantCard component.
- We will destructure the resData object in the RestaurantCard component.
- We will use the resData object to display the restaurant data in the RestaurantCard component.
- For now we are destructuring the image, name, cuisines, aggregate_rating, and average_cost_for_two properties from the resData object.
- For the cuisine property, we are using the map method to iterate over the cuisines array because it's an array of objects. and then we are using the join method to join the cuisines array with a comma.
- For now we are using just one restaurant data from the API. Later we will use the map method to iterate over the resObj array to display all the restaurant data.
- `<h4>{resData.info.cuisine.map(({ name }) => name).join(", ")}</h4>` - In the above code we are using map method to iterate over the cuisines array because it's an array of objects. The ({ name }) => name part is using destructuring to extract the name property from each object. and then we are using the join method to join the cuisines array with a comma.

- code:
- Body component:

```js
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj} />
      </div>
    </div>
  );
};
```

- RestaurantCard component:

```js
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img className="res-img" src={resData.info.image.url} alt="restaurant" />

      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisine.map(({ name }) => name).join(", ")}</h4>
      <h4>{resData.info.rating.aggregate_rating} stars</h4>
      <h4>{resData.order.deliveryTime}</h4>
      <h4>{resData.info.cft.text}</h4>
    </div>
  );
};
```

# Step 6 : Let's display all the restaurant data:

- To display all the restaurants, there needs a small change in the API data. Right now our resObj object has only one restaurant data. But in real world scenario we will have multiple restaurant data and it will be an array of objects. So we will change the resObj object to an array of objects.
- So let's use all the restaurant data from the API file `liveData.json`.
- Now it's not an object anymore, it is a restaurant list. So we will change the name of the resObj object to resList and use it as props in the Body component.

```js
<div className="res-container">
  <RestaurantCard resData={resList[1]} />
</div>
```

# Step 7 : Let's optimize the code using best practices:

- Currently we are using bad practice of destructuring the props object in the RestaurantCard component.
- We are repeating stuffs like `resData.info.name, resData.info.cuisine, resData.info.rating, resData.order.deliveryTime, resData.info.cft.text` in the RestaurantCard component.

- So let's destructure using optional chaining in the RestaurantCard component. Using optional chaining because we are not sure if the data will be available or not.

- code:

```js
const RestaurantCard = (props) => {
  const { resData } = props;

  const { image, name, cuisine, rating, cft } = resData?.info;
  const { deliveryTime } = resData?.order;
  return (
    <div className="res-card">
      <img className="res-img" src={image.url} alt="restaurant" />

      <h3>{name}</h3>
      <h4>{cuisine.map(({ name }) => name).join(", ")}</h4>
      <h4>{rating.aggregate_rating} stars</h4>
      <h4>{deliveryTime}</h4>
      <h4>{cft.text}</h4>
    </div>
  );
};
```

- Now let's use the map method to iterate over the resList array to display all the restaurant data.
- code:

```js
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
```

- What we are doing here is we are iterating over the resList array using the map method and for each restaurant we are passing the restaurant data as props to the RestaurantCard component. So now we are displaying all the restaurant data in the RestaurantCard component. But we are getting a warning in the console that we need to add a key prop to the RestaurantCard component. So let's add a key prop to the RestaurantCard component. We will fix this issue by using the restaurant's unique id as the key prop.

  `{resList.map((restaurant) => (
  <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
))}`

- Now we are not getting any warning in the console.
- This warning is because React needs to keep track of the elements in the list. So we need to add a key prop to the RestaurantCard component. We will fix this issue by using the restaurant's unique id as the key prop. Because the key prop should be unique for each element in the list. If it is not unique then React will not be able to keep track of the elements in the list.
