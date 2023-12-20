import { Outlet } from "react-router-dom";
import "./layout.scss";
import { Navigation } from "../Navigation/Navigation";

export const Layout = () => {
  return (
    <>
      <header className="header">
        <Navigation />
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer className="footer"></footer>
    </>
  );
};
