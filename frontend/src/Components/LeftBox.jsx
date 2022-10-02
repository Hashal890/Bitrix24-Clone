import { Box, Flex, Image, Select, Spacer, Stack, Text } from "@chakra-ui/react";
import styles from "../CSS/Login.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const LeftBox =()=>{
    return(
        <Stack  backgroundColor="#53dffa"  p={10}>
        <Flex align="center" mb="150px" color="white" >
          <Image src="https://www.bitrix24.net/bitrix/templates/new/images/bitrix24-logo-en.svg" />
  
          <Flex align="bottom">
  
            <IoIosArrowRoundBack />
            <Link to="/home" className={styles.a}>back to site</Link >
          </Flex>
        </Flex>
  
        <Box m={10}>
          <Text className={styles.tx1}> Your company.</Text>
          <Text mb="25px" className={styles.tx1}> United.</Text>
          <Text mb="120px" className={styles.tx2}> Free. Unlimited. Online.</Text>
        </Box>
  
        <Flex>
          <Spacer />
          <Select placeholder='Select option'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </Flex>
      </Stack>
    )
}

export default LeftBox;