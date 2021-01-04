import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

export default function Header() {
  const [{ user }] = useStateValue();
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
    </nav>
  );
}
