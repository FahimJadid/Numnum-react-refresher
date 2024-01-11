import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  console.log(listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/restaurants?place_name=College+Street&dishv2_id=30308&location=&isMobile=1"
      );
      const json = await data.json();
      console.log(json);

      setListOfRestaurants(json?.page_data?.sections?.SECTION_SEARCH_RESULT);
      setFilteredRestaurants(json?.page_data?.sections?.SECTION_SEARCH_RESULT);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline! Please check your internet connection...
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-white relative py-8">
      <div className="flex gap-2 md:gap-4 max-w-[560px] w-[90%] mx-auto mt-6">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          className="p-2 px-4 rounded-md border outline-none focus-within:border-rose-500 border-gray-200 grow w-full"
        />
        <button
          className="bg-rose-500 flex-grow text-center text-white p-2 flex justify-center gap-2 items-center md:px-8 rounded-md text-sm md:text-base"
          onClick={() => {
            const filteredRes = listOfRestaurants.filter((res) => {
              return res?.info?.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredRestaurants(filteredRes);
          }}
        >
          <span className="hidden md:block">Search</span>
        </button>

        <div className="relative">
          <button
            className="bg-rose-500 basis-2/12 text-center text-white p-2 flex justify-center gap-2 items-center md:px-8 rounded-md text-sm md:text-base"
            onClick={() => {
              const filteredResList = listOfRestaurants.filter((res) => {
                return Number(res?.info?.rating?.aggregate_rating) >= 3.8;
              });
              setFilteredRestaurants(filteredResList);
            }}
          >
            <span>Top rated</span>
          </button>
        </div>
      </div>

      <div className="container-max">
        <h1 className="my-4 mt-8 font-bold text-2xl text-zinc-700">
          Restaurants near you
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {filteredRestaurants?.map((restaurant) => {
            const resId = restaurant?.info?.resId;
            const clickUrl = restaurant?.order?.actionInfo?.clickUrl;

            if (resId && clickUrl) {
              let parts = clickUrl.split("/");
              let restaurantName = parts[2] || "";
              return (
                <Link
                  to={"/restaurants/" + restaurantName}
                  className="hover:scale-95 transition ease-in-out duration-300 relative z-10"
                >
                  {/* if promoted then add a promoted label to it */}
                  {restaurant?.isPromoted ? (
                    <RestaurantCardPromoted key={resId} resData={restaurant} />
                  ) : (
                    <RestaurantCard key={resId} resData={restaurant} />
                  )}
                </Link>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
