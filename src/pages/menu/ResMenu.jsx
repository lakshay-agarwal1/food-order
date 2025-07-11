import { useEffect, useMemo, useState } from "react";
import Shimmer from "../../components/shummer-ui/Shimmer";
import "./ResMenu.css";
import { GetMENU_API } from "../../Utils/constants";
import { useParams } from "react-router-dom";

function ResMenu() {
  const [ResInfo, setResInfo] = useState(null);

  const { resid } = useParams();
  // console.log(arams);

  useEffect(() => {
    fetchMenu();
  }, [resid]);

  const fetchMenu = async () => {
    const data = await fetch(GetMENU_API(resid));
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=579632&catalog_qa=undefined&"
    // );
    const json = await data.json();
    setResInfo(json.data);
  };

  const { itemCards } = useMemo(() => {
    return (
      ResInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card || {}
    );
  }, [resid, ResInfo]);

  const { name, costForTwo, cuisines } = useMemo(() => {
    return ResInfo?.cards[2]?.card?.card.info || {};
  }, [resid, ResInfo]);

  if (!ResInfo) return <Shimmer />;

  return (
    <div className="mainDiv">
      <div className="topSection">
        <h1 className="restName">{name}</h1>
        <div className="restDetails">
          <span className="cuisineList">{cuisines?.join(", ")}</span>
          <span className="costForTwo">Avg cost: ₹{costForTwo / 100}</span>
        </div>
      </div>
      <div className="menuDiv">
        <h2 className="menuHeading">Menu</h2>
        <ul className="ulMenu">
          {itemCards?.map((item) => (
            <li className="menuLi" key={item.card.info.id}>
              <span className="foodName">{item.card.info.name}</span>
              <span className="foodPrice">Price coming soon</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResMenu;
