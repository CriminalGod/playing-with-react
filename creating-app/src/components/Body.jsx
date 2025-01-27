import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body rendered....");

  useEffect(() => {
    console.log("Body useEffect...");

    fetchRestaurantData();
    // this return function get called when this function component get unmounted
    return () => {
      console.log("Body unmounted...");
      
    };
  }, []);

  const fetchRestaurantData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    // setTimeout(() => {
    setListOfRestaurants(json);
    setfilteredRestaurantList(json);
    // }, 2000);
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
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              setfilteredRestaurantList(
                listOfRestaurants.filter((res) =>
                  res.data.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filtRestaurants = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4.2
            );
            filteredRestaurantList(filtRestaurants);
          }}
        >
          Top Rated Restuarant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            key={restaurant.data.id}
            to={"/restaurants/" + restaurant.data.id}
          >
            <RestaurantCard resObj={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
