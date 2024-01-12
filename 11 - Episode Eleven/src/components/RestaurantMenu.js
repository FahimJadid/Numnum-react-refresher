import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restaurantName } = useParams();

  const resInfo = useRestaurantMenu(restaurantName);

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
      <div className="flex cursor-pointer justify-between items-center p-4 my-2 rounded-md bg-gray-50 select-none">
        <div className="basis-8/12 space-y-2 p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-xs font-thin">{cuisine_string}</p>
        </div>

        {/* Menu Categories items */}
        {/* <ul className="p-4">
          {Array.isArray(menus) &&
            menus.map((resMenu) => (
              <li
                className="p-2 py-8 flex gap-4 md:gap-8 justify-between items-center border-b"
                key={resMenu?.menu?.categories[0]?.category?.items[0]?.item?.id}
              >
                {resMenu?.menu?.categories[0]?.category?.items[0]?.item?.name}
              </li>
            ))}
        </ul> */}

        {/* Menu categories */}
        <ul className="p-4">
          {menuCategories.map((menuCategory) => (
            <li
              className="p-2 py-8 flex gap-4 md:gap-8 justify-between items-center border-b"
              key={menuCategory?.id}
            >
              <div className="basis-8/12 space-y-2">
                <h2 className="text-base font-semibold">
                  {menuCategory?.name}
                </h2>
                <ul className="font-semibold">
                  {menuCategory?.categories.map((cate) => (
                    <li className="p-2 flex gap-4 md:gap-8 justify-between items-center border-b">
                      <ul className="text-xs font-semibold">
                        {cate?.category?.items.map((itm) => (
                          <>
                            <h3 className="font-semibold">{itm?.item?.name}</h3>
                            <p className="p-2 py-4 font-thin">
                              {itm?.item?.desc}
                            </p>
                            <p className="p-2 pb-4 font-thin">
                              Price: {itm?.item?.price}
                            </p>
                          </>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
