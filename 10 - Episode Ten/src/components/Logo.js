import { Link } from "react-router-dom";
import logo from "../../images/Logo.png";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center text-xl md:text-2xl font-semibold text-zinc-700 gap-1 md:gap-2"
    >
      <img className="w-11" src={logo} alt="" />{" "}
      <span className="hidden md:block logo">Numnum</span>
    </Link>
  );
};

export default Logo;
