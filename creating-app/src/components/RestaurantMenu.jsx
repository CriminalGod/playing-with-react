import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwo } = resInfo.data;
  const itemList = resInfo.data.items;
  return (
    <div>
      <h1> {name}</h1>
      <p>{avgRating} stars</p>
      <p>
        {cuisines.join(", ")} - Rs.{costForTwo / 100}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemList.map((item) => (
          <li key={item.itemId}>
            {item.itemName} - Rs.{item.itemPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
