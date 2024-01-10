const RestaurantCard = (props) => {
  const { resData } = props;

  const { image, name, cuisine, rating, cft } = resData?.info;
  const { deliveryTime } = resData?.order;
  return (
    <div className="overlay-container">
      <img
        className="relative w-full min-h-[180px] overflow-hidden aspect-video object-cover block rounded-md"
        src={image.url}
        alt="restaurant"
      />

      <h3 className='text-lg font-semibold mt-2 text-zinc-800'>{name}</h3>
      <h4 className='truncate  text-zinc-600'>{cuisine.map(({ name }) => name).join(", ")}</h4>
      <h4 className='font-semibold text-gray-700 text-sm'>{rating.aggregate_rating} stars</h4>
      <h4 className='text-zinc-600'>{deliveryTime}</h4>
      <h4 className='text-zinc-600'>{cft.text}</h4>
    </div>
  );
};

export default RestaurantCard;
