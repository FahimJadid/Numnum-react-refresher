const RestaurantCard = (props) => {
  const { resData } = props;

  const { image, name, cuisine, rating, cft } = resData?.info;
  const { deliveryTime } = resData?.order;
  return (
    <div className="res-card">
      <img className="res-img" src={image.url} alt="restaurant" />

      <h3>{name}</h3>
      <h4>{cuisine.map(({ name }) => name).join(", ")}</h4>
      <h4>{rating.aggregate_rating} stars</h4>
      <h4>{deliveryTime}</h4>
      <h4>{cft.text}</h4>
    </div>
  );
};

export default RestaurantCard;
