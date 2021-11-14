import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer p-5">
      <div className="row w-100">
        <div className="col-md-3">
          <h6>Discover</h6>
          <div className="discover">
            <Link to="/">Home</Link>
            <a>Terms</a>
            <a>Refund Policy</a>
            <a>Privacy Policy</a>
          </div>
        </div>
        <div className="col-md-3">
          <h6>Payment Methods</h6>
          <div className="payment-method">
            <img
              src="https://www.gozayaan.com/img/icon-footer-visa.0cc68109.svg"
              alt=""
            />
            <img
              src="https://www.gozayaan.com/img/icon-footer-amex.6eb94277.svg"
              alt=""
            />
            <img
              src="https://www.gozayaan.com/img/icon-footer-mastercard.afdd5b7f.svg"
              alt=""
            />
            <img
              src="https://www.gozayaan.com/img/icon-footer-bkash.a929cde0.svg"
              alt=""
            />
            <img
              src="https://www.gozayaan.com/img/icon-payment-nagad.2e467251.svg"
              alt=""
            />
            <img
              src="https://www.gozayaan.com/img/icon-payment-upay.1b608ec0.svg"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-3">
          <h6>Need Help?</h6>
          <p className="fw-light">
            We are Always here for you! Knock us on Messenger anytime or Call
            our Hotline (10AM - 10PM).
          </p>
        </div>
        <div className="col-md-3">
          <h6>Contact</h6>
          <p className="fw-light">info@timekeeper.com</p>
          <p className="fw-light">+8801726744303</p>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <Link className="navbar-brand ms-md-5  display-1 fs-2 " to="/">
          <span className="bg-dark text-white px-2">Time</span>{" "}
          <span className="bg-blue text-white px-2">Keeper</span>
        </Link>
        <p className="">©Copyright Time Keeper Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;
