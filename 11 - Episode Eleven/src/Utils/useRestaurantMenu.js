import { useEffect, useState } from "react";

const useRestaurantMenu = (restaurantName) => {
  const [resInfo, setResInfo] = useState(null);

  // fetch data
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const encodedName = encodeURIComponent(
      restaurantName.replace(/\s+/g, "-").toLowerCase()
    );
    const data = await fetch(
      `https://www.zomato.com/webroutes/getPage?page_url=/kolkata/${encodedName}/order&location=`
    );

    const json = await data.json();
    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
