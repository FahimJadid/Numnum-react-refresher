import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  // // Shimmer or Loading Screen using conditional rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="search-box"
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setListOfRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
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
