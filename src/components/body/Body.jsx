import { useState } from "react";
import ResCard from "../rescard/ResCard";
import { withLabel } from "../../Utils/HOC/withLabel";
import Shimmer from "../shimmer-ui/Shimmer";
import { Link } from "react-router-dom";
import "./body.css";
import useRestaurants from "../../Utils/hooks/useRestaurants";
import useOnlineStatus from "../../Utils/hooks/useOnlineStatus";

const Body = () => {
  const { filteredList, loading, filterbyRating, searchByName } =
    useRestaurants();
  const [searchText, setSearchText] = useState("");

  const status = useOnlineStatus();
  const PromotedCard = withLabel(ResCard);
  //promoted card is a HOC with rescard as a prop

  if (status === false) {
    return <h1>Seems like you are OFFLINE</h1>;
  }

  if (loading) {
    return (
      <>
        <div className="filter">
          <button className="filter-button" onClick={() => filterbyRating()}>
            Filter top rated
          </button>
        </div>
        <Shimmer />
      </>
    );
  }
  console.log(filteredList);
  return (
    <div className="body">
      <div className="controls">
        <div className="filter">
          <button className="filter-button" onClick={() => filterbyRating()}>
            Filter top rated
          </button>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={() => searchByName(searchText)}>Search</button>
        </div>
      </div>

      <div className="resContainer">
        {filteredList.map((restaurant) => (
          <Link
            to={"restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <PromotedCard restaurant={restaurant.info} />
            ) : (
              <ResCard restaurant={restaurant.info} />
            )}
           
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
