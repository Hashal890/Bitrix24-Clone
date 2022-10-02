import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";
import styles from "../CSS/HomeBottom.module.css";

const cnyatr = [
  "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_forbes.png.webp?1664359518000",
  "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_pcmag.png.webp?1664359518000",
  "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_pcworld.png.webp?1664359518000",
  "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_techradar.png.webp?1664359518000",
  "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_zdnet.png.webp?1664359518000",
];

const stl = [
  "Increased service performance and speed",
  "Hosted on your own server",
  "Enhanced security settings",
  "Fully customizable: fonts, colors, menus, texts, source code, etc.",
  "Easily scalable",
  "100+ third-party integrations",
];

const HomeBottom = () => {
  return (
    <Box>
      <Box my="30px">
        <Text className={styles.txhd}>Bitrix24 in the Press</Text>
        <Flex justify="space-around">
          {cnyatr.map((c) => (
            <Image src={c} alt="cmpny" />
          ))}
        </Flex>
      </Box>
      <Flex align="center" p="40px" bg="#f8f8f8">
        <Image
          width="500px"
          src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/section_on_premise.jpg.webp?1663227423000"
        />
        <Stack spacing="25px">
          <Text className={styles.txhd1}>Bitrix24 On-Premise Edition</Text>
          {stl.map((s) => (
            <Flex align="center" gap={2}>
              <AiFillCheckCircle color="#61d2f6" />
              <Text className={styles.points}>{s}</Text>
            </Flex>
          ))}
          <Button
            borderRadius="20px"
            width="160px"
            color="#61d2f6"
            border="1px solid #61d2f6"
            variant="unstyled"
          >
            LEARN MORE
          </Button>
        </Stack>
      </Flex>
      <Text my="20px" className={styles.txhd}>
        Ready to try?
      </Text>
      <Button my="20px" bg="#bdf300" borderRadius="20px">
        REGISTER FREE
      </Button>
    </Box>
  );
};

export default HomeBottom;
