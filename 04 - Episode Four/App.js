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

const RestaurantCard = ({ resName, cuisine, rating, deliveryTime }) => {
  console.log({ resName, cuisine, rating, deliveryTime });
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/be66rnc0tj2jgdadiviu"
        alt="restaurant"
      />

      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
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
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
