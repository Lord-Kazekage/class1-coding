import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-around bg-gray-500 p-5 text-white" id="navbar">
      <Link to="/">Home </Link>
      <Link to="/About">About </Link>
      <Link to="/contact">contact </Link>
      <Link to="/menu">Menu </Link>
    </div>
  );
};
export default Navbar;
