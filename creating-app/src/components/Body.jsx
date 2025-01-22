import { resList } from "../Data";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard resObj={restaurant} key={restaurant.data.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
