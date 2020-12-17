import React from "react";

function ProductTable({ products, loading }) {
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div className=" bg-light rounded border-success border-top border-3 overflow-hidden">
      <table className="table table-striped ">
        <tbody>
          {products.map((product) => (
            <tr className="row pl-3 pr-2">
              <td className="text-primary col-sm-2 align-middle">
                {product.id}
              </td>
              <td className="col-sm-4 align-middle"> {product.title} </td>
              <td className="col-sm-6 align-middle"> {product.body} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
