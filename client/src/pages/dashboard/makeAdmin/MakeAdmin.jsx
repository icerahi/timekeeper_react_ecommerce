import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { domain } from "../../../hooks/useDomain";
import useAuth from "../../../hooks/useAuth";
import SingleSpinner from "../../../components/singleSpinner/SingleSpinner";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const { user } = useAuth();
  const [isLoading, setIsloading] = useState(false);
  const onSubmit = async (data) => {
    setIsloading(true);
    axios
      .put(`${domain}/users/make-admin?email=${user.email}`, data)
      .then((res) => {
        if (res.data.modifiedCount) {
          swal("Success!", `You made '${data?.email}' as Admin !!`, "success");
          history.push("/dashboard");
        }
      })
      .catch((err) => {
        if (err.response?.status === 304) {
          swal(
            "Account Exists!!",
            `'${data?.email}' Account is already in admin role !!`,
            "info"
          );
        } else {
          swal("Error!!", "Oh something went wrong! try again!", "error");
        }
      })
      .finally(() => setIsloading(false));
  };

  return (
    <div className="container">
      <h1 className="text-center fs-4 fw-light"> Make Admin</h1>
      <hr className="w-50 mx-auto" />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="booking-card border-0 card p-3 my-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control mb-2"
                placeholder="User Email"
                {...register("email", { required: true })}
              />

              <button
                className="btn btn-dark d-block mx-auto"
                type="submit"
              >
                {isLoading ? <SingleSpinner /> : "Make Admin"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
