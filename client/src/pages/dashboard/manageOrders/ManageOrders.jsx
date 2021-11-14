import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import Empty from "../../../components/empty/Empty";
import { domain } from "../../../hooks/useDomain";
import useProducts from "../../../hooks/useProducts";
import ManageOrderRow from "./ManageOrderRow";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios.get(`${domain}/orders`).then((res) => setOrders(res.data));
    };
    getData();
  }, []);

  const handleOrderShipped = (id) => {
    axios.put(`${domain}/order/${id}`).then((res) => {
      if (res.data.modifiedCount) {
        swal("Order shipped successfully!", {
          icon: "success",
        });
        const updateItemIndex = orders.findIndex((order) => order._id === id);
        orders[updateItemIndex].status = "shipped";
        setOrders([...orders]);
      }
    });
  };

  const handleOrderDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this order!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`${domain}/order/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              swal("Poof! Order  has been deleted successfully!", {
                icon: "success",
              });
              const remaining = orders.filter((order) => order._id !== id);
              setOrders(remaining);
            }
          })
          .catch((err) =>
            swal("Error!!", "Oh something went wrong! try again!", "error")
          );
      }
    });
  };
  if (orders.length === 0) {
    return <Empty />;
  }
  return (
    <div className="container">
      <h1 className="text-center display-6">Manage Orders</h1>
      <hr className="w-50 mx-auto" />
      <div className="table-responsive">
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Product Title</th>
              <th scope="col">Image </th>
              <th scope="col">Price </th>
              <th scope="col">Status </th>
              <th scope="col">Ship/Delete </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <ManageOrderRow
                key={index}
                handleOrderShipped={handleOrderShipped}
                handleOrderDelete={handleOrderDelete}
                order={order}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
