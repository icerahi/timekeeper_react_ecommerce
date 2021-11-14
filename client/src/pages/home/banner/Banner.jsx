import React from "react";
import banner from "../../../assets/banner.jpg";
import "./Banner.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner} className="img-fluid" alt="..." />
          <div className="carousel-caption text-start banner-caption-block">
            <p className="text-uppercase lead fw-light">New Arrivals</p>
            <div>
              <h2 className="banner-title display-1 ">Our Best Collections</h2>
              <Link to="/products">
                {" "}
                <button className="btn-regular py-3 px-5 fs-6 fw-light text-white text-uppercase lead">
                  {" "}
                  Explore <i className="fas fa-angle-right"></i>{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
