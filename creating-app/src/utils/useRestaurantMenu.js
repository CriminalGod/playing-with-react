import { useState, useEffect } from "react";
import { API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(API_URL);
      const json = await data.json();
      const restaurantInfo = json.find((res) => res.data.id === resId);
      setResInfo(restaurantInfo);
    };

    fetchData();
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
