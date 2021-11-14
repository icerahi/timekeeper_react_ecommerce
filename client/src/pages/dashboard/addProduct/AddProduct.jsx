import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { domain } from "../../../hooks/useDomain";
import SingleSpinner from "../../../components/singleSpinner/SingleSpinner";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    axios
      .post(`${domain}/products`, data)
      .then((res) => {
        if (res.data.insertedId) {
          swal("New Product Added successfully!!", "success");
          history.push("/dashboard/manage-products");
        }
      })
      .catch((err) => {
        swal("Error!!", "Oh something went wrong! try again!", "error");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="container">
      <h1 className="text-center display-6"> Add Product</h1>
      <hr className="w-50 mx-auto" />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="booking-card border-0 card p-3 my-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control mb-2"
                placeholder="Product Title"
                {...register("name", { required: true })}
              />
              <input
                className="form-control mb-2"
                placeholder="Product Image URL"
                type="text"
                {...register("img", { required: true })}
              />

              <input
                className="form-control mb-2"
                placeholder="Product Price"
                type="number"
                {...register("price")}
              />
              <textarea
                rows="4"
                cols="50"
                className="form-control mb-2"
                placeholder="Product Description"
                type="text"
                {...register("description")}
              />

              <button className="btn btn-dark d-block mx-auto" type="submit">
                {" "}
                {isLoading ? <SingleSpinner /> : "Add a new Product"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
