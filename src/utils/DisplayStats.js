import React from "react";

function DisplayStats({ totalproduct }) {
  const putm = Math.ceil(Math.random() * 100);
  return (
    <div className="container row p-5">
      <div className="col-3">
        <div className="card p-2  bg-light">
          <h2 className="card-title">{totalproduct}</h2>
          <p className="card-text">Product Total</p>
        </div>
      </div>
      <div className="col-3">
        <div className="card p-2 bg-light">
          <h2 className="card-title">{putm}</h2>
          <p className="card-text">Product Uploaded this Month</p>
        </div>
      </div>
    </div>
  );
}

export default DisplayStats;
