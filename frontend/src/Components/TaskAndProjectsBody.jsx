import React from "react";
import {
  Avatar,
  Button,
  Flex,
  IconButton,
  Select,
  Table,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import TaskAndProjectsBodyUpper from "./TaskAndProjectsBodyUpper";
import { RiDeleteBinFill } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";

const TaskAndProjectsBody = () => {
  return (
    <VStack spacing={3}>
      <TaskAndProjectsBodyUpper />
      <Table
        variant="striped"
        color="#535c69"
        bg={"whiteAlpha.900"}
        borderRadius={"20px"}
      >
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Active</Th>
            <Th>Deadline</Th>
            <Th>Created by</Th>
            <Th>Responsible person</Th>
            <Th>Status</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Task One</Td>
            <Td>September 30, 5:33 pm</Td>
            <Td>October 1, 5:33 pm</Td>
            <Td>
              <Flex gap={2} alignItems={"center"}>
                <Avatar h={"25px"} w={"25px"} />
                <Text>User One</Text>
              </Flex>
            </Td>
            <Td>
              <Flex gap={2} alignItems={"center"}>
                <Avatar h={"25px"} w={"25px"} />
                <Text>User Two</Text>
              </Flex>
            </Td>
            <Td>Not Completed</Td>
            <Td textAlign={"center"}>
              <IconButton
                color={"blue.600"}
                _hover={{ bg: "transparent", color: "red.600" }}
                icon={<RiDeleteBinFill />}
              />
            </Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Th>Total</Th>
          <Th></Th>
          <Th></Th>
          <Th>
            <Flex gap={2}>
              <Button bg={"green.300"} _hover={{ bg: "green.300" }}>
                Prev
              </Button>
              <Button bg={"blue.300"} _hover={{ bg: "blue.300" }}>
                Next
              </Button>
            </Flex>
          </Th>
          <Th></Th>
          <Th></Th>
          <Th>
            <Flex gap={2} alignItems={"center"}>
              <Text>Pages</Text>
              <Select icon={<MdArrowDropDown />} cursor={"pointer"}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </Select>
            </Flex>
          </Th>
        </Tfoot>
      </Table>
    </VStack>
  );
};

export default TaskAndProjectsBody;
