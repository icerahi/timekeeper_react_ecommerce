import axios from "axios";
import React from "react";
import swal from "sweetalert";
import Empty from "../../../components/empty/Empty";
import { domain } from "../../../hooks/useDomain";
import useProducts from "../../../hooks/useProducts";
import ManageProductRow from "./ManageProductRow";

const ManageProducts = () => {
  const { products,setProducts } = useProducts();

  const handleProductDelete=(id)=>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`${domain}/product/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              swal("Poof! Product has been deleted successfully!", {
                icon: "success",
              });
              const remaining = products.filter(
                (product) => product._id !== id
              );
              setProducts(remaining);
            }
          })
          .catch((err) =>
            swal("Error!!", "Oh something went wrong! try again!", "error")
          );
      }
    });
  };

  if (products.length === 0) {
    return <Empty />;
  }
  return (
    <div className="container">
      <h1 className="text-center display-6">Manage Products</h1>
      <hr className="w-50 mx-auto" />
      <div className="table-responsive">
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">Product Title</th>

              <th scope="col">Image </th>
              <th scope="col">Price </th>
              <th scope="col">Action </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ManageProductRow
                key={index}
                handleProductDelete={handleProductDelete}
                product={product}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
