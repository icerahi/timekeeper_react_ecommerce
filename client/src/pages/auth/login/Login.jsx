import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import SingleSpinner from "../../../components/singleSpinner/SingleSpinner";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { error, setError, loginUser, isLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    loginUser(data.email, data.password, history, location);
  };

  useEffect(() => {
    //when user come from public route set empty error message
    redirect_uri === "/" && setError("");
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="container text-center my-5">
      <div style={{ height: "350px" }} className="card p-3 col-md-6 mx-auto">
        <h1 className="text-center">Login</h1>
        <hr className="w-50 mx-auto" />
        <p className="text-center text-danger">{error && error}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            >
             {isLoading? <SingleSpinner/>:"Login" }
            </button>
        

          <p className="lead my-2">
            {" "}
            Haven't any account? <Link to="/register">Register Now</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
