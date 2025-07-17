import { useDispatch, useSelector } from "react-redux";
import MenuItemCard from "../menu/MenuItemCard";
import { clearcart } from "../../Utils/cartSlice";


function Cart() {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleclearcart = () => {
    dispatch (clearcart())
  }

  
  return (
    <div className="mainDiv">
      <h2 className="menuHeading">Your Cart</h2>
      <ul className="ulMenu">
        {(cartItems.length === 0 ) && 
        <h1>Empty cart , go shopping </h1>}
        {cartItems.map((item, index) => (
            <MenuItemCard key={index} item={item} showAddButton={false} />
        ))}
      </ul>
        <button className="button-2" onClick={handleclearcart}>Clear cart</button>
    </div>
  );
}

export default Cart;
