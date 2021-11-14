import React from "react";
import Product from "../../../components/product/Product";
import Loader from '../../../components/loader/Loader'
import useProducts from '../../../hooks/useProducts'
import { Link } from "react-router-dom";

const Products = () => {
  const {products} = useProducts(6)
  return (
    <div className="container my-5">
      <h2 className="text-center display-6"> Best Selling Products</h2>
      <hr className="w-25 mx-auto regular-text" />
      <div className="row mx-auto w-100 row-cols-1 justify-content-center row-cols-md-3 g-4">
        {products.length === 0 ? (
          <Loader />
        ) : (
          products.map((product, index) => <Product key={index} product={product}  />)
        )}
      </div>
     <Link className="text-decoration-none" to="/products"> <button
        style={{ borderRadius: "20px" }}
        className="btn btn-dark text-decoration-none py-2 fw-bolder px-5 mx-auto my-4 d-block"
      >
        LOAD MORE
      </button></Link>
      
    </div>
  );
};

export default Products;
