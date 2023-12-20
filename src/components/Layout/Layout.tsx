import { Outlet } from "react-router-dom";
import classes from "./layout.module.scss";

export const Layout = () => {
  return (
    <>
      <header className={`${classes.header}`}>
        <p>HEADER</p>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer className={`${classes.footer}`}></footer>
    </>
  );
};
