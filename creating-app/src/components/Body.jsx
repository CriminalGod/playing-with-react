import { useState } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtRestaurants = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4.2
            );
            setListOfRestaurants(filtRestaurants);
          }}
        >
          Top Rated Restuarant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resObj={restaurant} key={restaurant.data.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
