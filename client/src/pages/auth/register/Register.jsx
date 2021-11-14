import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import SingleSpinner from "../../../components/singleSpinner/SingleSpinner";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const { registerUser, isLoading } = useAuth();
  const history = useHistory();

  const onSubmit = async (data) => {
    registerUser(data.email, data.password, data.username, history);
  };
  return (
    <div className="container text-center my-5">
      <div style={{ height: "350px" }} className="card p-3 col-md-6 mx-auto">
        <h1 className="text-center">Register</h1>
        <hr className="w-50 mx-auto" />
        {/* <p className="text-center text-danger">{error && error}</p> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="form-control mx-auto w-75 mb-2"
            placeholder="Username"
            {...register("username", { required: true })}
          />
          <input
            type="email"
            className="form-control mx-auto w-75 mb-2"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <input
            className="form-control mx-auto w-75 mb-2"
            placeholder="password"
            type="password"
            {...register("password")}
          />

          <button
            className="btn btn-dark d-block mx-auto w-50  fs-5"
            type="submit"
          ></button>

          <p className="lead my-2">
            {" "}
            Already have an account? <Link to="/login">Login Now </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
