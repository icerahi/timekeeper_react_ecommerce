import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const SideBar = ({ url }) => {
  const { admin } = useAuth();
  return (
    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      <Link
        to={url}
        className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-5 d-none d-sm-inline">Dashboard</span>
      </Link>
      <ul
        className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
        id="menu"
      >
        {admin ? (
          <>
            <li>
              <NavLink
                to={`${url}/addproduct`}
                className="nav-link  text-white px-0 align-middle"
              >
                <i class="fas fa-plus-circle"></i>
                <span className="ms-1 d-none d-sm-inline">
                  Add Product
                </span>{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}/manage-orders`}
                className="nav-link  text-white px-0 align-middle"
              >
                <i class="fas fa-tasks"></i>
                <span className="ms-1 d-none d-sm-inline">
                  Manage All Orders
                </span>{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}/manage-products`}
                className="nav-link  text-white px-0 align-middle"
              >
                <i class="fab fa-product-hunt"></i>
                <span className="ms-1 d-none d-sm-inline">
                  Manage Products
                </span>{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}/make-admin`}
                className="nav-link  text-white px-0 align-middle"
              >
                <i class="fas fa-user-cog"></i>
                <span className="ms-1 d-none d-sm-inline">Make Admin</span>{" "}
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <NavLink
                to={`${url}/myorders`}
                className="nav-link text-white align-middle px-0"
              >
                <i className="fas  fa-cart-arrow-down"></i>
                <span className="ms-1 d-none d-sm-inline">My Orders</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={`${url}/review`}
                className="nav-link px-0 text-white align-middle"
              >
                <i class="fas fa-comment-dots"></i>
                <span className="ms-1 d-none d-sm-inline">Review</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={`${url}/pay`}
                className="nav-link  text-white px-0 align-middle"
              >
                <i class="fab fa-cc-amazon-pay"></i>
                <span className="ms-1 d-none d-sm-inline">Pay</span>{" "}
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default SideBar;
