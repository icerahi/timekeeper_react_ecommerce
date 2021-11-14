import React from "react";

const Empty = () => {
  return (
    <div className="container my-5">
      <div className="card mx-auto border-0">
        <div className="row justify-content-center p-3">
          <div className="col-md-6 my-auto">
            <h1 className="display-3 fw-bolder text-center">Oops!!</h1>
            <p className="lead fw-bold text-center">No Information yet!!</p>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="https://www.gozayaan.com/img/image-error-data.8c49ccd1.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empty;
