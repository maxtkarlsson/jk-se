import { Outlet } from "react-router-dom";
import "./layout.scss";
import { Navigation } from "../Navigation/Navigation";

export const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <img
            className="header-logo__text"
            src="https://raw.githubusercontent.com/maxtkarlsson/jk-se/main/public/logos/jk-se-logo-gold.svg"
            alt=""
          />
        </div>
        <Navigation />
      </header>
      <main className="main">
        <Outlet></Outlet>
      </main>
      <footer className="footer"></footer>
    </>
  );
};
