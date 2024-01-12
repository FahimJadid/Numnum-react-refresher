const RestaurantMenuCatItem = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data?.categories.map((cate) => (
        <li className="p-2 flex gap-4 md:gap-8 justify-between items-center border-b">
          <div className="text-xs font-semibold">
            {cate?.category?.items.map((itm) => (
              <div className="p-2 m-2 border-gray-200 border-b-2 text-left">
                {/* <img src={itm.item?.image_url} className="w-14" /> */}
                <span className="font-semibold">{itm?.item?.name}</span>
                <p className="p-2 py-4 text-xs font-thin">{itm?.item?.desc}</p>
                <span className="p-2 pb-4 font-thin">৳ {itm?.item?.price}</span>
              </div>
            ))}
          </div>
        </li>
      ))}
    </div>
  );
};

export default RestaurantMenuCatItem;
