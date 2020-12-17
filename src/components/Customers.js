import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useStateValue } from "../StateProvider";
import UserTable from "../utils/UserTable";

function Customers() {
  const [{ url, secret_key }] = useStateValue();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = Axios.get(`${url}/user/getalluser`, {
        headers: {
          Authorization: secret_key,
        },
      });
      const users = await response;
      setUsers(users.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  console.log(users);
  return (
    <div className="container overflow-auto">
      <div className="container"></div>
      <UserTable users={users} loading={loading} />
    </div>
  );
}

export default Customers;