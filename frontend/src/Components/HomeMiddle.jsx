import { Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styles from "./HomeMiddle.module.css";

const tx = [
  "Replaces all your current SaaS solutions",
  "Free forever for unlimited users",
  "Easy to migrate your data from other systems",
  "Integrated with all your favorite services and apps",
  "Used, loved, and trusted by 10,000,000+ users worldwide",
  "100% flat fee: predictable costs, no per-user pricing",
];

const HomeMiddle = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <Flex mt="100px" p="40px">
      <Stack spacing="25px">
        <Text textAlign="left" className={styles.txhd1}>
          What makes Bitrix24
          <span className={styles.span}>better than 99%</span>
          of other solutions on the market?
        </Text>
        {tx.map((t) => (
          <Flex align="center" gap={2}>
            <AiFillCheckCircle color="#bdf300" />
            <Text className={styles.points}>{t}</Text>
          </Flex>
        ))}
        <Button
          onClick={handleClick}
          width="160px"
          my="20px"
          bg="#bdf300"
          borderRadius="20px"
        >
          START FOR FREE
        </Button>
      </Stack>
      <Image
        width="500px"
        src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/crm/features.png.webp?1663340850000"
      />
    </Flex>
  );
};

export default HomeMiddle;
