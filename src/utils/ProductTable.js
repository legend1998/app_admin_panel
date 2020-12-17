import React from "react";

function ProductTable({ products, loading }) {
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div className="border bg-light p-2 rounded">
      <table>
        <tbody>
          {products.map((product) => (
            <tr className="row">
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
