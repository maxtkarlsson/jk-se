import { Link, Outlet } from "react-router-dom";
import "./layout.scss";
import { Navigation } from "../Navigation/Navigation";

export const Layout = () => {
  return (
    <>
      <header className="header">
        <Link to={"/"}>
          <div className="header-logo">
            <img
              className="header-logo__text"
              src="https://raw.githubusercontent.com/maxtkarlsson/jk-se/main/public/logos/jk-se-logo-gold.svg"
              alt=""
            />
          </div>
        </Link>
        <Navigation />
      </header>
      <main className="main">
        <Outlet></Outlet>
      </main>
      <footer className="footer">
        <div className="footer__contact">
          <p className="footer__mobile">073-11 222 33</p>
          <p className="footer__address">Skånegatan 58, Stockholm</p>
        </div>
        <div className="footer__social">
          <a href="https://www.instagram.com/">Instagram</a>
          <a href="https://www.facebook.com/">Facebook</a>
        </div>
      </footer>
    </>
  );
};
