import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { BsCloudy } from "react-icons/bs";
import { GiGlobe } from "react-icons/gi";
import { GoPrimitiveDot } from "react-icons/go";
import { useState } from "react";
import styles from "../CSS/HomeTop.module.css";
import { useNavigate } from "react-router-dom";

const cntnt = [
  {
    id: 0,
    heading: "Collaboration",
    img: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/workspace.1366w.png.webp?1664359511000",
    points: [
      "Chats & video calls",
      "Online meetings",
      "Feed",
      "Calendar",
      "Online documents",
      "Drive",
      "Webmail",
      "Workgroups",
    ],
  },
  {
    id: 1,
    heading: "CRM",
    img: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/crm.1366w.png.webp?1664359513000",
    points: [
      "Leads, Deals, Contacts, Companies",
      "Quotes, Invoices",
      "Online payments",
      "Sales automation",
      "Rules and triggers",
      "Contact center",
      "Marketing",
      "Sales Intelligence",
    ],
  },
  {
    id: 2,
    heading: "Tasks & Projects",
    img: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/tasks.1366w.png.webp?1664359514000",
    points: [
      "Tasks",
      "Projects",
      "Gantt chart",
      "Kanban board",
      "Time tracking",
      "Task and project templates",
      "Task automation",
      "CRM integration",
    ],
  },
  {
    id: 3,
    heading: "Sites & Stores",
    img: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/sites.1366w.png.webp?1664359516000",
    points: [
      "Free website builder",
      "Online store",
      "Free templates",
      "Mobile & SEO friendly",
      "Web forms",
      "Web widgets",
      "CRM integration",
      "Google Analytics integration",
    ],
  },
  {
    id: 4,
    heading: "HR & Automation",
    img: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/hr.1366w.png.webp?1664359517000",
    points: [
      "Employee directory",
      "Worktime tracking & reports",
      "Absence management",
      "Announcements & appreciations",
      "Workflow automation",
      "Requests & approvals",
      "No-code RPA",
      "Knowledge base",
    ],
  },
];

const HomeTop = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    let localCounter = 0;
    setInterval(() => {
      if (localCounter === 4) {
        setIndex(0);
      } else {
        localCounter++;
        setIndex(localCounter);
      }
    }, 3000);
  }, []);

  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <Box mt="100px">
      <Text mb="20px" className={styles.txhd}>
        Bitrix24. Your ultimate workspace.
      </Text>
      <Flex mb="20px" justify="space-around">
        {cntnt.map((t) => (
          <Text
            key={t.id}
            id={t.id}
            onClick={() => setIndex(t.id)}
            className={styles.txhd1}
          >
            {t.heading}
          </Text>
        ))}
      </Flex>
      <Divider mb="20px" color="skyblue" />
      <Flex mb="20px" justify="space-around">
        <Stack textAlign="left">
          {cntnt[index].points.map((p) => (
            <Flex align="center">
              <GoPrimitiveDot color="#89dcf6 " />
              <Text className={styles.points}>{p}</Text>
            </Flex>
          ))}
          <Button onClick={handleClick} bg="#bdf300" borderRadius="20px">
            START FOR FREE
          </Button>
        </Stack>
        <Image width="500px" src={cntnt[index].img} />
      </Flex>

      <Flex gap={5} p="40px" align="center" bg="#3cc8f4">
        <Flex p={3} borderRadius="20px" bg="#5ac8f6" align="center" gap={2}>
          <BsCloudy size="40px" color="#ffffff" />
          <Text className={styles.skycloud1}>10,000,000</Text>
        </Flex>
        <Text className={styles.skycloud2}>
          organizations have chosen Bitrix24
        </Text>
        <Flex align="center">
          <GiGlobe size="40px" color="#ffffff" />
          <Text className={styles.skycloud2}>available in</Text>
          <Box
            borderRadius="50px"
            backgroundColor="ffffff"
            p={3}
            className={styles.skycloud2}
          >
            {" "}
            18{" "}
          </Box>

          <Text className={styles.skycloud2}>languages</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomeTop;
