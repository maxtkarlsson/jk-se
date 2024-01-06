import { Outlet } from "react-router-dom";
import "./layout.scss";
import { Navigation } from "../Navigation/Navigation";

export const Layout = () => {
  return (
    <>
      <header className="header">
        <p>LOGO</p>
        <Navigation />
      </header>
      <main className="main">
        <Outlet></Outlet>
      </main>
      <footer className="footer"></footer>
    </>
  );
};
