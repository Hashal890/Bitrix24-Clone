import React from "react";
import { VStack } from "@chakra-ui/react";
import TaskAndProjectsBodyUpper from "./TaskAndProjectsBodyUpper";

const TaskAndProjectsBody = () => {
  return (
    <VStack spacing={3}>
      <TaskAndProjectsBodyUpper />
    </VStack>
  );
};

export default TaskAndProjectsBody;
