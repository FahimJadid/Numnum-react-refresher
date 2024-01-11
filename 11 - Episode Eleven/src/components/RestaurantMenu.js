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

  const { menu } = resInfo?.page_data?.order?.menuList?.menus[0];

  return (
    <div className='my-4'>
        <div>

            <div className='basis-8/12 space-y-2'>
              <h1 className='text-lg font-semibold'>{name}</h1>
              <p className='text-xs font-semibold'>{cuisine_string}</p>
              <h2 className='text-xs font-semibold'>{menu?.name}</h2>
            </div>

            <ul className='p-4'>
              {Array.isArray(menus) &&
                menus.map((resMenu) => (
                  <li
                    className='p-2 py-8 flex gap-4 md:gap-8 justify-between items-center border-b'
                    key={resMenu?.menu?.categories[0]?.category?.items[0]?.item?.id}
                  >
                    {resMenu?.menu?.categories[0]?.category?.items[0]?.item?.name}
                  </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default RestaurantMenu;
