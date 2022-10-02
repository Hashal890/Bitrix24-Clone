import { Search2Icon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { RiPencilFill } from "react-icons/ri";
import { BsFlagFill, BsFillCaretDownFill, BsBellFill } from "react-icons/bs";
import { IoCloudDownload } from "react-icons/io5";
import { BiHistory } from "react-icons/bi";
import { MdExtension } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { IoRocket } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { logoutAPI } from "../store/auth/auth.actions";
import { useNavigate } from "react-router-dom";

const TaskAndProjectsNavbar = () => {
  const timeRef = useRef(null);
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  let token = localStorage.getItem("token") || ":";
  let [id, email] = token.split(":");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    timeRef.current = setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
    }, 1000);
  }, []);

  return (
    <Flex
      p={0}
      pt={3}
      pb={3}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={{ sm: 0, md: 5, lg: 16 }}
    >
      <Flex gap={3} alignItems={"center"}>
        <IconButton
          icon={<RiPencilFill />}
          bg={"transparent"}
          color={"gray.500"}
          _hover={{ bg: "transparent", color: "gray.500" }}
        />
        <InputGroup>
          <Input
            placeholder="find people, documents, and more"
            w={"sm"}
            p={"0 35px 0 20px"}
            color={"#fff"}
            h={"34px"}
            borderRadius={"20px"}
            bg={"blackAlpha.300"}
            border={0}
          />
          <InputRightElement
            children={
              <Search2Icon
                color="whiteAlpha.900"
                mt={-1}
                mr={4}
                cursor={"pointer"}
              />
            }
          />
        </InputGroup>
        <Heading color={"#fff"} fontWeight={"light"}>
          {hours}:{minutes}
        </Heading>
        <Button
          leftIcon={<BsFlagFill />}
          bg={"transparent"}
          color={"whiteAlpha.900"}
          _hover={{ bg: "transparent", color: "whiteAlpha.900" }}
        >
          0
        </Button>
      </Flex>
      <Spacer />
      <Flex gap={3}>
        <Menu>
          <MenuButton
            as={Button}
            bg={"transparent"}
            color={"whiteAlpha.900"}
            _hover={{ bg: "transparent", color: "whiteAlpha.900" }}
            rightIcon={<BsFillCaretDownFill />}
            p={5}
          >
            <Flex alignItems={"center"} gap={3}>
              <Avatar w={8} h={8} />
              {email === "" ? "User Email-ID" : email}
            </Flex>
          </MenuButton>
          <MenuList minW={"350px"} p={3} bg={"whiteAlpha.900"}>
            <MenuItem
              display={"flex"}
              justifyContent={"space-between"}
              borderRadius={20}
              bg={"#fff"}
              boxShadow={"0 1px 3px 0 rgb(14 9 9 / 9%)"}
              mb={3}
            >
              <Flex gap={2}>
                <Avatar w={8} h={8} bg={"blue.600"} />
                <Box>
                  <Text
                    fontSize={"16px"}
                    fontWeight={"bold"}
                    color={"blackAlpha.900"}
                  >
                    {email === "" ? "User Email-ID" : email}
                  </Text>
                  <Text fontSize={"14px"} color={"blackAlpha.800"}>
                    Administrator
                  </Text>
                </Box>
              </Flex>
              <Button
                border={"1px solid blue"}
                borderRadius={20}
                bg={"transparent"}
                _hover={{ bg: "transparent", color: "blackAlpha.800" }}
                color={"blackAlpha.700"}
              >
                Profile
              </Button>
            </MenuItem>
            <MenuItem
              borderRadius={20}
              bg={"#fff"}
              boxShadow={"0 1px 3px 0 rgb(14 9 9 / 9%)"}
              mb={3}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Button
                leftIcon={<IoCloudDownload />}
                bg={"transparent"}
                color={"gray.500"}
                _hover={{ bg: "transparent", color: "gray.500" }}
                fontSize={"12px"}
                p={0}
              >
                My Bitrix24. Network Page
              </Button>
              <Button
                bg={"transparent"}
                color={"gray.500"}
                _hover={{ bg: "transparent", color: "gray.500" }}
                fontSize={"12px"}
                p={0}
                pl={2}
                pr={2}
                boxShadow={"0 1px 3px 0 rgb(14 9 9 / 9%)"}
              >
                View
              </Button>
            </MenuItem>
            <MenuItem
              borderRadius={20}
              bg={"#fff"}
              boxShadow={"0 1px 3px 0 rgb(14 9 9 / 9%)"}
              mb={3}
            >
              <Button
                leftIcon={<BiHistory color={"gray.500"} />}
                bg={"transparent"}
                color={"blackAlpha.800"}
                _hover={{ bg: "transparent", color: "blackAlpha.800" }}
                fontSize={"14px"}
                p={0}
              >
                Login history
              </Button>
            </MenuItem>
            <MenuItem
              borderRadius={20}
              bg={"#fff"}
              boxShadow={"0 1px 3px 0 rgb(14 9 9 / 9%)"}
              mb={3}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Button
                leftIcon={<MdExtension />}
                bg={"transparent"}
                _hover={{ bg: "transparent" }}
                fontSize={"14px"}
                p={0}
                color={"gray.500"}
              >
                Extensions
              </Button>
              <IoIosArrowForward />
            </MenuItem>
            <MenuItem mb={3} display={"flex"} justifyContent={"space-between"}>
              <Button
                leftIcon={<BsBellFill />}
                _hover={{ bg: "#fff" }}
                fontSize={"14px"}
                w={"45%"}
                borderRadius={20}
                bg={"#fff"}
                boxShadow={"0 1px 3px 0 rgb(14 9 9 / 9%)"}
                color={"gray.500"}
              >
                Notifications
              </Button>
              <Button
                leftIcon={<FiLogOut />}
                borderRadius={20}
                bg={"#fff"}
                boxShadow={"0 1px 3px 0 rgb(14 9 9 / 9%)"}
                _hover={{ bg: "#fff" }}
                fontSize={"14px"}
                w={"45%"}
                color={"gray.500"}
                onClick={() => {
                  dispatch(logoutAPI());
                  navigate("/");
                }}
              >
                Log out
              </Button>
            </MenuItem>
          </MenuList>
        </Menu>
        <Button
          leftIcon={<IoRocket />}
          rightIcon={<BsFillCaretDownFill />}
          bg={"#eba51c"}
          color={"whiteAlpha.900"}
          _hover={{ bg: "#eba51c", color: "whiteAlpha.900" }}
          borderRadius={20}
        >
          Upgrade
        </Button>
        <Button
          rightIcon={<BsFillCaretDownFill />}
          bg={"#14bfd5"}
          color={"whiteAlpha.900"}
          _hover={{ bg: "#14bfd5", color: "whiteAlpha.900" }}
          borderRadius={20}
        >
          Invite
        </Button>
      </Flex>
    </Flex>
  );
};

export default TaskAndProjectsNavbar;
