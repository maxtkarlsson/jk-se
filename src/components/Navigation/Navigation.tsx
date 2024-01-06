import { NavLink } from "react-router-dom";
import "./navigation.scss";

export const Navigation = () => {
  return (
    <>
      <label className="hamburger">
        <input type="checkbox" />
      </label>
      <nav className="navigation">
        <ul className="navigation-list">
          <li className="navigation-list__item">
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li className="navigation-list__item">
            <NavLink className="link" to="/products">
              Products
            </NavLink>
          </li>
          <li className="navigation-list__item">
            <NavLink className="link" to="/news">
              News
            </NavLink>
          </li>
          <li className="navigation-list__item">
            <NavLink className="link" to="/about">
              About me
            </NavLink>
          </li>
          <li className="navigation-list__item">
            <NavLink className="link" to="/wishlist">
              Wishlist
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
