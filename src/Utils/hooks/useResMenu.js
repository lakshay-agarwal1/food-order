import { useEffect, useState } from "react";
import { GetMENU_API } from "../constants";

function useResMenu(resID) {
  const [ResInfo, setResInfo] = useState(null);
  const [menuCategories, setMenuCategories] = useState([]);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const res = await fetch(GetMENU_API(resID));
        const json = await res.json();
        const data = json.data;

        const restaurantCard = data.cards?.find(
          (card) => card.card?.card?.info
        );
        const restaurantInfo = restaurantCard?.card?.card?.info;

        const groupedCard = data.cards?.find(
          (card) => card.groupedCard?.cardGroupMap?.REGULAR
        );
        const menuCards =
          groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

        // Extract each category with its title and itemCards
        const categories = menuCards
          .map((card) => card.card?.card)
          .filter(
            (card) => card?.title && card?.itemCards && card?.itemCards.length
          );

        setResInfo(restaurantInfo);
        setMenuCategories(categories);
      } catch (err) {
        console.log(err);
      }
    }

    if (resID) {
      fetchMenu();
    }
  }, [resID]);

  return { ResInfo, menuCategories };
}

export default useResMenu;
