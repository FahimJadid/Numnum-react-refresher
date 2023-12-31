import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/Logo.png";
import useOnlineStatus from "./../Utils/useOnlineStatus";

const Header = () => {
  const [isLogin, setLogin] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          {" "}
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online:{onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="btn login"
            onClick={() => {
              isLogin === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {isLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
