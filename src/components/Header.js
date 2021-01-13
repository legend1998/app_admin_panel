import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

export default function Header() {
  const [{ user }, dispatch] = useStateValue();

  const logout = () => {
    dispatch({
      type: "SET_USER",
      user: null,
    });
    localStorage.clear();
  };

  return (
    <nav className=" navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link active">
            Dashboard
          </Link>
          <Link to="/products" className="nav-item nav-link active">
            Product
          </Link>
          <Link to="/orders" className="nav-item nav-link active">
            Orders
          </Link>
          <Link to="/customers" className="nav-item nav-link active">
            Customers
          </Link>
        </div>
      </div>
      <div className="navbar-nav mr-auto text-light  ">
        <button className="btn text-light" onClick={logout}>
          {user.fname}@admin
        </button>
      </div>
    </nav>
  );
}
