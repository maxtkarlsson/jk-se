import { Outlet } from "react-router-dom";
import classes from "./layout.module.scss";
import { Navigation } from "../Navigation/Navigation";

export const Layout = () => {
  return (
    <>
      <header className={`${classes.header}`}>
        <Navigation />
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer className={`${classes.footer}`}></footer>
    </>
  );
};
