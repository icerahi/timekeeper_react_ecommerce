import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useHistory } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";
import { domain } from "../../../hooks/useDomain";

const Review = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    data.user = user.displayName;
    await axios
      .post(`${domain}/review`, data)
      .then((res) => {
        if (res.data.insertedId) {
          swal(
            "Thank you!!",
            "Your Review submitted successfully!!",
            "success"
          );
          history.push("/");
        }
      })
      .catch((err) => {
        swal("Error!!", "Oh something went wrong! try again!", "error");
      });
  };

  useEffect(() => {
    //when user come from public route set empty error message
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="container text-center my-5">
      <div style={{ height: "350px" }} className="card p-3 col-md-6 mx-auto">
        <h1 className="text-center">Write your review</h1>
        <hr className="w-50 mx-auto" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="number"
            className="form-control mx-auto  mb-2"
            placeholder="Rating Star (0 to 5)"
            {...register("rating", { required: true, min: 0, max: 5 })}
          />

          <textarea
            rows="4"
            cols="50"
            className="form-control mx-auto mb-2"
            placeholder="Your Review Note"
            type="text"
            {...register("note", { required: true })}
          />

          <input
            className="btn btn-dark d-block mx-auto w-50  fs-5"
            type="submit"
            value="Submit Review"
          />
        </form>
      </div>
    </div>
  );
};

export default Review;
