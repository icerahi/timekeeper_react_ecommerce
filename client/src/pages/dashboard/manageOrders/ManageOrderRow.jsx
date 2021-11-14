import React from "react";

const ManageOrderRow = ({ order, handleOrderDelete,handleOrderShipped }) => {
  const { _id,name,email,phone, status } = order;
  const { name:productName, img, price } = order.product;

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{productName}</td>
      <td> <img height="30" width="30" src={img} alt="" /> </td>
      <td>{price}</td>
      <td>{status}</td>
      <td>
      <button
          onClick={() => handleOrderShipped(_id)}
          className="btn btn-sm btn-secondary m-2"
          disabled={status === "shipped"}
        >
         <i className="fas fa-check-square"></i>
        </button>
        <button
          onClick={() => handleOrderDelete(_id)}
          className="btn btn-sm btn-danger"
        >
         <i className="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default ManageOrderRow;