import React from "react";

function DetailTable({ detail }) {
  return (
    <table className="table table-striped  table-bordered">
      <thead>
        <tr className="">
          <th className="">Field</th>
          <th className="">value</th>
        </tr>
      </thead>
      <tbody>
        {detail.map((row, index) => (
          <tr key={index} className="">
            <th className="">{row.field}</th>
            <td className="">{row.value} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DetailTable;
