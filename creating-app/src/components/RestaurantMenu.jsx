import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {

    const fetchData = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();
        const restaurantInfo = json.find((res) => res.data.id === resId);
        setResInfo(restaurantInfo);
      };

    fetchData();
  }, [resId]);



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
