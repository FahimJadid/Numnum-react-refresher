import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import useOnlineStatus from "./../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const Header = () => {
  const [isLogin, setLogin] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const loggedInUser = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <header className="sticky w-full top-0 bg-white z-20 py-4 border-b shadow-sm border-gray-100">
      <div className="container-max flex justify-between items-center">
        <div className="flex items gap-2 md:gap-4">
          <Logo />
        </div>

        <ul className="text-zinc-700 ml-auto gap-2 md:gap-4 items-center hidden md:flex">
          <li>
            <Link
              to="/"
              className="p-2 md:px-4 hover:bg-rose-100 rounded-md flex items-center gap-2"
            >
              <p className="hidden md:block">Home</p>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="p-2 md:px-4 hover:bg-rose-100 rounded-md flex items-center gap-2"
            >
              <p className="hidden md:block">About</p>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="p-2 md:px-4 hover:bg-rose-100 rounded-md flex items-center gap-2"
            >
              <p className="hidden md:block">Contact</p>
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              className="p-2 md:px-4 hover:bg-rose-100 rounded-md flex items-center gap-2"
            >
              <p className="hidden md:block">Grocery</p>
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="p-2 relative md:px-4 hover:bg-rose-100 rounded-md flex items-center gap-2"
            >
              <p className="hidden md:block">Cart</p>
            </Link>
          </li>
          <button
            className="ml-4 bg-rose-500 text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex"
            onClick={() => {
              isLogin === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {isLogin}
          </button>

          <li className="p-2 relative md:px-4 hover:bg-rose-100 rounded-md flex items-center gap-2">
            {loggedInUser.loggedInUser}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
