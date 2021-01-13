import Axios from "axios";
import React, { useState } from "react";
import logo from "../assets/logonew.png";
import { useStateValue } from "../StateProvider";
import { CircularProgress } from "@material-ui/core";
function LoginPage() {
  const [{ url, secret_key }, dispatch] = useStateValue();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const login = async () => {
    const loading = document.getElementsByClassName("loading")[0];

    if (!email.endsWith("@gmail.com") || password.length < 5) return;
    loading.style.zIndex = 1;

    const response = await Axios.post(
      `${url}/user/login`,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          Authorization: secret_key,
        },
      }
    );

    if (response.status === 200) {
      var user = response.data;

      if (user.role === "admin") {
        dispatch({
          type: "SET_USER",
          user: response.data,
        });
        localStorage.setItem("user", response.data);
      } else {
        alert("authorization revoked! you are not admin");
      }
    } else {
      loading.style.zIndex = -1;
      alert(response);
    }
  };

  return (
    <div
      className="container-fluid d-flex flex-column loginpage justify-content-center align-items-center bg-primary"
      style={{ height: 100 + "vh" }}
    >
      <div className="loading" style={{ minWidth: 360, minHeight: 400 }}>
        <CircularProgress />
      </div>
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
            placeholder="email"
            onChange={(e) => setemail(e.target.value)}
            className="form-control rounded-pill bg-light"
          />
        </div>
        <div className="d-flex flex-column align-items-center mt-3">
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
            className="form-control rounded-pill bg-light"
          />
        </div>
        <div className="d-flex flex-column align-items-end mt-3">
          <button
            className="btn btn-primary rounded-pill"
            style={{ width: 150 }}
            type="submit"
            onClick={login}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
