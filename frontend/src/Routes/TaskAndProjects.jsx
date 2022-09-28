import { Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import TaskAndProjectsFooter from "../Components/TaskAndProjectsFooter";
import TaskAndProjectsNavbar from "../Components/TaskAndProjectsNavbar";

const TaskAndProjects = () => {
  return (
    <Box bg={"linear-gradient(90deg, #efd5ff 0%, #515ada 100%)"} h={"100vh"}>
      <Flex w={"80%"} m={"auto"} flexDir={"column"} h={"100%"}>
        <TaskAndProjectsNavbar />
        <Spacer />
        <TaskAndProjectsFooter />
      </Flex>
    </Box>
  );
};

export default TaskAndProjects;
