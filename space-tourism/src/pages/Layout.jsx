import { Outlet, Link } from "react-router-dom";
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
            <Link to="/">
              <span>00</span> Home
            </Link>
          </li>
          <li>
            <Link to="/destination">
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="/crew">
              <span>02</span> Crew
            </Link>
          </li>
          <li>
            <Link to="/technology">
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
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
