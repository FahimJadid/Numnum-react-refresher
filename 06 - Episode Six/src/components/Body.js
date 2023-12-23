import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "./../Utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/restaurants?place_name=College+Street&dishv2_id=30308&location=&isMobile=1"
        // "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/must-visit-restaurants&location=&isMobile=1"
        // "https://www.zomato.com/webroutes/search/kolkata"
        // "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/order-food-online?delivery_subzone=1400"
        // "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/"
        // "https://www.zomato.com/webroutes/search/autoSuggest?addressId=0&entityId=2&entityType=city&locationType=&isOrderLocation=1&cityId=2&latitude=22.5726460000000000&longitude=88.3638950000000000&userDefinedLatitude=22.572646&userDefinedLongitude=88.363895&entityName=Kolkata&orderLocationName=Kolkata&cityName=Kolkata&countryId=1&countryName=India&displayTitle=Kolkata&o2Serviceable=true&placeId=1400&cellId=4180033504081346560&deliverySubzoneId=1400&placeType=DSZ&placeName=Kolkata&isO2City=true&fetchFromGoogle=false&fetchedFromCookie=true&&isO2OnlyCity=false&addressBlocker=0&&otherRestaurantsUrl=&q=resta&context=&searchMetadata={}"
      );
      const json = await data.json();
      if (
        json &&
        json.page_data &&
        json.page_data.sections &&
        json.page_data.sections.SECTION_SEARCH_RESULT
      ) {
        setListOfRestaurants(json.page_data.sections.SECTION_SEARCH_RESULT);
        // console.log(
        //   "First restaurant's resId:",
        //   json.page_data.sections.SECTION_SEARCH_RESULT[0]?.info?.resId
        // );
      } else {
        console.error("Invalid data structure in the fetched data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
