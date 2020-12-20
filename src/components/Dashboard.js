import React, { useState, useEffect } from "react";
import DashboardStats from "../utils/dashboardStats";
import Axios from "axios";
import Ordertable from "../utils/Ordertable";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);
  const [currentPage, setcurrentPage] = useState(3);
  const [productPerPage] = useState(8);

  const indexOfLastPage = currentPage * productPerPage;
  const indexOfFirstPage = indexOfLastPage - productPerPage;
  const currentProducts = products.slice(indexOfFirstPage, indexOfLastPage);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
      setProducts(res.data);

      setloading(false);
    };
    fetchProduct();
  }, []);
  return (
    <div>
      <DashboardStats newmember={12} saleamount={20} sales={234} />
      <div className="container-fluid row bg-light  border-top border-info rounded border-3">
        <div className="col-sm">
          <h4 className="text-muted mt-3">Recent Orders</h4>
          <Ordertable orders={currentProducts} loading={loading} />
        </div>
        <div className="col-sm">
          <h4 className="text text-muted mt-3 ">Recent Products</h4>
          <Ordertable orders={currentProducts} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
