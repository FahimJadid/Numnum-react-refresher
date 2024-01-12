import RestaurantMenuCatItem from "./RestaurantMenuCatItem";

const RestaurantMenuCategories = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
    console.log("clicked");
  };
  return (
    <div className=" bg-gray-50 mx-auto my-4 shadow-lg p-4">
      <div
        className="flex justify-between"
        key={data?.id}
        onClick={handleClick}
      >
        <span className="font-bold text-lg text-left">
          <h2 className="text-base font-semibold">
            {data?.name} [{data.categories.length}]
          </h2>

          {/* Accordion Item list */}
          {showItems && <RestaurantMenuCatItem data={data} />}
        </span>
      </div>
    </div>
  );
};

export default RestaurantMenuCategories;
