import React from "react";

const ManageProductRow = ({ product, handleProductDelete }) => {
  const { _id, name, img, price } = product;

  return (
    <tr>
      <td>{name}</td>
      <td>
        {" "}
        <img height="30" width="30" src={img} alt="" />{" "}
      </td>
      <td>{price}</td>

      <td>
        {" "}
        <button
            onClick={() => handleProductDelete(_id)}
          className="btn btn-sm btn-danger"
        >
          Delete
        </button>{" "}
      </td>
    </tr>
  );
};

export default ManageProductRow;
