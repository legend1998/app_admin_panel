import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="/">
            Dashboard <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link active" href="/product">
            Product
          </a>
          <a class="nav-item nav-link active" href="/Orders">
            Order
          </a>
          <a class="nav-item nav-link active" href="/customers">
            Customers
          </a>
        </div>
      </div>
    </nav>
  );
}
