import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/aminia-new-market-area/order&location=&isMobile=1"
      //   "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/burger-king-new-market-area/info&location=&isMobile=1"
      //   "https://link.zomato.com/xqzv/r6vj7tg3?deep_link_value=zomato%3A%2F%2Frestaurant%2F19867842%2Fmenu%3Futm_campaign%3D53a0c7393a376b8c08a06d21ad1bf2f3%26utm_source%3Dmweb%26utm_medium%3DMwebMenuModal"

      //   "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/info&location=&isMobile=1"
      //   "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/restaurants/info&location=&isMobile=1"
      //   "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/restaurants?place_name=College+Street&dishv2_id=30308&location=&isMobile=1"
    );

    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };

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
            <li>
              {resMenu?.menu.categories[0].category?.items[0]?.item?.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
