// import { useParams } from "react-router-dom";
// import useResMenu from "../../Utils/hooks/useResMenu";
// import Shimmer from "../../components/shimmer-ui/Shimmer";
// import "./ResMenu.css";

// function ResMenu() {
//   const { resid } = useParams();
//   const { ResInfo, menuItems } = useResMenu(resid);

//   if (!ResInfo) return <Shimmer />;

//   const { name, cuisines, costForTwo } = ResInfo;

//   return (
//     <div className="mainDiv">
//       <div className="topSection">
//         <h1 className="restName">{name}</h1>
//         <div className="restDetails">
//           <span className="cuisineList">{cuisines?.join(", ")}</span>
//           <span className="costForTwo">Avg cost: ₹{costForTwo / 100}</span>
//         </div>
//       </div>
//       <div className="menuDiv">
//         <h2 className="menuHeading">Menu</h2>
//         <ul className="ulMenu">
//           {menuItems.length > 0 ? (
//             menuItems.map((item) => (
//               <li className="menuLi" key={item.card.info.id}>
//                 <span className="foodName">{item.card.info.name}</span>
//                 <span className="foodPrice">
//                   ₹
//                   {item.card.info.price
//                     ? item.card.info.price / 100
//                     : item.card.info.defaultPrice
//                     ? item.card.info.defaultPrice / 100
//                     : "N/A"}
//                 </span>
//               </li>
//             ))
//           ) : (
//             <li>No menu items found.</li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default ResMenu;

// ====================================================
/*
import { useParams } from "react-router-dom";
import useResMenu from "../../Utils/hooks/useResMenu";
import Shimmer from "../../components/shimmer-ui/Shimmer";
import "./ResMenu.css";
import { useDispatch } from "react-redux";
import { additem } from "../../Utils/cartSlice";

function ResMenu() {
  const { resid } = useParams();
  const { ResInfo, menuCategories } = useResMenu(resid);

  const dispatch = useDispatch();
  const handleadditem = (item) => {
    dispatch(additem(item));
  };
  if (!ResInfo) return <Shimmer />;

  const { name, cuisines, costForTwo } = ResInfo;
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

        {menuCategories.length > 0 ? (
          menuCategories.map((category) => (
            <div className="menuCategory" key={category.title}>
              <h3 className="categoryTitle">{category.title}</h3>
              <ul className="ulMenu">
                {category.itemCards.map((item) => (
                  <li className="menuLi" key={item.card.info.id}>
                    <span className="foodName">{item.card.info.name}</span>
                    <span className="foodPrice">
                      ₹
                      {item.card.info.price
                        ? item.card.info.price / 100
                        : item.card.info.defaultPrice
                        ? item.card.info.defaultPrice / 100
                        : "N/A"}
                    </span>
                    <span>
                      <button
                        className="button-2"
                        onClick={() => {
                          handleadditem(item.card.info);
                        }}
                      >
                        add
                      </button>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No menu items found.</p>
        )}
      </div>
    </div>
  );
}

export default ResMenu;

*/
// ====================================================

// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import useResMenu from "../../Utils/hooks/useResMenu";
// import Shimmer from "../../components/shimmer-ui/Shimmer";
// import "./ResMenu.css";

// function ResMenu() {
//   const { resid } = useParams();
//   const { ResInfo, menuCategories } = useResMenu(resid);

//   const [expandedIndex, setExpandedIndex] = useState(null);

//   if (!ResInfo) return <Shimmer />;

//   const { name, cuisines, costForTwo } = ResInfo;

//   const toggleAccordion = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <div className="mainDiv">
//       <div className="topSection">
//         <h1 className="restName">{name}</h1>
//         <div className="restDetails">
//           <span className="cuisineList">{cuisines?.join(", ")}</span>
//           <span className="costForTwo">Avg cost: ₹{costForTwo / 100}</span>
//         </div>
//       </div>

//       <div className="menuDiv">
//         <h2 className="menuHeading">Menu</h2>

//         {menuCategories.length > 0 ? (
//           menuCategories.map((category, index) => (
//             <div className="menuCategory" key={category.title}>
//               <div
//                 className="accordionHeader"
//                 onClick={() => toggleAccordion(index)}
//               >
//                 <h3 className="categoryTitle">{category.title}</h3>
//                 <span className="accordionIcon">
//                   {expandedIndex === index ? "▲" : "▼"}
//                 </span>
//               </div>
//               {expandedIndex === index && (
//                 <ul className="ulMenu">
//                   {category.itemCards.map((item) => (
//                     <li className="menuLi" key={item.card.info.id}>
//                       <span className="foodName">{item.card.info.name}</span>
//                       <span className="foodPrice">
//                         ₹
//                         {item.card.info.price
//                           ? item.card.info.price / 100
//                           : item.card.info.defaultPrice
//                           ? item.card.info.defaultPrice / 100
//                           : "N/A"}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))
//         ) : (
//           <p>No menu items found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ResMenu;
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import { useParams } from "react-router-dom";
import useResMenu from "../../Utils/hooks/useResMenu";
import Shimmer from "../../components/shimmer-ui/Shimmer";
import "./ResMenu.css";
import { useDispatch } from "react-redux";
import { additem } from "../../Utils/cartSlice";
import MenuItemCard from "./MenuItemCard";

function ResMenu() {
  const { resid } = useParams();
  const { ResInfo, menuCategories } = useResMenu(resid);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    const { id, name, imageId } = item;
    const price = item.price ?? item.defaultPrice ?? 0;
    dispatch(additem({ id, name, price, imageId }));
  };

  if (!ResInfo) return <Shimmer />;

  const { name, cuisines, costForTwo } = ResInfo;

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

        {menuCategories.length > 0 ? (
          menuCategories.map((category) => (
            <div className="menuCategory" key={category.title}>
              <h3 className="categoryTitle">{category.title}</h3>
              <ul className="ulMenu">
                {category.itemCards.map((item) => (
                  <MenuItemCard
                    key={item.card.info.id}
                    item={item.card.info}
                    onAdd={handleAddItem}
                  />
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No menu items found.</p>
        )}
      </div>
    </div>
  );
}

export default ResMenu;
