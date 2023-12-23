import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/restaurants?place_name=College+Street&dishv2_id=30308&location=&isMobile=1"
      );
      const json = await data.json();

      setListOfRestaurants(json?.page_data?.sections?.SECTION_SEARCH_RESULT);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // // Shimmer or Loading Screen
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const filteredResList = listOfRestaurants.filter((res) => {
              return Number(res?.info?.rating?.aggregate_rating) >= 4.2;
            });
            setListOfRestaurants(filteredResList);
          }}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants?.map((restaurant) => {
          const resId = restaurant?.info?.resId;
          if (resId) {
            return <RestaurantCard key={resId} resData={restaurant} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Body;
