import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../CSS/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
        <div>
            <Navbar />
            <Sidebar />
        </div>
    </div>
  );
};

export default Dashboard;
