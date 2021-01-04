import React from "react";
import Shimmer from "../utils/Shimmer";
import moment from "moment";

function UserTable({ users, loading }) {
  if (loading) {
    return <Shimmer />;
  }

  console.log(users);
  return (
    <div className="bg-light rounded border-success border-top border-3 overflow-hidden">
      <table className="table table-striped">
        <thead>
          <tr className="row mb-3 pl-3">
            <th className="col">user id</th>
            <th className="col">name</th>
            <th className="col">email</th>
            <th className="col">phone</th>
            <th className="col">Date Joined</th>
            <th className="col">address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="row pl-3 ">
              <td className="text-primary col align-middle">{user.uid}</td>
              <td className="col align-middle">
                {user.fname} {user.lname}
              </td>
              <td className="col align-middle"> {user.email} </td>
              <td className="col align-middle"> {user.phone} </td>
              <td className="col align-middle">
                {moment(user.date_joined).format("YYYY-MM-DD")}
              </td>
              <td className="col align-middle">
                {user.address.length === 0 ? "no address added yet" : ""}

                {user.address.map((add) => (
                  <p>
                    {add.house},{add.street},{add.Landmark},{add.pin_code},
                    {add.district}
                  </p>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
