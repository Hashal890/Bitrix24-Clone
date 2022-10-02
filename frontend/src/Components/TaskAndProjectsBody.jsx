import React, { useState } from "react";
import {
  Alert,
  AlertIcon,
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
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  deleteTodosAPI,
  getTodosAPI,
  updateTodosAPI,
} from "../store/todos/todos.actions";
import { MdArrowDropDown } from "react-icons/md";

const TaskAndProjectsBody = () => {
  const { loading, error, data, totalData, totalPages } = useSelector(
    (store) => store.todos
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);

  useEffect(() => {
    dispatch(getTodosAPI(page, limit));
  }, [page, limit]);

  return (
    <VStack spacing={3}>
      <TaskAndProjectsBodyUpper />
      {loading && (
        <Alert
          status="info"
          colorScheme={"green"}
          color={"blackAlpha.900"}
          fontWeight={"bold"}
          borderRadius={"20px"}
        >
          <AlertIcon />
          Data is coming from backend!
        </Alert>
      )}
      {error && (
        <Alert
          status="error"
          colorScheme={"red"}
          color={"blackAlpha.900"}
          fontWeight={"bold"}
          borderRadius={"20px"}
        >
          <AlertIcon />
          There was an error processing your request!
        </Alert>
      )}
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
                    }}
                  />
                </Td>
              </Tr>
            ))}
        </Tbody>
        <Tfoot>
          <Th>Total: {totalData}</Th>
          <Th></Th>
          <Th>
            <Button
              bg={"green.300"}
              _hover={{ bg: "green.600", color: "white" }}
              onClick={() => {
                setPage(page - 1);
              }}
              disabled={page === 1}
            >
              Prev
            </Button>
          </Th>
          <Th>
            <Button
              bg={"blue.300"}
              _hover={{ bg: "blue.600", color: "white" }}
              onClick={() => {
                setPage(page + 1);
              }}
              disabled={page === totalPages || data.length === 0}
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
                }}
              >
                <option value="5">1</option>
                <option value="10">3</option>
                <option value="15">5</option>
                <option value="20">7</option>
              </Select>
            </Flex>
          </Th>
        </Tfoot>
      </Table>
    </VStack>
  );
};

export default TaskAndProjectsBody;
