import React from "react";

const OrderDataRow = ({ order, handleOrderCancel }) => {
  const { _id, status } = order;
  const { name, img, price } = order.product;

  return (
    <tr>
      <td>{name}</td>
      <td> <img height="30" width="30" src={img} alt="" /> </td>
      <td>{price}</td>
  
      <td>{status}</td>
      <td>
        {" "}
        <button
          onClick={() => handleOrderCancel(_id)}
          className="btn btn-sm btn-danger"
        >
          cancel
        </button>{" "}
      </td>
    </tr>
  );
};

export default OrderDataRow;
