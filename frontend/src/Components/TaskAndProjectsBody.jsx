import React, { useState } from "react";
import {
  Avatar,
  Button,
  Flex,
  Heading,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import TaskAndProjectsBodyUpper from "./TaskAndProjectsBodyUpper";
import { RiDeleteBinFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  deleteTodosAPI,
  getTodosAPI,
  updateTodosAPI,
} from "../store/todos/todos.actions";

const TaskAndProjectsBody = () => {
  const { loading, error, data } = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    dispatch(getTodosAPI());
  }, [toggle]);

  return (
    <VStack spacing={3}>
      <TaskAndProjectsBodyUpper />
      {loading && <Heading textAlign={"center"}>Loading...</Heading>}
      {error && <Heading textAlign={"center"}>Something went wrong...</Heading>}
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
            <Th>Created by</Th>
            <Th>Responsible person</Th>
            <Th>Status</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.map((el) => (
              <Tr key={el._id}>
                <Td>{el.title}</Td>
                <Td>{el.createdAt}</Td>
                <Td>
                  <Flex gap={2} alignItems={"center"}>
                    <Avatar h={"25px"} w={"25px"} />
                    <Text>{el.author}</Text>
                  </Flex>
                </Td>
                <Td>
                  <Flex gap={2} alignItems={"center"}>
                    <Avatar h={"25px"} w={"25px"} />
                    <Text>{el.assigne}</Text>
                  </Flex>
                </Td>
                <Td>
                  <Button
                    onClick={() => {
                      dispatch(
                        updateTodosAPI(el._id, { completed: !el.completed })
                      );
                      setToggle(!toggle);
                    }}
                    bg={"transparent"}
                    _hover={{ bg: "transparent" }}
                  >
                    {el.completed ? "Completed" : "Not Completed"}
                  </Button>
                </Td>
                <Td textAlign={"center"}>
                  <IconButton
                    color={"blue.600"}
                    _hover={{ bg: "transparent", color: "red.600" }}
                    icon={<RiDeleteBinFill />}
                    onClick={() => {
                      dispatch(deleteTodosAPI(el._id));
                      setToggle(!toggle);
                    }}
                  />
                </Td>
              </Tr>
            ))}
        </Tbody>
        {/* <Tfoot>
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
        </Tfoot> */}
      </Table>
    </VStack>
  );
};

export default TaskAndProjectsBody;
