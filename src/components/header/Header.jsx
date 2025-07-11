import { useState } from "react";
import logo from "../../assets/fast-delivery.png";
import "./header.css";
import About from "../../pages/about/About";
import { Link, Outlet } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("login");

  return (
    <>
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
        <div className="navItems">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/Cart"}>Cart</Link>
            </li>
            <li>
              <button
                className="log-btn"
                onClick={() => {
                  btnName === "login"
                    ? setBtnName("logout")
                    : setBtnName("login");
                }}
              >
                {btnName}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
