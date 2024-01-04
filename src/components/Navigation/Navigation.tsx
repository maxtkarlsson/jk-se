import { NavLink } from "react-router-dom";
import classes from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className={`${classes.NavLink}`} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={`${classes.NavLink}`} to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className={`${classes.NavLink}`} to="/news">
            News
          </NavLink>
        </li>
        <li>
          <NavLink className={`${classes.NavLink}`} to="/about">
            About me
          </NavLink>
        </li>
        <li>
          <NavLink className={`${classes.NavLink}`} to="/wishlist">
            Wishlist
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
