import React from "react";
import SidebarLeft from "../Components/SidebarLeft";
import SidebarRight from "../Components/SidebarRight";
import TaskAndProjectsFooter from "../Components/TaskAndProjectsFooter";
import TaskAndProjectsNavbar from "../Components/TaskAndProjectsNavbar";
import "../CSS/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-body">
        <div className="dashboard-left">
          <SidebarLeft />
        </div>
        <div className="dashboard-right">
          <SidebarRight />
        </div>
        <div className="dashboard-middle">
          <TaskAndProjectsNavbar />
          <TaskAndProjectsFooter />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
