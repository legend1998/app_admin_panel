import React from "react";
import logo from "../assets/logonew.png";

function LoginPage() {
  return (
    <div
      className="container-fluid d-flex flex-column loginpage justify-content-center align-items-center bg-primary"
      style={{ height: 100 + "vh" }}
    >
      <div
        className="shadow-lg rounded-lg p-4 center bg-white"
        style={{ minWidth: 360, minHeight: 400 }}
      >
        <div className="d-flex flex-column align-items-center">
          <img src={logo} style={{ width: 100 }} alt="logo" />
        </div>
        <div className="d-flex flex-column align-items-center mt-3">
          <input
            type="text"
            placeholder="username"
            className="form-control rounded-pill bg-light"
          />
        </div>
        <div className="d-flex flex-column align-items-center mt-3">
          <input
            type="text"
            placeholder="password"
            className="form-control rounded-pill bg-light"
          />
        </div>
        <div className="d-flex flex-column align-items-end mt-3">
          <button
            className="btn btn-primary rounded-pill"
            style={{ width: 150 }}
            type="submit"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
