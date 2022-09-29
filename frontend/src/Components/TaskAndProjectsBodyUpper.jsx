import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
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
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
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
} from "react-icons/ai";
import { GiElectric } from "react-icons/gi";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiArrowFromLeft } from "react-icons/bi";

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
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
            <DrawerBody></DrawerBody>
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
              <DrawerCloseButton />
              <DrawerHeader></DrawerHeader>
              <DrawerBody></DrawerBody>
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
