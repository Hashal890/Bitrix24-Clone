import {
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Spacer,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import {
  AiFillStar,
  AiFillCaretDown,
  AiFillSetting,
  AiFillLock,
  AiOutlineStar,
} from "react-icons/ai";
import { GiElectric } from "react-icons/gi";
import { HiDotsHorizontal, HiOutlineCloud } from "react-icons/hi";
import { BiArrowFromLeft } from "react-icons/bi";

const initTask = {
  title: "",
  description: "",
  createdAt: "",
  completed: false,
  assigne: "",
  author: "",
};

const TaskAndProjectsBodyUpper = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: newTaskIsOpen,
    onOpen: newTaskOnOpen,
    onClose: newTaskOnClose,
  } = useDisclosure();
  const {
    isOpen: automationIsOpen,
    onOpen: automationOnOpen,
    onClose: automationOnClose,
  } = useDisclosure();
  const [newTask, setNewTask] = useState(initTask);

  const addTaskHandleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
    console.log(newTask);
  };

  return (
    <VStack w={"100%"} m={"auto"}>
      <Flex
        gap={3}
        bg={"rgba(255, 255, 255, 0.96)"}
        w={"100%"}
        alignItems={"center"}
        p={3}
        borderRadius={10}
      >
        <Button
          rightIcon={<MdKeyboardArrowRight />}
          bg={"transparent"}
          _hover={{ bg: "transparent", color: "#1058d0" }}
          color={"#1058d0"}
          borderRadius={0}
          borderRight={"1px solid black"}
        >
          Tasks
        </Button>
        <Button
          bg={"transparent"}
          color={"#545c6a"}
          _hover={{ bg: "transparent", color: "#545c6a" }}
        >
          Projects
        </Button>
        <Button
          bg={"transparent"}
          color={"#545c6a"}
          _hover={{ bg: "transparent", color: "#545c6a" }}
        >
          Scrum
        </Button>
        <Button
          bg={"transparent"}
          color={"#545c6a"}
          _hover={{ bg: "transparent", color: "#545c6a" }}
        >
          Efficiency
        </Button>
        <Menu isOpen={isOpen}>
          <MenuButton
            variant="ghost"
            borderRadius={5}
            _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
            aria-label="Courses"
            fontWeight="normal"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
          >
            <Button
              rightIcon={
                isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
              }
              bg={"transparent"}
              color={"#545c6a"}
              _hover={{ bg: "transparent", color: "#545c6a" }}
            >
              More
            </Button>
          </MenuButton>
          <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
            <MenuItem>
              <Button
                rightIcon={<BiArrowFromLeft />}
                color={"#b1b6bc"}
                fontWeight={"bold"}
                fontSize={"10px"}
                textAlign={"center"}
                bg={"transparent"}
                _hover={{ bg: "transparent", color: "#b1b6bc" }}
                p={0}
                m={0}
              >
                SETTINGS
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                leftIcon={<AiFillSetting color={"blue"} />}
                bg={"transparent"}
                color={"#3b434f"}
                _hover={{ bg: "transparent", color: "#3b434f" }}
                p={0}
                m={0}
              >
                Configure Menu
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                bg={"transparent"}
                color={"#3b434f"}
                _hover={{ bg: "transparent", color: "#3b434f" }}
                p={0}
                m={0}
              >
                Reset Menu
              </Button>
            </MenuItem>
            <Divider />
            <MenuItem>
              <Button
                rightIcon={<BiArrowFromLeft />}
                color={"#b1b6bc"}
                fontWeight={"bold"}
                fontSize={"10px"}
                textAlign={"center"}
                bg={"transparent"}
                _hover={{ bg: "transparent", color: "#b1b6bc" }}
                p={0}
                m={0}
              >
                HIDDEN
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                bg={"transparent"}
                color={"#3b434f"}
                _hover={{ bg: "transparent", color: "#3b434f" }}
                p={0}
                m={0}
              >
                Involvements
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                bg={"transparent"}
                color={"#3b434f"}
                _hover={{ bg: "transparent", color: "#3b434f" }}
                p={0}
                m={0}
              >
                Reports
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                bg={"transparent"}
                color={"#3b434f"}
                _hover={{ bg: "transparent", color: "#3b434f" }}
                p={0}
                m={0}
              >
                Templates
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                bg={"transparent"}
                color={"#3b434f"}
                _hover={{ bg: "transparent", color: "#3b434f" }}
                p={0}
                m={0}
              >
                Recycle Bin
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                leftIcon={<AiFillLock color={"blue"} />}
                bg={"transparent"}
                color={"#3b434f"}
                _hover={{ bg: "transparent", color: "#3b434f" }}
                p={0}
                m={0}
              >
                Access permissions
              </Button>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Flex alignItems={"center"} w={"100%"} gap={3}>
        <Button
          rightIcon={<AiFillStar />}
          bg={"transparent"}
          color={"#fff"}
          _hover={{ bg: "transparent", color: "#fff" }}
          fontSize={"26px"}
          fontWeight={"light"}
        >
          My tasks
        </Button>
        <Button
          rightIcon={<AiFillCaretDown />}
          bg={"#bbed21"}
          color={"#535c69"}
          _hover={{ bg: "#bbed21", color: "#535c69" }}
          pl={5}
          pr={5}
          onClick={newTaskOnOpen}
        >
          <Text borderRight={"1px solid #535c69"} pr={2}>
            NEW TASK
          </Text>
        </Button>
        <Drawer onClose={newTaskOnClose} isOpen={newTaskIsOpen} size={"xl"}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton
              bgColor={"red.500"}
              _hover={{ bgColor: "green.400" }}
              mt={2.5}
              border={"2px solid black"}
              p={1}
            />
            <DrawerHeader>
              <Flex alignItems={"start"} pr={8}>
                <Heading fontSize={"26px"} fontWeight={"light"} color={"#333"}>
                  New task
                </Heading>
                <Spacer />
                <Flex alignItems={"center"} gap={3}>
                  <IconButton
                    bg={"transparent"}
                    color={"#535b69"}
                    _hover={{
                      bg: "transparent",
                      color: "#535b69",
                    }}
                    icon={<AiFillSetting />}
                    border={"1px solid #c6cdc3"}
                  />
                  <Button
                    rightIcon={<MdKeyboardArrowDown />}
                    bg={"transparent"}
                    color={"#535b69"}
                    _hover={{ bg: "transparent", color: "#535b69" }}
                    border={"1px solid #c6cdc3"}
                    textTransform={"uppercase"}
                  >
                    Task templates
                  </Button>
                </Flex>
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              <Table variant="simple">
                <Tbody>
                  <Tr>
                    <Td>
                      <Text>Title:-</Text>
                    </Td>
                    <Td>
                      <Input
                        isInvalid
                        errorBorderColor="crimson"
                        placeholder="Add title"
                        w={"lg"}
                        name={"title"}
                        onChange={addTaskHandleChange}
                      />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Text>Description:-</Text>
                    </Td>
                    <Td>
                      <Input
                        isInvalid
                        errorBorderColor="crimson"
                        placeholder="Add description"
                        w={"lg"}
                        name={"description"}
                        onChange={addTaskHandleChange}
                      />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Text>Due date:-</Text>
                    </Td>
                    <Td>
                      <Input
                        isInvalid
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local"
                        w={"lg"}
                        name={"createdAt"}
                        onChange={addTaskHandleChange}
                      />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Text>Assign to:-</Text>
                    </Td>
                    <Td>
                      <Input
                        isInvalid
                        placeholder="Assign task to"
                        size="md"
                        w={"lg"}
                        name={"assigne"}
                        onChange={addTaskHandleChange}
                      />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Text>Author of task:-</Text>
                    </Td>
                    <Td>
                      <Input
                        isInvalid
                        placeholder="Author of this task is"
                        size="md"
                        w={"lg"}
                        name={"author"}
                        onChange={addTaskHandleChange}
                      />
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </DrawerBody>
            <DrawerFooter>
              <Flex
                boxShadow={"0 -2px 4px 0 #c6c9cb"}
                overflow={"hidden"}
                position={"fixed"}
                left={"0"}
                right={"0"}
                bottom={"0"}
                zIndex={"99"}
                p={"15px"}
                bg={"#fff"}
                textAlign={"left"}
                color={"#535b69"}
                gap={3}
              >
                <Button bg={"#bbed21"} _hover={{ bg: "#bbed21" }}>
                  ADD TASK
                </Button>
                <Button
                  bg={"transparent"}
                  _hover={{ bg: "#cfd4d8" }}
                  border={"1px solid #c6cdc3"}
                >
                  ADD TASK AND CREATE ANOTHER ONE
                </Button>
                <Button
                  bg={"transparent"}
                  _hover={{ bg: "transparent" }}
                  onClick={newTaskOnClose}
                >
                  CANCEL
                </Button>
                <Spacer />
                <Checkbox value="">Save as template</Checkbox>
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Input
          placeholder="Search"
          color={"#fff"}
          h={"34px"}
          borderRadius={"5px"}
          bg={"blackAlpha.300"}
          w={"65%"}
          p={5}
        />
        <Popover>
          <PopoverTrigger>
            <IconButton
              bg={"rgba(255,255,255,.15)"}
              color={"whiteAlpha.900"}
              _hover={{ bg: "rgba(255,255,255,.3)", color: "whiteAlpha.900" }}
              icon={<AiFillSetting />}
            />
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <VStack gap={3}>
                  <Button
                    bg={"transparent"}
                    _hover={{ bg: "transparent", color: "#525c68" }}
                    color={"#525c68"}
                  >
                    Group subtasks
                  </Button>
                  <Button
                    bg={"transparent"}
                    _hover={{ bg: "transparent", color: "#525c68" }}
                    color={"#525c68"}
                  >
                    Group by projects
                  </Button>
                  <Button
                    rightIcon={<MdKeyboardArrowRight />}
                    bg={"transparent"}
                    _hover={{ bg: "transparent", color: "#525c68" }}
                    color={"#525c68"}
                  >
                    Sort
                  </Button>
                  <Button
                    rightIcon={<MdKeyboardArrowRight />}
                    bg={"transparent"}
                    _hover={{ bg: "transparent", color: "#525c68" }}
                    color={"#525c68"}
                  >
                    Import list
                  </Button>
                  <Button
                    rightIcon={<MdKeyboardArrowRight />}
                    bg={"transparent"}
                    _hover={{ bg: "transparent", color: "#525c68" }}
                    color={"#525c68"}
                  >
                    Export list
                  </Button>
                  <Button
                    rightIcon={<MdKeyboardArrowRight />}
                    bg={"transparent"}
                    _hover={{ bg: "transparent", color: "#525c68" }}
                    color={"#525c68"}
                  >
                    Synchronize list
                  </Button>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
        <IconButton
          bg={"rgba(255,255,255,.15)"}
          color={"whiteAlpha.900"}
          _hover={{ bg: "rgba(255,255,255,.3)", color: "whiteAlpha.900" }}
          icon={<GiElectric />}
        />
      </Flex>
      <Divider />
      <Flex w={"100%"} alignItems={"center"}>
        <Flex gap={3}>
          <Flex
            alignItems={"center"}
            borderRadius={"20px"}
            gap={5}
            bg={"rgba(255,255,255,.15)"}
            p={2}
            pl={4}
            pr={4}
          >
            <Text>List</Text>
            <Text>Deadline</Text>
            <Text>Planner</Text>
            <Text>Caleder</Text>
            <Text>Gantt</Text>
          </Flex>
          <Flex
            alignItems={"center"}
            borderRadius={"20px"}
            gap={5}
            bg={"rgba(255,255,255,.15)"}
            p={2}
            pl={4}
            pr={4}
          >
            <Text>My items:</Text>
            <Text>Overdue</Text>
            <Text borderRight={"1px"} pr={3}>
              Comments
            </Text>
            <Text>Mark all as read</Text>
          </Flex>
        </Flex>
        <Spacer />
        <Flex alignItems={"center"} gap={2}>
          <Button
            leftIcon={<AiFillLock />}
            bg={"rgba(255,255,255,.15)"}
            color={"#fff"}
            _hover={{ bg: "rgba(255,255,255,.3)", color: "#fff" }}
            borderRadius={"20px"}
            fontSize={"14px"}
            onClick={automationOnOpen}
          >
            Automation rules
          </Button>
          <Drawer
            onClose={automationOnClose}
            isOpen={automationIsOpen}
            size={"lg"}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton
                bgColor={"red.500"}
                _hover={{ bgColor: "green.400" }}
                mr={3}
              />
              <DrawerBody p={0}>
                <Box
                  bgImg={
                    "https://www.bitrix24.com/upload/landing/379/8w3jidxrpklhixw303lkn5dwrhytrcsq.png"
                  }
                  h={"50%"}
                  color={"whiteAlpha.900"}
                  mb={"2rem"}
                >
                  <Flex
                    flexDir={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    textAlign={"center"}
                    p={2}
                  >
                    <Heading
                      fontSize={"2.85714rem"}
                      lineHeight={1}
                      mb={"1.42857rem"}
                      pr={3}
                    >
                      Task automation (rules and triggers)
                    </Heading>
                    <Text
                      fontSize={"1.14286rem"}
                      mb={"2.5rem"}
                      cursor={"pointer"}
                      pl={1}
                      pr={1}
                    >
                      You've already created 100 tasks in Bitrix24, which is a
                      great start! If you'd like to keep using rules and
                      triggers for your tasks, please upgrade to a higher-tier
                      plan.
                    </Text>
                    <Button
                      bgColor={"#bcee1b"}
                      color={"blackAlpha.900"}
                      fontWeight={"bold"}
                      _hover={{ bgColor: "#bcee1b" }}
                      borderRadius={"25px"}
                      p={"0.57143rem 1.42857rem"}
                      pl={"4rem"}
                      pr={"4rem"}
                      mb={"1.07143rem"}
                    >
                      UPGRADE
                    </Button>
                    <Button
                      bgColor={"#4ccff7"}
                      color={"#ffffff"}
                      fontWeight={"bold"}
                      _hover={{ bgColor: "#4ccff7" }}
                      borderWidth={"1px"}
                      borderRadius={"25px"}
                      pl={"2.5rem"}
                      pr={"2.5rem"}
                      textTransform={"uppercase"}
                    >
                      Try 15 days for free
                    </Button>
                  </Flex>
                </Box>
                <Box textAlign={"center"}>
                  <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={1}
                    mb={"1.14286rem"}
                  >
                    <AiOutlineStar color={"#6ab8ee"} fontSize={"0.57143rem"} />
                    <AiOutlineStar color={"#6ab8ee"} fontSize={"0.78571rem "} />
                    <AiOutlineStar color={"#6ab8ee"} fontSize={"1rem"} />
                    <AiOutlineStar color={"#6ab8ee"} fontSize={"0.78571rem "} />
                    <AiOutlineStar color={"#6ab8ee"} fontSize={"0.57143rem"} />
                  </Flex>
                  <Box
                    maxW={"800px"}
                    pl={"15px"}
                    pr={"15px"}
                    mr={"auto"}
                    ml={"auto"}
                    pb={"0.07143rem"}
                    color={"#999"}
                  >
                    <Text fontSize={"1.14286rem"} fontWeight={"700"} mt={2}>
                      What's so great about task automation?
                    </Text>
                    <Text mt={5}>
                      Task automation in Bitrix24 allows you to program the
                      system to perform certain actions automatically (e.g.,
                      send a notification or email to the responsible person
                      when a task is overdue, change the responsible person,
                      change task status, and more).
                    </Text>
                  </Box>
                  <Box pt={"1.78571rem"} textAlign={"center"} mb={"4.14286rem"}>
                    <Image
                      src={
                        "https://www.bitrix24.com/images/content_en/sliders/limit_tasks_robots/rule.jpg"
                      }
                      alt={"Sample image"}
                      maxW={"540px"}
                      m={"auto"}
                      mb={"2rem"}
                    />
                    <IconButton
                      bg={"rgba(255,255,255,.15)"}
                      color={"rgba(106, 184, 238, 0.8)"}
                      _hover={{
                        bg: "rgba(255,255,255,.3)",
                        color: "rgba(106, 184, 238, 0.8)",
                      }}
                      icon={<HiOutlineCloud />}
                      borderRadius={"20px"}
                      fontSize={"2.5rem"}
                      mb={"1.57143rem"}
                    />
                    <Text fontSize={"1.14286rem"} pr={"45px"} pl={"45px"}>
                      As a result, you can focus on the actual work without
                      having to worry about the little things. Using task
                      automation also helps you to optimize your workflows and
                      complete projects faster.
                    </Text>
                  </Box>
                  <Button
                    bgColor={"#bcee1b"}
                    color={"blackAlpha.900"}
                    fontWeight={"bold"}
                    _hover={{ bgColor: "#bcee1b" }}
                    borderRadius={"25px"}
                    p={"0.57143rem 1.42857rem"}
                    pl={"4rem"}
                    pr={"4rem"}
                    mb={"1.07143rem"}
                  >
                    UPGRADE
                  </Button>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <IconButton
            bg={"rgba(255,255,255,.15)"}
            color={"whiteAlpha.900"}
            _hover={{ bg: "rgba(255,255,255,.3)", color: "whiteAlpha.900" }}
            icon={<HiDotsHorizontal />}
            borderRadius={"20px"}
            fontSize={"22px"}
          />
        </Flex>
      </Flex>
    </VStack>
  );
};

export default TaskAndProjectsBodyUpper;
