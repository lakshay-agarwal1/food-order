// components/menu-item/MenuItemCard.jsx
import "./MenuItemCard.css";
import { IMAGE_BASE_URL } from "../../Utils/constants";

const MenuItemCard = ({ item, onAdd, showAddButton = true, showDescription = true }) => {
  const imageUrl = item.imageId
    ? IMAGE_BASE_URL + item.imageId
    : null;

  const price =
    item.price
      ? item.price / 100
      : item.defaultPrice
      ? item.defaultPrice / 100
      : "N/A";

  return (
    <li className="menuLi">
      <div className="menuContent">
        <span className="foodName">{item.name}</span>
        {showDescription && item.description && (
          <p className="foodDescription">{item.description}</p>
        )}
        <span className="foodPrice">₹{price}</span>
        {showAddButton && (
          <button className="button-2" onClick={() => onAdd?.(item)}>
            add +
          </button>
        )}
      </div>
      {imageUrl && (
        <div className="foodImageWrapper">
          <img src={imageUrl} alt={item.name} className="foodImage" />
        </div>
      )}
    </li>
  );
};

export default MenuItemCard;
