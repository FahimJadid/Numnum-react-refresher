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

const resObj = {
  type: "restaurant",
  info: {
    resId: 20667752,
    name: "Gupta Snacks",
    image: {
      url: "https://b.zmtcdn.com/data/pictures/2/20667752/8aeca1f6812bac9af694f5194ad3cf40_o2_featured_v2.jpg",
    },
    o2FeaturedImage: {
      url: "https://b.zmtcdn.com/data/pictures/2/20667752/8aeca1f6812bac9af694f5194ad3cf40_o2_featured_v2.jpg",
    },
    rating: {
      has_fake_reviews: 0,
      aggregate_rating: "2.7",
      rating_text: "2.7",
      rating_subtitle: "Average",
      rating_color: "FFBA00",
      votes: "14",
      subtext: "REVIEWS",
      is_new: false,
    },
    ratingNew: {
      newlyOpenedObj: null,
      suspiciousReviewObj: null,
      ratings: {
        DINING: {
          rating_type: "DINING",
          rating: "",
          reviewCount: "0",
          reviewTextSmall: "0 Reviews",
          subtext: "Does not offer Dining",
          color: "",
          ratingV2: "-",
          subtitle: "DINING",
          sideSubTitle: "Dining Reviews",
          bgColorV2: {
            type: "grey",
            tint: "500",
          },
        },
        DELIVERY: {
          rating_type: "DELIVERY",
          rating: "2.7",
          reviewCount: "14",
          reviewTextSmall: "14 Reviews",
          subtext: "14 Delivery Reviews",
          color: "#E23744",
          ratingV2: "2.7",
          subtitle: "DELIVERY",
          sideSubTitle: "Delivery Reviews",
          bgColorV2: {
            type: "yellow",
            tint: "600",
          },
          newOnDelivery: false,
        },
      },
    },
    cft: {
      text: "₹500 for two",
    },
    cfo: {
      text: "₹300 for one",
    },
    locality: {
      name: "Kestopur, Kolkata",
      address: "Bc-103, Anurupa Pally, Kestopur, Kolkata",
      localityUrl: "kolkata/kestopur-restaurants",
    },
    timing: {
      text: "",
      color: "",
    },
    cuisine: [
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
        url: "https://www.zomato.com/kolkata/restaurants/pizza/",
        name: "Pizza",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
        url: "https://www.zomato.com/kolkata/restaurants/sandwich/",
        name: "Sandwich",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
        url: "https://www.zomato.com/kolkata/restaurants/pasta/",
        name: "Pasta",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
        url: "https://www.zomato.com/kolkata/restaurants/burger/",
        name: "Burger",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
        url: "https://www.zomato.com/kolkata/restaurants/shake/",
        name: "Shake",
      },
    ],
    should_ban_ugc: false,
    costText: {
      text: "₹300 for one",
    },
  },
  order: {
    deliveryTime: "45 min",
    isServiceable: true,
    hasOnlineOrdering: true,
    actionInfo: {
      text: "Order Now",
      clickUrl: "/kolkata/gupta-snacks-1-kestopur/order",
    },
  },
  gold: [],
  takeaway: [],
  cardAction: {
    text: "",
    clickUrl: "/kolkata/gupta-snacks-1-kestopur/order",
    clickActionDeeplink:
      "https://link.zomato.com/xqzv/v17twtu8?deep_link_value=zomato%3A%2F%2Forder%2F20667752%3Futm_campaign%3De096ec978a3b7528e75f3eec3bb27fc6%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
  },
  distance: "7.2 km",
  isPromoted: false,
  promotedText: "",
  trackingData: [
    {
      table_name: "zsearch_events_log",
      payload:
        '{"search_id":"ef33fa2c-ea9d-4aa5-9c3a-57df313ae226","location_type":"delivery_cell","location_id":"4180033504081346560","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20667752","element_type":"listing","rank":1}',
      event_names: {
        tap: '{"action":"tap"}',
        impression: '{"action":"impression"}',
      },
    },
  ],
  allCTA: [],
  promoOffer: "",
  checkBulkOffers: true,
  bulkOffers: [
    {
      text: "10% OFF",
      color: {
        tint: "500",
        type: "blue",
      },
    },
  ],
  isDisabled: false,
  bottomContainers: [],
};

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
