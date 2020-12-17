import React from "react";
import DashboardStats from "../utils/dashboardStats";

function Dashboard() {
  return (
    <div>
      <DashboardStats newmember={12} saleamount={20} sales={234} />
    </div>
  );
}

export default Dashboard;
