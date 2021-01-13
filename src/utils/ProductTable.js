import React from "react";
import { useHistory } from "react-router-dom";
import Shimmer from "../utils/Shimmer";

function ProductTable({ products, loading }) {
  const History = useHistory();

  const productdetail = (id) => {
    History.push("/product_detail/" + id);
  };

  if (loading) {
    return <Shimmer />;
  }

  if (products.length === 0) {
    return (
      <div className="container-fluid">
        <p>no data available</p>
      </div>
    );
  }
  return (
    <div className=" bg-light rounded border-success border-top border-3 overflow-hidden">
      <table className="table table-striped ">
        <thead>
          <tr className="row pl-3 pr-2">
            <th className="col-sm-2">title</th>
            <th className="col-sm-2">Category</th>
            <th className="col-sm-4">description</th>
            <th className="col-sm-2">color</th>
            <th className="col-sm-2">price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr className="row pl-3 pr-2" key={product._id}>
              <td className="col-sm-2 align-middle">
                <button
                  className="btn btn-0 text-primary"
                  onClick={() => productdetail(product._id)}
                >
                  {product.title}
                </button>
              </td>
              <td className="col-sm-2 align-middle">{product.category}</td>
              <td className="col-sm-4 align-middle"> {product.description} </td>
              <td className="col-sm-2 align-middle"> {product.color} </td>
              <td className="col-sm-2 align-middle">
                sell price :<span>{product.sell_price} </span> <br />
                discount/offer : {product.offer_price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
