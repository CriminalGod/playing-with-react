import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const data = await fetch("http://localhost:8080/restaurantList");
    const json = await data.json();
    console.log(json);
    setTimeout(() => {
      setListOfRestaurants(json);
    }, 2000);
  };

  // // Conditional Rendering -> Rendering based on condition
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
