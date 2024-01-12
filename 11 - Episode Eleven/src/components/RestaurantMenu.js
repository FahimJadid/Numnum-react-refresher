import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantMenuCategories from "./RestaurantMenuCategories.js";
import { useState } from "react";

const RestaurantMenu = () => {
  const { restaurantName } = useParams();

  const resInfo = useRestaurantMenu(restaurantName);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisine_string } =
    resInfo?.page_data?.sections?.SECTION_BASIC_INFO;

  const { menus } = resInfo?.page_data?.order?.menuList;

  console.log(resInfo?.page_data?.order?.menuList.menus);

  const { menu } = resInfo?.page_data?.order?.menuList?.menus[0];

  const menuCategories = resInfo?.page_data?.order?.menuList?.menus.map(
    (menu) => menu.menu
  );

  console.log(menuCategories);
  return (
    <>
      <div className="w-6/12 m-auto bg-gray-50 shadow-lg p-4">
        <div className="bg-gray-50 shadow-lg p-4">
          <h3 className="m-auto text-center text-lg font-semibold">{name}</h3>
          <p className="text-xs m-auto text-center font-thin">
            {cuisine_string}
          </p>
        </div>

        {/* Accordion */}

        {/* Menu categories */}
        <div className="p-4">
          {menuCategories.map((menuCategory, index) => (
            <RestaurantMenuCategories
              data={menuCategory}
              key={menuCategory?.id}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
