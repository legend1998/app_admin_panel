import React from "react";
import Shimmer from "../utils/Shimmer";

function Ordertable({ loading, orders }) {
  if (loading) {
    return <Shimmer />;
  }
  return (
    <div className="rounded border-success border-top border-3 overflow-hidden">
      <table className="table table-striped table-bordered">
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="row">
              <td className="text-primary col-sm-2 align-middle pl-5">
                {order.id}
              </td>
              <td className="col-sm-4 align-middle"> {order.title} </td>
              <td className="col-sm-6 align-middle pr-2"> {order.body} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Ordertable;
