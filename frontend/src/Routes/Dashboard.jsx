import React from "react";
import SidebarLeft from "../Components/SidebarLeft";
import SidebarRight from "../Components/SidebarRight";
import TaskAndProjectsFooter from "../Components/TaskAndProjectsFooter";
import TaskAndProjectsNavbar from "../Components/TaskAndProjectsNavbar";
import "../CSS/dashboard.css";
import DashCards from "../Components/DashCards";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-body">
        <div className="dashboard-left" style={{width:"15%"}}>
          <SidebarLeft />
        </div>
        <div className="dashboard-right" style={{width:"5%"}}>
          <SidebarRight />
        </div>
        <div className="dashboard-middle" style={{width:"80%"}}>
          <TaskAndProjectsNavbar />
          <DashCards />
          <TaskAndProjectsFooter />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
