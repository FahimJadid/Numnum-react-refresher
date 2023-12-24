import { useState } from "react";

import logo from "../../images/Logo.png";

const Header = () => {
  const [isLogin, setLogin] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
