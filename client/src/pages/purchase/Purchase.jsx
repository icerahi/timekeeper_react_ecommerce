import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";
import SingleSpinner from "../../components/singleSpinner/SingleSpinner";
import useAuth from "../../hooks/useAuth";
import { domain } from "../../hooks/useDomain";
import "./Purchase.css";
const Purchase = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [isLoading, setIsloading] = useState(false);

  const onSubmit = async (data) => {
    setIsloading(true);
    data.product = product;
    data.status = "pending";

    await axios
      .post(`${domain}/orders`, data)
      .then((res) => {
        if (res.data.insertedId) {
          swal("Thank you!!", "Your order sent successfully!!", "success");
          history.push("/");
        }
      })
      .catch((err) =>
        swal("Error!!", "Oh something went wrong! try again!", "error")
      )
      .finally(() => setIsloading(false));
  };

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`${domain}/products/${id}`)
        .then((res) => setProduct(res.data));
    };
    getData();
    window.scroll(0, 0);
  }, []);
  const { name, img, description, price } = product;

  return (
    <div className="container my-5">
      <div className="row w-100">
        <div className="col-md-6">
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="col-md-6">
          <h1 className="">{name}</h1>

          <button className="ms-auto bg-dark text-light px-3 fs-5 fw-light border-0">
            ৳ {price}
          </button>

          <h5 className="my-2">Description :</h5>
          <hr className="w-25" />
          <p className="lead">{description}</p>

          <div className="w-75 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                value={user?.displayName}
                className="form-control mb-2"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              <input
                value={user?.email}
                className="form-control mb-2"
                placeholder="Email Address"
                type="email"
                {...register("email")}
              />
              <input
                className="form-control mb-2"
                placeholder="Phone Number"
                type="number"
                {...register("phone", { required: true })}
              />
              <textarea
                rows="4"
                cols="50"
                className="form-control mb-2"
                placeholder="Address"
                type="text"
                {...register("note", { required: true })}
              />
              <button
                className="btn btn-dark d-block mx-auto"
                type="submit"
                value="Place Order"
              >
                {isLoading ? <SingleSpinner /> : "Place Order"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Purchase;
