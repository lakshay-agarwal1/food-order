import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./shummer-ui/Shimmer";
import {Link} from "react-router-dom"
const Body = () => {
  // const [listOfRestaurants, setListOfRestaurants] = useState(
  //   res_data1.restaurants
  // );

  const [OGlistOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterdRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  /*
useState returns an array . 
its like 
const arr = useState ();

const listofresturents = arr[0];
const setList.... = arr[0];

*/

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const data = await response.json();
        console.log(data.data.cards[1].card.card); 
        const restaurants =
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];
        // setListOfRestaurants( 
        //   data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        //     ?.restaurants
        // );
        setListOfRestaurants (restaurants);
        setFilteredRestaurants(restaurants);
        // setFilteredRestaurants(
        //   data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        //     ?.restaurants
        // );
      } catch (err) {
        console.log("fetch error:", err);
      }
    };
    fetchData();
  }, []);

  const filterData = () => {
    const filterList = OGlistOfRestaurants.filter(
      (res) => res.info.avgRating > 4.3
    );
    setFilteredRestaurants(filterList);
  };

  // const singleRes = res_data1.restaurants;

  if (OGlistOfRestaurants.length === 0) {
    return (
      <>
        <div className="filter">
          <button
            className="filter-button"
            onClick={() => {
              filterData();
            }}
          >
            Filter top rated
          </button>
        </div>
        <Shimmer></Shimmer>
      </>
    );
  }

  return (
    <div className="body">
      <div className="controls">
        <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
            filterData();
          }}
        >
          Filter top rated
        </button>
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filterRes = OGlistOfRestaurants.filter(
              (res)=>(res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            );
            setFilteredRestaurants(filterRes);
            console.log(filterRes);
          }}
        >
          Search
        </button>
      </div>
      </div>

      <div className="resContainer">
        {/* <ResCard  name = {res_data.restaurants[1].info.name}
        cuisines={res_data.restaurants[1].info.cuisines.join(", ")}
        /> */}
        {filterdRestaurants.map((restaurant) => {
          return (

          <>
          <Link to={"restaurant/"+restaurant.info.id} > 
          
          <ResCard key={restaurant.info.id} restaurant={restaurant.info}  />
          </Link>
          </>  
          );
        })}
      </div>
    </div>
  );
};

export default Body;
