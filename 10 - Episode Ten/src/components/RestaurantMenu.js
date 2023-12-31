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
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisine_string}</p>
      <h2>{menu?.name}</h2>
      <ul>
        {Array.isArray(menus) &&
          menus.map((resMenu) => (
            <li
              key={resMenu?.menu?.categories[0]?.category?.items[0]?.item?.id}
            >
              {resMenu?.menu?.categories[0]?.category?.items[0]?.item?.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
