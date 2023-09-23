import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-20 py-7 shadow-md">
        <Logo />
        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-500 underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-500 underline"
                  : ""
              }
            >
              Favorites
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-500 underline"
                  : ""
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
