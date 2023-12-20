import RestaurantCard from "./RestaurantCard";
import resList from "./../Utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const filteredResList = resList.filter((res) => {
              return Number(res.info.rating.aggregate_rating) >= 4.2;
            });
            console.log(filteredResList);
          }}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
