import { IMAGE_BASE_URL } from "../Utils/constants";

const ResCard = ({ restaurant }) => {
  const {
    cloudinaryImageId: img,
    name,
    cuisines,
    areaName,
    locality,
    avgRating: rating,
    sla,
    costForTwo,
  } = restaurant;

  return (
    <div className="res-card">
      <img className="img" src={IMAGE_BASE_URL + img} />
      <h3 className="title">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <p className="address">{`${areaName}, ${locality}`}</p>
      {/* <p className="rating">{rating}★</p> */}
      <p className={`rating ${rating > 3.5 ? "rating-good" : "rating-bad"}`}>
        {rating}★
      </p>

      <p>{sla.slaString}</p>
      <p className="price">{costForTwo}</p>
    </div>
  );
};
export default ResCard;
