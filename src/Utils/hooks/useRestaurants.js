import { useState, useEffect } from "react";
import { restaurants_list_api } from "../constants";

function useRestaurants() {
  const [originalList, setoriginalList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(restaurants_list_api);
        const data = await response.json();

        const restaurantCard = data?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        const restaurants =
          restaurantCard?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];

        setoriginalList(restaurants);

        setFilteredList(restaurants);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  const filterbyRating = (minRating = 4.3) => {
    const filtered = originalList.filter(
      (res) => parseFloat(res.info.avgRating) > minRating
    );
    setFilteredList(filtered);
  };

  const searchByName = (searchText) => {
    const filtered = originalList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredList(filtered);
  };

  return { filteredList, loading, filterbyRating, searchByName };
}

export default useRestaurants;
