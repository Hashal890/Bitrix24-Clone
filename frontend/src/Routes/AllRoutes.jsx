import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import TaskAndProjects from "./TaskAndProjects";
import Dashboard from "./Dashboard";
import SignUp from "./SignUp";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/taskandprojects" element={<TaskAndProjects />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AllRoutes;
