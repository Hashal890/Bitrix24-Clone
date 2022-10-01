import React, { useState } from "react";
import {
  Avatar,
  Button,
  Flex,
  Heading,
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
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  deleteTodosAPI,
  getTodosAPI,
  updateTodosAPI,
} from "../store/todos/todos.actions";
import { MdArrowDropDown } from "react-icons/md";

const TaskAndProjectsBody = () => {
  const { loading, error, data, total } = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);

  useEffect(() => {
    dispatch(getTodosAPI(page, limit));
  }, [toggle]);

  console.log(page, limit);

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
        <Tfoot>
          <Th>Total: {total}</Th>
          <Th></Th>
          <Th>
            <Button
              bg={"green.300"}
              _hover={{ bg: "green.300" }}
              onClick={() => {
                setPage(page - 1);
                setToggle(!toggle);
              }}
              disabled={page === 1}
            >
              Prev
            </Button>
          </Th>
          <Th>
            <Button
              bg={"blue.300"}
              _hover={{ bg: "blue.300" }}
              onClick={() => {
                setPage(page + 1);
                setToggle(!toggle);
              }}
              disabled={page === Math.ceil(total / page)}
            >
              Next
            </Button>
          </Th>
          <Th></Th>
          <Th>
            <Flex gap={2} alignItems={"center"}>
              <Text>Pages</Text>
              <Select
                icon={<MdArrowDropDown />}
                cursor={"pointer"}
                onChange={(e) => {
                  setLimit(e.target.value);
                  setToggle(!toggle);
                }}
              >
                <option value="5">2</option>
                <option value="10">5</option>
                <option value="15">10</option>
                <option value="20">15</option>
              </Select>
            </Flex>
          </Th>
        </Tfoot>
      </Table>
    </VStack>
  );
};

export default TaskAndProjectsBody;
