import React from "react";
import './About.css'
const About = () => {
  return (
    <div id="about" className="container my-5 py-5">
      <div className="row">
        <div className="col-md-6">
          <p className="text-uppercase banner-title lead fw-light"> About Us</p>
          <h2 className=" display-4 ">
            A Unique watch that fits Your Style
          </h2>
          <p className="lead">
            The new Lawson collection is already here! This quartz Lawson
            Franklin 38 model, designed with simplicity and elegance, is truly a
            cherry on the cake. Comes in different sizes and band colors, has a
            stainless steel back for a personalized engraving.{" "}
          </p>
          <button className="btn-regular bg-dark border-0 py-3 px-5 fs-6 fw-light text-white text-uppercase lead">
            {" "}
            Explore <i className="fas fa-angle-right"></i>{" "}
          </button>
        </div>
        <div className="col-md-6">
            <img className="img-fluid about-img" src="https://cdn.shopify.com/s/files/1/0564/2705/3216/files/img-1.jpg?v=1633497682" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
