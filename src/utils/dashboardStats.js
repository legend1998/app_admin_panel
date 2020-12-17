import React from "react";
import ShoppingBasketRoundedIcon from "@material-ui/icons/ShoppingBasketRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import AccountBalanceWalletRoundedIcon from "@material-ui/icons/AccountBalanceWalletRounded";

function DashboardStats({ sales, newmember, saleamount }) {
  return (
    <div className="container-fluid row p-5 border-bottom bg-light">
      <div className="col-sm d-flex flex-row flex-nowrap">
        <div className="">
          <ShoppingBasketRoundedIcon
            style={{
              fontSize: 100,
              color: "white",
              background: "seagreen",
              padding: 10,
            }}
          />
        </div>
        <div className="ml-3">
          <h2>{sales}</h2>
          <p>Product sale This month</p>
        </div>
      </div>
      <div className="col-sm d-flex -flex-row flex-nowrap ">
        <div className="">
          <AccountBalanceWalletRoundedIcon
            style={{
              fontSize: 100,
              color: "white",
              background: "darkred",
              padding: 10,
            }}
          />
        </div>
        <div className="ml-3">
          <h2>{saleamount}</h2>
          <p>Amount sale This month</p>
        </div>
      </div>
      <div className="col-sm d-flex -flex-row flex-nowrap ">
        <div className="">
          <PeopleRoundedIcon
            style={{
              fontSize: 100,
              color: "white",
              background: "darkorange",
              padding: 10,
            }}
          />
        </div>
        <div className="ml-3">
          <h2>{newmember}</h2>
          <p>New member This month</p>
        </div>
      </div>
      <div className="col-sm d-flex -flex-row flex-nowrap ">
        <div className="">
          <PeopleRoundedIcon
            style={{
              fontSize: 100,
              color: "white",
              background: "darkblue",
              padding: 10,
            }}
          />
        </div>
        <div className="ml-3">
          <h2>{newmember}</h2>
          <p>New member This month</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardStats;
