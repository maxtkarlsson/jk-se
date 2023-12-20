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
          <NavLink className={`${classes.NavLink}`} to="/products">
            Products
          </NavLink>
          <NavLink className={`${classes.NavLink}`} to="/news">
            News
          </NavLink>
          <NavLink className={`${classes.NavLink}`} to="/about">
            About me
          </NavLink>
          <NavLink className={`${classes.NavLink}`} to="/wishlist">
            Wishlist
          </NavLink>
          <NavLink className={`${classes.NavLink}`} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
