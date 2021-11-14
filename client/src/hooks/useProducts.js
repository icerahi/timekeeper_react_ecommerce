import React, { useEffect, useState } from "react";
import axios from "axios";
import { domain } from "./useDomain";

const useProducts = (size) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`${domain}/products?size=${size}`)
        .then((res) => setProducts(res.data));
    };
    getData();
  }, [size]);
  return {
    products,setProducts
  };
};

export default useProducts;
