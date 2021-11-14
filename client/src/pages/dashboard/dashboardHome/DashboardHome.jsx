import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { domain } from "../../../hooks/useDomain";

const DashboardHome = () => {
  const { user, admin } = useAuth();
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      axios
        .get(`${domain}/dashboard?email=${user?.email}`)
        .then((res) => setData(res.data));
    };
    getData();
  }, []);
  {
    /* <p>Role : {data?.role}</p>
 
          <p>Users : {data?.totalUser}</p>
          <p>Admin : {data?.totalAdmin}</p>
          <hr /> */
  }
  return (
    <div className="container">
      <h1 className="text-center fs-4 fw-light">
        {" "}
        {admin ? "Admin Dashboard" : "User Dashboard"}{" "}
      </h1>
      <hr className="w-50 mx-auto" />
      <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
        {admin ? (
          <>
            <div className="col">
              <div
                className="card text-white bg-success mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">Total Products</div>
                <div className="card-body">
                  <h1 className="card-title text-center">
                    {data?.totalProduct}
                  </h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card text-white bg-secondary mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">Total Orders</div>
                <div className="card-body">
                  <h1 className="card-title text-center">{data?.totalOrder}</h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card text-white bg-primary mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">Pending Orders</div>
                <div className="card-body">
                  <h1 className="card-title text-center">
                    {data?.pendingOrder}
                  </h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card text-white bg-warning mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">Shipped Orders</div>
                <div className="card-body">
                  <h1 className="card-title text-center">
                    {data?.shippedOrder}
                  </h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card text-white bg-danger mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">Total Customer Reviews</div>
                <div className="card-body">
                  <h1 className="card-title text-center">
                    {data?.totalReview}
                  </h1>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col">
              <div
                className="card text-white bg-success mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">Total Orders</div>
                <div className="card-body">
                  <h1 className="card-title text-center">{data?.totalOrder}</h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card text-white bg-secondary mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">Pending Orders</div>
                <div className="card-body">
                  <h1 className="card-title text-center">
                    {data?.pendingOrder}
                  </h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card text-white bg-danger mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">Shipped Orders</div>
                <div className="card-body">
                  <h1 className="card-title text-center">
                    {data?.shippedOrder}
                  </h1>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;
