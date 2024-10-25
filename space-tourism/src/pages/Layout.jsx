import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
const Layout = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.querySelector(".nav-list").classList.add("open");
    } else {
      document.querySelector(".nav-list").classList.remove("open");
    }
  }, [openMenu]);
  return (
    <>
      <nav>
        <div className="logo">
          <img src="./assets/shared/logo.svg" alt="logo" />
        </div>
        <ul className="nav-list">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              <span>00</span> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/destination"
            >
              <span>01</span> Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/crew"
            >
              <span>02</span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/technology"
            >
              <span>03</span> Technology
            </NavLink>
          </li>
        </ul>
        <div className="line"></div>
        <div className="burger-menu" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? (
            <img src="./assets/shared/icon-close.svg" alt="logo" />
          ) : (
            <img src="./assets/shared/icon-hamburger.svg" alt="logo" />
          )}
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
