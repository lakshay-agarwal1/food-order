import { useContext, useState } from "react";
import logo from "../../assets/fast-delivery.png";
import "./header.css";
import About from "../../pages/about/About";
import { Link, Outlet } from "react-router-dom";
import useOnlineStatus from "../../Utils/hooks/useOnlineStatus";
import UserContext from "../../Utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const status = useOnlineStatus();

  const { loggedUser } = useContext(UserContext);
  console.log(loggedUser);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
        <div className="navItems">
          <ul>
            <li>
              {status ? "🟢 " : "🔴 "}
              Status
            </li>
            <li>
              <Link to={"/"} tabIndex={0}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} tabIndex={0}>
                About
              </Link>
            </li>
            <li>
              <Link to={"/contact"} tabIndex={0}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to={"/instamart"}>Instamart</Link>
            </li>
            <li>
              <Link to={"/cart"} tabIndex={0}>
                Cart - {cartItems.length}
              </Link>
            </li>
            <li>
              <button
                className="log-btn"
                tabIndex={0}
                onClick={() => {
                  btnName === "login"
                    ? setBtnName("logout")
                    : setBtnName("login");
                }}
              >
                {btnName},{loggedUser}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
