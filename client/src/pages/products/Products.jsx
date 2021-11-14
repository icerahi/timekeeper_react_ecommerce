import React from "react";
import Loader from "../../components/loader/Loader";
import Product from "../../components/product/Product";
import useProducts from "../../hooks/useProducts";
import "./Products.css";

const Products = () => {
  const { products } = useProducts();
  return (
    <div className="container my-5">
      <h2 className="text-center display-6"> Explore Our Products</h2>
      <hr className="w-25 mx-auto regular-text" />
      <div className="row mx-auto w-100 row-cols-1 row-cols-md-3 g-4">
        {products.length === 0 ? (
          <Loader />
        ) : (
          products.map((product, index) => (
            <Product key={index} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
