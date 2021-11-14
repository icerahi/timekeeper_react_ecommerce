import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import Empty from "../../../components/empty/Empty";
import useAuth from "../../../hooks/useAuth";
import { domain } from "../../../hooks/useDomain";
import OrderDataRow from "./OrderDataRow";

const MyOrders = () => {
  const [userOrders, setUserOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const getData = async () => {
      await axios(`${domain}/myorders?email=${user.email}`).then((res) =>
        setUserOrders(res.data)
      );
    };
    getData();
  }, []);

  const handleOrderCancel = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once cancelled, you will not be able to recover this order!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`${domain}/order/${id}`)
          .then((res) => {
              console.log(res.data.deletedCount)
            if (res.data.deletedCount>0) {
              swal("Poof! Your order file has been cancelled successfully!", {
                icon: "success",
              });
              const remaining = userOrders.filter(
                (order) => order._id !== id
              );
              setUserOrders(remaining);
            }
          })
          .catch((err) =>
            swal("Error!!", "Oh something went wrong! try again!", "error")
          );
      }
    });
  };

  if (userOrders.length === 0) {
    return <Empty />;
  }
  return (
    <div className="container">
      <h1 className="text-center display-6">My Orders</h1>
      <hr className="w-50 mx-auto" />
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Image </th>
              <th scope="col">Price(BDT) </th>
              <th scope="col">Status </th>
              <th scope="col">Action </th>
            </tr>
          </thead>
          <tbody>
            {userOrders.map((order, index) => (
              <OrderDataRow
                key={index}
                  handleOrderCancel={handleOrderCancel}
                order={order}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
