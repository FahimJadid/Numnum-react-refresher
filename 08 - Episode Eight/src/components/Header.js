import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/Logo.png";

const Header = () => {
  const [isLogin, setLogin] = useState("Login");
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
