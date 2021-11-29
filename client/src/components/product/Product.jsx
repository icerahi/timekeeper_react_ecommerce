import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
const Product = ({product}) => {
    const {_id,name,img,description,price}=product;
  return (
    <div className="col">
      <div className="card h-100 trip-card shadow-lg border-15 border-0">
        <div className="overflow-hidden">
          <img
            src={img}
            className="card-img-top trip-image border-15"
            alt="..."
          />
        </div>
        <div className="card-body">
          <div>
            <h5 className="card-title">{name}</h5>
            <div className="row w-100 justify-content-between">
              <div className="col-md-12">
                <p className="">
                  {description.slice(0,100)}...
                </p>
              </div>
              <div className="col-md-6">
                <Link to={`/purchase/${_id}`}>
                  {" "}
                  <button className="border-0 fw-light text-light bg-dark float-right  ms-auto py-2 px-3">
                   <i className="fa fa-shopping-cart"></i> Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <button className="price-button border-0">BDT {price}</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
