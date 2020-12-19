import React from "react";

function DisplayStats({ totalproduct }) {
  const putm = Math.ceil(Math.random() * 100);
  return (
    <div className="container row mt-2 pt-2 mb-4 ">
      <div className="col-sm">
        <div className="card-type  bg-light p-3">
          <h2 className="card-title">{totalproduct}</h2>
          <p className="card-text">Product Total</p>
        </div>
      </div>
      <div className="col-sm">
        <div className="card-type bg-light p-3">
          <h2 className="card-title">{putm}</h2>
          <p className="card-text">Product Uploaded this Month</p>
        </div>
      </div>
      <div className="col-sm">
        <div className="card-type bg-light p-3">
          <h2 className="card-title">{putm}</h2>
          <p className="card-text">Product Uploaded this Month</p>
        </div>
      </div>
      <div className="col-sm">
        <div className="card-type bg-light p-3">
          <h2 className="card-title">{putm}</h2>
          <p className="card-text">Product Uploaded this Month</p>
        </div>
      </div>
    </div>
  );
}

export default DisplayStats;
