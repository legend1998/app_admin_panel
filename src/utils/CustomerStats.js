import React from "react";

function CustomerStats({ users }) {
  return (
    <div className="container row mt-2 pt-2 mb-4 ">
      <div className="col-sm">
        <div className="card-type  bg-light p-3">
          <h2 className="card-title">{users.length}</h2>
          <p className="card-text">Total Customers</p>
        </div>
      </div>
      <div className="col-sm">
        <div className="card-type bg-light p-3">
          <h2 className="card-title">{users.length}</h2>
          <p className="card-text">Total sellers</p>
        </div>
      </div>
      <div className="col-sm">
        <div className="card-type bg-light p-3">
          <h2 className="card-title">{users.length}</h2>
          <p className="card-text">new Customer this month</p>
        </div>
      </div>
    </div>
  );
}

export default CustomerStats;
