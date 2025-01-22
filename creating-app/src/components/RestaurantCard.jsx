import PropTypes from "prop-types";

const RestaurantCard = (props) => {
  const { resObj } = props;

  const { imgUrl, name, cuisines, avgRating, costForTwo, deliveryTime } =
    resObj.data;

  return (
    <div className="res-card" style={{ backgroundColor: "#e6e6e6" }}>
      <img className="res-logo" src={imgUrl} alt="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>Rs.{costForTwo / 100} for Two</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

RestaurantCard.propTypes = {
  resObj: PropTypes.object.isRequired,
};

export default RestaurantCard;
