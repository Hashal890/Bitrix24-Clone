import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import TaskAndProjects from "./TaskAndProjects";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/taskandprojects" element={<TaskAndProjects />} />
    </Routes>
  );
};

export default AllRoutes;
