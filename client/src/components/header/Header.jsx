import React from "react";
import "./Header.css";
import { NavLink, Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Header = () => {
  const history = useHistory();
  const { user, logOut } = useAuth();
  return (
    <nav  className="navbar sticky-top navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
      <Link className="navbar-brand ms-md-5  display-1 fs-2 " to="/">
          <span className="bg-dark text-white px-2">Time</span>{" "}
          <span className="bg-blue text-dark px-2">Keeper</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul id="menu" className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
                  <NavLink to="/products" activeClassName="activeClass" className="nav-link py-2 px-4 fs-6 fw-bold ">
                    Products
                  </NavLink>
                </li>
            {user ? (
              <>
                <li className="nav-item">
                  <NavLink to="/dashboard" activeClassName="activeClass" className="nav-link py-2 px-4 fw-bold ">
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => logOut(history)}
                    className="displayName text-dark fw-bolder border-0"
                  >
                    {" "}
                    {user.displayName}
                    <i className="fas mx-1 fa-lg fa-sign-out-alt"></i>
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink
                  activeStyle={{ color: "#a99577" }}
                  to="/login"
                  className="nav-link fs-6 fw-bold  "
                >
                  Login/Register
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
